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