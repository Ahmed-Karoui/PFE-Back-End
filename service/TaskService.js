var express = require('express');
var router = express.Router();
const Task = require('../model/task');
const Project = require ('../model/project');

router.post('/add-task', async (req,res) => {
    try{
        let task = new Task({
            name:req.body.name,
            description:req.body.description,
            status:req.body.status,
            member:req.body.member,
            due_date:req.body.due_date,
            creation_date:Date.now(),
            project:req.body.project,

        })
       let createdTask = await task.save() 
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


router.get('/get-tasks-by-project/:Project/projects',  (req,res) =>{
    let projectsfound  = Task.find({project:req.params.Project}).populate('projects').execPopulate;
    console.log(projectsfound)
    // res.json(projectsfound)
    });


    router.get('/get-tasks-by-project2/:Project', function(req, res) {
        Task.find({project:req.params.Project}).populate().exec(function(err, av) {
          if (err)
            res.send(err);
    
          res.json(av);
        });
      });


module.exports = router;
