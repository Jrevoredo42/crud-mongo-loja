const express = require('express');

const { 
    getAllEmploye,
    createEmploye,
    updtadeEmploye,
    getEmployeById,
    deleteEmploye,
} = require('../controllers/EmployeController');

const router = express.Router();

router.route('/').get(getAllEmploye).post(createEmploye);
router.route('/:id').get(getEmployeById).put(updtadeEmploye).delete(deleteEmploye);

module.exports = router;