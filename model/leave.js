const mongoose = require('mongoose')

const LeaveSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    start_date : {
        type : String,
        required : true
    },
    end_date : {
        type : String,
        required : true,
    },
    user : {
        type : String,
        required : true,
    }
})

const Leave = mongoose.model('Leave',LeaveSchema)

module.exports = Leave