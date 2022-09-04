
const Model = require('./models');

//AGREGAR MENSAJE 
function addMessage(message){

    const myMessage = new Model(message);
    myMessage.save();
}

//OBTENER MENSAJES
const getMessages = async (filterMessage) => {
    
    return new Promise((resolve, reject)=>{
        
        let filter= {};

        if( filterMessage !== null){

            filter = {user : new RegExp(filterMessage, "i")}  

        }
        
        Model.find(filter)
                .populate('user')
                .exec((error, populated) => {
                    if(error){ 
                        reject(error);
                        return false; 
                    }
                    resolve(populated)
                });
    })           
}

//ACTUALIZAR MENSAJES
const updateText = async (id, message) => {
    
    const result = Model.findByIdAndUpdate(id, { message:message }); 
    return result;

}

//ELIMINAR MENSAJES
const deleteMessage = async(id) => {    

   const result = Model.findByIdAndDelete(id);
   return result;

}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    delete: deleteMessage
}



//////////////MOCKs
/*const list = [];

function addMessage(message){
    //list.push(message);

    const myMessage = new Model(message);
    myMessage.save();
}

function getMessages(){
    return list;
}
*/