
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    author_id:{
        type:Number,
        required:true
    },
    author_name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true,
    }

});

const authorApi = mongoose.model('author', userSchema);

module.exports = authorApi