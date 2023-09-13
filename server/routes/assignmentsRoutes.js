const express = require('express');
const router = express.Router();
const assignmentsController = require('../controllers/assignmentsController');

router.get('/', assignmentsController.getList);
router.post('/', assignmentsController.create);
router.get('/:id', assignmentsController.getDetails);
router.put('/:id', assignmentsController.update);
router.delete('/:id', assignmentsController.delete);

module.exports = router;
