const express = require('express'); // requiring expresss
const router = express.Router(); // router
const homeController = require('../controllers/home_controller'); // requeiring homeController

console.log(`router is loaded : {200}`);

router.get('/' , homeController.home);
router.use('/users' , require('./users'));

module.exports = router;