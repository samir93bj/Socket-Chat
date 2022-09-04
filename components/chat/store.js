const Model = require('./model');

const addChat = async(chat) => {

    const chatSave = new Model(chat);
    return chatSave.save();
    
}

const getChat = async(userId) => {

	let filter = {};
	if (userId) {
		filter = {
			users: userId,
		}
	}

	try {
		return await Model.find(filter).populate('users').exec();
	}
	catch(e){
		throw new Error(e);
	}	

}

module.exports = {
    add: addChat,
    list: getChat
}