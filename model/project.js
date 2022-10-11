const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
    project_name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
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
        required : true,
    },
    Deadline : {
        type : Date,
        required : true,
    },
    creation_date : {
        type : Date,
        required : true
        
    }
})

const Project = mongoose.model('Project',ProjectSchema)

module.exports = Project