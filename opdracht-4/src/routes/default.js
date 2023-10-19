const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.render('default', {
        pageTitle: 'Default page',
        path: '/'
    });
});

module.exports = router;