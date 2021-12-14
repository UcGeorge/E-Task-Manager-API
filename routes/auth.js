const { loginUser, createUser } = require('../api/authenticate.js');
const express = require('express');

router = express.Router();

router
    .post('/signup', createUser)
    .post('/login', loginUser)
    .get('*', (req, res) => {
        res.status(404).send({ url: req.originalUrl + ' not found' })
    });

module.exports = router;