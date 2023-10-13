const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/user', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'html', 'users.html'));
});

module.exports = router;