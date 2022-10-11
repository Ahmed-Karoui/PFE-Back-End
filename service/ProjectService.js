var express = require('express');
var router = express.Router();
const Project = require('../model/project')
const User = require('../model/user')

router.post('/add-project', async (req,res) => {
    try{
        let user = new Project({
            project_name:req.body.project_name,
            description:req.body.description,
            project_leader:req.body.project_leader,
            members:req.body.members,
            status:req.body.status,
            Deadline:req.body.Deadline,
            category:req.body.category,
            creation_date:Date.now()
        })
       let createdProject = await user.save() 
       res.status(201).json({
        status : 'Success',
        data : {
            createdProject
        }
    })
    }catch(err){
        console.log(err)
    }
})


router.get('/get-projects',  (req,res) =>{
     Project.find({}, (err,result)=>{
        if(err){
            res.send(err)
        }
         res.send(result)
     })
 })


router.patch('/update-project/:id', async (req,res) => {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedProject
            }
          })
    }catch(err){
        console.log(err)
    }
})


router.delete('/delete-project/:id', async (req,res) => {
    const id = req.params.id
    await Project.findByIdAndRemove(id).exec()
    res.send('Deleted')
})


module.exports = router;
