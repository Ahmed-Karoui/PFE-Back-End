const mongoose = require('mongoose')
var bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    last_name : {
        type : String,
    },
    email : {
        type : String,
        required : true
    },
    Birth_date : {
        type : Date,
    },
    Hire_date : {
        type : Date,
    },
    role : {
        type : String,
    },
    gender : {
        type : String,
    },
    manager : {
        type : String,
    },
    phone : {
        type : String,
    },
    status : {
        type : String,
    },
    password : {
        type : String,
        required : true,
    },
    creation_date:{type:Date, require:true}

    
})

userSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}


const User = mongoose.model('User',userSchema)

module.exports = User