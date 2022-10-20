const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true,
    },
    urgency : {
        type : String,
        required : true,
    },
    departement : {
        type : String,
        required : true,
    },
    creation_date : {
        type : String,
        required : true,
    },
    estiamte_date : {
        type : String,
        required : true,
    },
    status : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    user : {
        type : String,
        required : true,
    }
})

const Ticket = mongoose.model('Ticket',TicketSchema)

module.exports = Ticket