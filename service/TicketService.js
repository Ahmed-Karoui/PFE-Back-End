var express = require('express');
var router = express.Router();
const Ticket = require('../model/ticket')

router.post('/add-ticket', async (req,res) => {
    try{
        let ticket = new Ticket({
            description:req.body.description,
            category:req.body.category,
            urgency:req.body.urgency,
            departement:req.body.departement,
            creation_date:Date.now(),
            estiamte_date:req.body.estiamte_date,
            user:req.body.user,
        })
       let createdTicket = await ticket.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdTicket
        }
    })
    }catch(err){
        console.log(err)
    }
})


router.get('/get-tickets',  (req,res) =>{
    Ticket.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})


router.patch('/update-ticket/:id', async (req,res) => {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedTicket
            }
          })
    }catch(err){
        console.log(err)
    }
})


router.delete('/delete-ticket/:id', async (req,res) => {
    const id = req.params.id
    await Ticket.findByIdAndRemove(id).exec()
    res.send('Deleted')
})


module.exports = router;
