const express = require('express');
const router = express.Router();
const { submitMessage } = require('../controllers/messageController');

router.post('/', submitMessage);

module.exports = router;
