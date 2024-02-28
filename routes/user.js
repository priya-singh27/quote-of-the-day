const createUser = require('../controller/user.controller');
const authenticate = require('../controller/auth.controller');
const express = require('express');
const router = express.Router();

//Signing up
router.post('/', createUser);
router.post('/', authenticate);

module.exports = router;