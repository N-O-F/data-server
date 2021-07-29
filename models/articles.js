const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")
const Schema = mongoose.Schema;

const Articles = new Schema({
    id:{
        unique:true,
        type:String,
        required:true   
    },
    author:{
        img:String,
        profile:String,
        id:String
    },
    article:{
        url:{
            type:String,
            unique:true,
        },
        readingTime:Number,
        publishedOn:Date,
        img:String,
        title:String,
        likes:String,
        desc:String
    },
    searchWord:String,
    source:String,
    contentType:{
        type:String,
        default:"article"
    },
    nouns:{
        type:Array,
        default:[]
    }
})

Articles.plugin(uniqueValidator);

module.exports = mongoose.model("articles",Articles);