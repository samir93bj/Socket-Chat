const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat : {
        type : Schema.Types.ObjectId,
        ref  : 'Chat',
        required: true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref  : 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    file: String
});

const model = mongoose.model('Message', mySchema);

module.exports = model;  