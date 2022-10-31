var express = require('express');
var router = express.Router();
const Leave = require('../model/leave')

router.post('/add-leave', async (req,res) => {
    try{
        let leave = new Leave({
            description:req.body.description,
            start_date:req.body.start_date,
            end_date:req.body.end_date,
            user:req.body.user,
            status:req.body.status,
        })
       let createdLeave = await leave.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdLeave
        }
    })
    }catch(err){
        console.log(err)
    }
})


router.get('/get-leaves',  (req,res) =>{
    Leave.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})


router.patch('/update-leave/:id', async (req,res) => {
    const updatedLeave = await Leave.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedLeave
            }
          })
    }catch(err){
        console.log(err)
    }
})


router.delete('/delete-leave/:id', async (req,res) => {
    const id = req.params.id
    await Leave.findByIdAndRemove(id).exec()
    res.send('Deleted')
})


module.exports = router;
