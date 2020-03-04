const user = (_,args, {model}) =>{
    const user = model.user.findLocation()
    console.log(user)
    return {
        name: "Vincent"
    }
}

module.exports = {
    Query: {user}
}