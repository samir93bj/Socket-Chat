const store = require('./store');

function addChat(users){

    return new Promise((resolve, reject)=>{
        
        if(!users || !Array.isArray(users)){
            reject('Es necesario enviar un chat');
        }

        const chat = {
            users: users
        }

        resolve (store.add(chat)); 
    });
}

function getChat(userId){
    return new Promise(async (resolve, reject) => {
        resolve(store.list(userId));
    });
}

module.exports = {
    addChat,
    getChat
}