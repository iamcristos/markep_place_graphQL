const product = () =>{
    return {
        name: "Cristos"
    }
}

const AllowedProduct = {
    animal: 'Animal',
    plant: 'Plant'
}
module.exports = {
    Query: {
        product,
        products,
        createProduct
    },
    Product: {
        __resolveType(product){
            return product.type[AllowedProduct]
        },
        user(product,_, {model}){
            return model.user.findById(product.userId)
        }
    }
}