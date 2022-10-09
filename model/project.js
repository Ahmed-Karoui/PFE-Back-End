const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    project_leader : {
        type : String,
        required : true,
    },
    members : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    Deadline : {
        type : String,
        required : true,
    },
    creation_date : {
        type : String,
        required : true,
    }
})

const Project = mongoose.model('Project',ProjectSchema)

module.exports = Project