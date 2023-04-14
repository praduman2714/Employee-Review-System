const Users = require('../models/user');

module.exports.assignWork = async function(req, res){
    let employe = await Users.find({});

    return res.render('admin',  {
        title : 'ERS | Assign Work',
        employe : employe
    });
}

module.exports.showEmployeeList = async function(req, res){
    // if(req.isAuthenticated()){
    //     if(req.user.isAdmin){

    //     }
    // }

    let employeList = await Users.find({});

    return res.render('employee', {
        title : "ERS | Employe-List",
        employes : employeList
    });
}


module.exports.setReviewrAndReviewe = async function(req, res){
    try{
        if(!req.isAuthenticated()){
            // flash messages
            console.log("Please logIn");
            return res.redirect('/users/sign-in');
        }else{
            let employee = await Users.findById(req.user.id);
    
            if(employee.isAdmin == false){
                // flash Messages
                console.log('User is not admin');
                return res.redirect('/users/sign-in');
            }
        
            else if(req.body.sender == req.body.reciver){
                // flash messages
                console.log("sender === reciver")
                return res.redirect('back');
            }
        
            else{
                let sender = await Users.findById(req.body.sender);
                let reciver = await Users.findById(req.body.reciver);
                //console.log(sender + " " + reciver);
                sender.userToReview.push(reciver);
                sender.save();
                reciver.reviewRecivedFrom.push(sender);
                reciver.save();
                // flash Messages
                return res.redirect('back');
            }
        }
    
        
    }catch(err){
        console.log("Errror in setting up the user " + err);
    }

}

module.exports.newAdmin = async function(req, res){
    try{
        if(!req.isAuthenticated()){
            console.log('Please LogIn');
            // flash Messages
            return res.redirect('/users/sign-in');
        }
    
        if(req.user.isAdmin == false){
            // flash messages
            return res.redirect('/');
        }
        if(req.user.isAdmin){
            let user = await Users.findById(req.body.selectedUser);
            if(!user){
                // flash Messages
                return res.redirect('back');
            }
            user.isAdmin = "true";
            user.save();
            return res.redirect('back');
        }
        
    }catch(err){
        console.log(err);
        return res.redirect('back');
    }
}


module.exports.deleteEmployee = async function(req, res){
    try{
        if(!req.isAuthenticated()){
            // flash Messages
            return res.redirect('users/sign-in');
        }

        if(!req.user.isAdmin){
            // flash Messages
            return res.redirect('/');
        }

        let employee = await Users.deleteOne({_id : req.params.id});
        // flash Messages
        return res.redirect('back');

    }catch(err){
        console.log(err);
        return res.redirect('back');
    }
}