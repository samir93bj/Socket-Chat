const socket  = require('../../socket').socket;
const store = require('./store');

function addMessage(chat, user, message, file){

    return new Promise((resolve,reject) => {

        let fileURL = "";
        if(file){
            fileURL = 'http://localhost:8080/app/files/'+file.filename;
        }

        //Reject
        if(!user || !message){
            console.error('[MessageController] No hay usuario o mensaje');

            reject('Los datos son incorrectos');
        }

        const fullMessage = {
            "chat":chat,
            "user":user,
            "message": message,
            "date": new Date(),
            "file": fileURL
        }

        store.add(fullMessage);

        socket.io.emit('message', fullMessage);

        resolve(fullMessage);
    })
};

function getMessage(filterMessage){ 

    return new Promise((resolve, reject) =>{
        //El resolve no recibe un callback como parametro
        resolve(store.list(filterMessage));
    });
}

function uploadMessage(id, message){

    return new Promise(async (resolve,reject) => {

        //Se resuelve el reject
        if(!id || !message){
            reject('Invalid data');
        }
        
        const result = await  store.updateText(id, message);
        return resolve(result);
    });

}

function deleteMessage(id){

    return new Promise(async (resolve, reject) => {

        if(!id){
            reject('Invalid data');
        }

        const result = await store.delete(id);

        if(result == null){
            reject('Usuario Inexistente');
        }

        return resolve(result); 
    });
}

module.exports = { 
    addMessage,
    getMessage,
    uploadMessage,
    deleteMessage
}; 