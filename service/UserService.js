var express = require('express');
var router = express.Router();
const User = require('../model/user')

router.post('/signup', async (req,res) => {
    let {name,email,password} = req.body 

    try{
        let user = new User({
            name,
            email,
            password
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


router.get('/get-user',  (req,res) =>{
    User.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})


router.patch('/update-user/:id', async (req,res) => {
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


router.delete('/delete-user/:id', async (req,res) => {
    const id = req.params.id
    await User.findByIdAndRemove(id).exec()
    res.send('Deleted')
})

module.exports = router;
