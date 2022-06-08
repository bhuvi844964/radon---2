const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({

        name:{

            type:String,
            require:true
        },
        authorName:{
           type:String,
           required:true
        },
        author_id:{
            type:Number,
            required:true
        },

        price:{

            type:Number,
            required:true
        },
        ratings:{
            type:Number,
            required:true
        }

})

const BookApi = mongoose.model("Book",userSchema);

module.exports = BookApi