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
        default : 'Active',
    },
    member : {
        type : String,
    },
    project : {
        type : String,
    },
    due_date : {
        type : Date,
        required : true,
    },
    creation_date : {
        type : Date,
        required : true,
    }
})

const Task = mongoose.model('Task',TaskSchema)

module.exports = Task