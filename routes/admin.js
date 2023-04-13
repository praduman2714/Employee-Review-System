const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin_controller');


router.get('/assignWork', adminController.assignWork);
router.get('/view-employee', adminController.showEmployeeList);

module.exports = router;