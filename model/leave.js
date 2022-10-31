const mongoose = require('mongoose')

const LeaveSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    start_date : {
        type : Date,
        required : true
    },
    end_date : {
        type : Date,
        required : true,
    },
    user : {
        type : String,
    },
    status : {
        type : String,
        required : true,
    }
})

const Leave = mongoose.model('Leave',LeaveSchema)

module.exports = Leave