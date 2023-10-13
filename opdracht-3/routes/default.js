const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'html', 'index.html'));
});

module.exports = router;