const express = require('express');
const { saveLayout, loadLayout } = require('../controllers/layoutController');

const router = express.Router();

router.post('/save-layout', saveLayout);
router.get('/load-layout/:userId', loadLayout);

module.exports = router;
