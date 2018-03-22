const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    username: {type:String, unique: true, required: true},
    password: {type:String, required: true},
    currentList: {
      cpu: String,
      gpu: String
    }
});

const User = mongoose.model('User', userModel);

module.exports = User;