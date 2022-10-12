var express = require('express');
var router = express.Router();
const Training = require('../model/training')

router.post('/add-training', async (req,res) => {
    try{
        let training = new Training({
            name:req.body.name,
            description:req.body.description,
            category:req.body.category,
            member:req.body.member,
            status:req.body.status,
            training_date:req.body.training_date,

        })
       let createdTraining = await training.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdTraining
        }
    })
    }catch(err){
        console.log(err)
    }
})


router.get('/get-trainings',  (req,res) =>{
    Training.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})


router.patch('/update-training/:id', async (req,res) => {
    const updatedTraining = await Training.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedTraining
            }
          })
    }catch(err){
        console.log(err)
    }
})


router.delete('/delete-training/:id', async (req,res) => {
    const id = req.params.id
    await Training.findByIdAndRemove(id).exec()
    res.send('Deleted')
})


module.exports = router;
