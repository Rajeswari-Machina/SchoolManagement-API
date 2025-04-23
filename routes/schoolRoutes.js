const express = require('express');
const router = express.Router();
const { addSchool, listSchools } = require('../controllers/schoolControllers.js');
const { body } = require('express-validator');
const validateSchool = [
  body('name')
    .notEmpty()
    .withMessage('enter valid name')
    .isString()
    .withMessage('Name must be a string'),
  body('address')
    .notEmpty()
    .withMessage('address is must be entered')
    .isString()
    .withMessage('Address must be a string'),
  body('latitude')
    .notEmpty()
    .withMessage('latitude must not be empty please enter value')
    .isFloat()
    .withMessage('latitide must be float'),
    body('longitude')
    .notEmpty()
    .withMessage('longitude must not be empty please enter value')
    .isFloat()
    .withMessage('longitude must be float'),
]
router.post('/addSchool', validateSchool, addSchool);
router.get('/listSchools', listSchools);

module.exports = router;
