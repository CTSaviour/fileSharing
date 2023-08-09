import mongoose from "mongoose";

// Creating a schema in monogdb
const FileSchema = new mongoose.Schema({
    path: {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    downloadContent : {
        type : Number, 
        required : true,
        default : 0
    },
})


//creating a mongoose model

// here give two parameters as name of the database and another one is the schemaName
const File = mongoose.model('file', FileSchema);

export default File;