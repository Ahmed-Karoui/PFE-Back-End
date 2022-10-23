const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
    description : {
        type : String,
    },
    category : {
        type : String,
    },
    urgency : {
        type : String,
    },
    departement : {
        type : String,
    },
    creation_date : {
        type : String,
    },
    estiamte_date : {
        type : String,
    },
    status : {
        type : String,
    },
    content : {
        type : String,
    },
    user : {
        type : String,
    }
})

const Ticket = mongoose.model('Ticket',TicketSchema)

module.exports = Ticket