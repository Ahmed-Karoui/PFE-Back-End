const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const taks = require('../model/task')

const ProjectSchema = new mongoose.Schema({
    project_name : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    project_leader : {
        type : String,
    },
    members : {
        type : String,
    },
    status : {
        type : String,
        required : true,
        default : 'Active',
    },
    category : {
        type : String,
    },
    Deadline : {
        type : Date,
    },
    creation_date : {
        type : Date,
        required : true
        
    },
    tasks:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    }]
})

const Project = mongoose.model('Project',ProjectSchema)

module.exports = Project