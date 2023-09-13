const express = require('express');
const router = express.Router();
const submissionsController = require('../controllers/submissionsController');

router.post('/', submissionsController.submit);

module.exports = router;
