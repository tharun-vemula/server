
const express = require('express');
const parseController = require('../controllers/parse'); //gets hold of controller

const router = express.Router();

router.post('/data', parseController.getData); //post request



module.exports = router;
//exports router