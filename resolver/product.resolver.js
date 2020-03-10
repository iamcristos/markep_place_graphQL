const product = async(_, {input}, {model, user}) =>{
    try {
        const product = await model.product.findById(input.id)
        return product
    } catch (error) {
        throw new Error('server error')
    }
}

const products = async(_, __, {model, user}) =>{
    try {
        const product = await model.product.findAll()
        return product
    } catch (error) {
        throw new Error('server error')
    }
}

const createProduct = async(_, {input}, {model, user}) =>{
    const body = JSON.parse(JSON.stringify(input))
    try {
        const product = await model.product.createProduct(body)
        console.log(product)
        return product
    } catch (error) {
        throw new Error('server error')
    }
}


const AllowedProduct = {
    animal: 'Animal',
    plant: 'Plant'
}
module.exports = {
    Query: {
        product,
        products
    },
    Mutation: {
        createProduct
    },
    Product: {
        user(product){
            return model.user.findById(product.user)
        },
        __resolveType(product){
            return AllowedProduct[product.type]
        },
    },
    Plant: {
        user(product,_,{model}){
            return model.user.findById(product.user)
        },
    },
    Animal : {
        user(product,_,{model}){
            return model.user.findById(product.user)
        },
    }
}