var express = require('express');
var router = express.Router();
const Task = require('../model/task')

router.post('/add-task', async (req,res) => {
    try{
        let user = new User({
            name:req.body.name,
            email:req.body.email,
            password:User.hashPassword(req.body.password),
            creation_dt:Date.now()
        })
       let createdUser = await user.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdUser
        }
    })
    }catch(err){
        console.log(err)
    }
})


router.get('/get-tasks',  (req,res) =>{
    User.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})


router.patch('/update-task/:id', async (req,res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
              updatedUser
            }
          })
    }catch(err){
        console.log(err)
    }
})


router.delete('/delete-task/:id', async (req,res) => {
    const id = req.params.id
    await User.findByIdAndRemove(id).exec()
    res.send('Deleted')
})


module.exports = router;
