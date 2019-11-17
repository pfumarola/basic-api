const express = require('express');

const router = express.Router();

const rootController = require('../controllers/root')

router.use('/', rootController.getPostRoot);

module.exports = router;
