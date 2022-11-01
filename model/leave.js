const mongoose = require('mongoose')

const LeaveSchema = new mongoose.Schema({
    title : {
        type : String,
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
    }
})

const Leave = mongoose.model('Leave',LeaveSchema)

module.exports = Leave