const mongoose = require('mongoose')

const TrainingSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true,
    },
    members : {
        type : Array,
    },
    status : {
        type : String,
        required : true,
    },
    training_date : {
        type : String,
        required : true,
    }
})

const Training = mongoose.model('Training',TrainingSchema)

module.exports = Training