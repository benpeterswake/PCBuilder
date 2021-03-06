const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listModel = new Schema({
    user_id: {type:String},
    cpu: {name: String, make: String, price: Number, link: String, id: String},
    gpu: {name: String, make: String, price: Number, link: String, size:Number, id: String},
    mobo: {name: String, make: String, price: Number, link: String, id: String},
    ram: {name: String, make: String, price: Number, link: String, size:Number, id: String},
    psu: {name: String, make: String, price: Number, link:String, watts:Number, id: String},
    storage: {name: String, make:String, price: Number, link: String, size:Number, id: String},
    case: {name: String, name: String, price: Number, link: String, id: String},
    cooler: {name: String, make: String, price: Number, link: String, id: String},
    monitor: {name: String, make: String, price: Number, link: String, size:String, id: String},
});

const List = mongoose.model('List', listModel);

module.exports = List;
