const mongoose = require('mongoose')
var bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name : {
        type : String    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    creation_dt:{type:Date, require:true}

    
})

userSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

userSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

const User = mongoose.model('User',userSchema)

module.exports = User