var express = require('express');
var router = express.Router();
const User = require('../model/user')
var passport = require('passport');

router.post('/signup', async (req,res) => {
    try{
        let user = new User({
            name:req.body.name,
            last_name:req.body.last_name,
            email:req.body.email,
            Birth_date:req.body.Birth_date,
            Hire_date:req.body.Hire_date,
            role:req.body.role,
            gender:req.body.gender,
            manager:req.body.manager,
            phone:req.body.phone,
            status:req.body.status,
            password:User.hashPassword(req.body.password),
            creation_date:Date.now()
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
    res.status(200).json('deleted')
})


router.post('/login',function(req,res,next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); console.log(user) }
    if (!user) { return res.status(501).json(info); console.log(user)}
    req.logIn(user, function(err) {
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);
});
  
  router.get('/user',isValidUser,function(req,res,next){
    return res.status(200).json(req.user);
  });
  
  router.get('/logout',isValidUser, function(req,res,next){
    req.logout();
    return res.status(200).json({message:'Logout Success'});
  })
  
  function isValidUser(req,res,next){
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message:'Unauthorized Request'});
  }
module.exports = router;
