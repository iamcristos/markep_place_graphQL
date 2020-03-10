// // const {pubSub} = require('../index')
// const {PubSub} = require('apollo-server')
// const pubSub = new PubSub();
const OrderPublished = 'OrderPublished';

const order = async (_, {input}, {model, user}) =>{
    const {id} = input
    try {
        const order = await model.order.getOrder(id)
        console.log(order);
        return order
    } catch (error) {
        throw new Error(error)
    }
}

const createOrder = async (_, {input}, ctx) => {
    const {model, pubSub} = ctx
    const body = JSON.parse(JSON.stringify(input))
    pubSub.publish(OrderPublished, {
        notifyOrder: body
    })
    try {
        const order = await model.order.createOrder(body)
        return order
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

module.exports = {
    Query:{order},
    Mutation: {
        createOrder
    },
    Subscription: {
        notifyOrder: {
            subcribe: (_, __, {pubSub}) =>  pubSub.asyncIterator(OrderPublished)
        }
    }
}