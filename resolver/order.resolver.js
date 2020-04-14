// // const {pubSub} = require('../index')
const {PubSub} = require('apollo-server-express')
const pubsub = new PubSub();
const models = require('../models');

const OrderPublished = 'OrderPublished';

const order = async (_, {input}, {model, user}) =>{
    const {id} = input
    try {
        const order = await model.order.getOrder(id)
        return order
    } catch (error) {
        throw new Error(error)
    }
}

const createOrder = async (_, {input}, ctx) => {
    const {model} = ctx
    const body = JSON.parse(JSON.stringify(input))
    try {
        const order = await model.order.createOrder(body)
        // const orders = {...order}
        // orders.buyer = await model.user.findById(orders.buyer)
        // orders.product = await model.product.findById(orders.product)
        // console.log(orders)
            await pubsub.publish(OrderPublished, {
            notifyOrder: order
            }
        )
        return order
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    Subscription: {
        notifyOrder: {
            subscribe: () => pubsub.asyncIterator(OrderPublished)
        }
    },
    Query:{order},
    Mutation: {
        createOrder
    },
    Order: {
        async buyer(order, _, {model}){
            return model.user.findById(order.buyer)
        }
    }
}