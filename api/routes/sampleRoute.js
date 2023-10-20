// routes/sampleRoute.js
const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/data', sampleController.getSampleData);

module.exports = router;
