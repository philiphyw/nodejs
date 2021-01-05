const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//a Schema is to define the structure of the document
const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
},{timestamps:true});//the second para {timestamps:true} is optional, once it's true, will create timestamp automatically when an instance of the Schema is created

//a model is to 
const Blog = mongoose.model('Blog',blogSchema)