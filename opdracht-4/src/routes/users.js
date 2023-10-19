const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res) => {
    res.render('users', {
        users: users,
        pageTitle: 'Users',
        path: 'users',
        hasUsers: users.length > 0,
    });
});

module.exports = router;