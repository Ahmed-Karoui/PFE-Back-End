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
    status : {
        type : String,
        required : true,
    },
    training_date : {
        type : String,
        required : true,
    },
    users: [{ type: mongoose.Types.ObjectId, ref: 'user' }],

})

const Training = mongoose.model('Training',TrainingSchema)

module.exports = Training