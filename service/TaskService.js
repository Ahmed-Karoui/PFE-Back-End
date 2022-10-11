var express = require('express');
var router = express.Router();
const Task = require('../model/task')

router.post('/add-task', async (req,res) => {
    try{
        let user = new Task({
            name:req.body.name,
            description:req.body.description,
            status:req.body.status,
            member:req.body.member,
            due_date:req.body.due_date,
            creation_date:Date.now(),

        })
       let createdTask = await user.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdTask
        }
    })
    }catch(err){
        console.log(err)
    }
})


router.get('/get-tasks',  (req,res) =>{
    Task.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})


router.patch('/update-task/:id', async (req,res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedTask
            }
          })
    }catch(err){
        console.log(err)
    }
})


router.delete('/delete-task/:id', async (req,res) => {
    const id = req.params.id
    await Task.findByIdAndRemove(id).exec()
    res.send('Deleted')
})


module.exports = router;
