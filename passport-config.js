var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var User = require('./model/user');

passport.use('local',new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},
    function (username, password, done) {
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.isValid(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));


passport.serializeUser(function(user, done) {
    return done(null, user.id); //this is the 'user' property saved in req.session.passport.user
});

passport.deserializeUser(function (id, done) {
    return User.findOne({ _id: id }, function (error, user) {
        return done(error, user);
    });
});