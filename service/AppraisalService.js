var express = require('express');
var router = express.Router();
const Appraisal = require('../model/appraisal')

router.post('/add-appraisal', async (req,res) => {
    try{
        let user = new Appraisal({
            previous_date:req.body.previous_date,
            Next_date:req.body.Next_date,
            Objectives:req.body.Objectives,
            raise:req.body.raise,
        })
       let createdAppraisal = await user.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdAppraisal
        }
    })
    }catch(err){
        console.log(err)
    }
})


router.get('/get-appraisals',  (req,res) =>{
    Appraisal.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})


router.patch('/update-appraisal/:id', async (req,res) => {
    const updatedAppraisal = await Appraisal.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedAppraisal
            }
          })
    }catch(err){
        console.log(err)
    }
})


router.delete('/delete-appraisal/:id', async (req,res) => {
    const id = req.params.id
    await Appraisal.findByIdAndRemove(id).exec()
    res.send('Deleted')
})


module.exports = router;
