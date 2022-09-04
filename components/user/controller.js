const store = require('./store');

//AGRAGAR USUARIO
const addUser = async (name) => {

    return new Promise (async (resolve,reject) => {
        
        if(!name){
            reject('Nombre Incompleto');
        }
        const user = {
            "name": name
        }

       await resolve(store.add(user));

    });
    
}

//OBTENER USUARIO
const getUser = async (name) => {

    return new Promise (async (resolve,reject) => {

        const users =  await store.get(name);

        if(users.length === 0){
            reject('Usuario Inexistente');
        };
        resolve(users);
    });

}

module.exports= {
    addUser,
    getUser
} 