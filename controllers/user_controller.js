const User = require('../models/user');

module.exports.signIn = function(req, res){
    return res.render('sign_in');
}

module.exports.createSession = async function(req, res){
    // console.log(req.body);
    return res.redirect('/');
}

module.exports.signUp = function(req, res){
    return res.render('sign_up');
}

module.exports.create = async function(req, res){
    if(req.body.password != req.body.confirmPassword){
        //disply flash messages
        return res.redirect('back');
    }
    let user = await User.findOne({email : req.body.email});
    if(!user){
        await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            isAdmin : false
        });
        return res.redirect('/users/sign-in');
    }
    return res.redirect('back');
}

module.exports.destroySession = function (req, res, done){
    return req.logout((err) =>{
        if(err){
            return done(err);
        }
        return res.redirect('/users/sign-in');
    });
    
}
