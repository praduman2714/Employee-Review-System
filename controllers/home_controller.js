const User = require('../models/user');
const Review = require('../models/review');

module.exports.home = async function(req, res){
    try{
        if (!req.isAuthenticated()) {
            console.log("not logged in");
            return res.redirect('/users/sign-in');
        }

        let user = await User.findById(req.user.id);
        let review = await Review.find({ reviewer: req.user.id });

        let recipent = [];
        for(let i = 0; i<user.userToReview.length ; i++){
            let userName = await User.findById(user.userToReview[i]);
            recipent.push(userName);
        }

        let reviews = [];
        for(let i = 0; i<review.length ; i++){
            let reviewUser = await User.findById(review[i].id);
            if(reviwUser != null){
                let currUser = {
                    name : reviewUser.name,
                    content : review.content
                }
                reviews.push(currUser);
            }
        }

        
        return res.render('home',{
            title : "ERS | HOME",
            recipent : recipent,
            reviews : reviews,
            user : user
        });

    }catch(err){
        console.log(err);
        return res.redirect('back');
    }
}