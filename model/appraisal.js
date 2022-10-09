const mongoose = require('mongoose')

const AppraisalgSchema = new mongoose.Schema({
    previous_date : {
        type : String,
        required : true
    },
    Next_date : {
        type : String,
        required : true
    },
    Objectives : {
        type : String,
        required : true,
    },
    raise : {
        type : String,
        required : true,
    }
})

const Appraisal = mongoose.model('Appraisal',AppraisalgSchema)

module.exports = Appraisal