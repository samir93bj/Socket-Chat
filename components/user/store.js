const Model = require('./model');

//AGREGAR USUARIO
const addUser = async (user) => {

    const myUser = new Model(user);
    return myUser.save();
    
}

//OBTENER USUARIOS
const getUser = async(filterUser) => {

    let filter= {};

    if( filterUser !== null){
        filter = {name : new RegExp(filterUser, "i")}  
    }
    
    try{
        return await Model.find(filter);
    }
    catch (e){
        throw new Error(e);
    }   
    

}

module.exports = {
    add: addUser,
    get: getUser
} 