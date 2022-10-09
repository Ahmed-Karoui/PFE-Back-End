const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
    },
    member : {
        type : String,
        required : true,
    },
    project : {
        type : String,
        required : true,
    },
    due_date : {
        type : String,
        required : true,
    },
    creation_date : {
        type : String,
        required : true,
    }
})

const Task = mongoose.model('Task',TaskSchema)

module.exports = Task