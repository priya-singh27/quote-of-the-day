const validateUser = require('../joi/user/user');
const bcrypt = require('bcrypt');
const User = require('../models/users');

const authenticate = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).message('No user with the given email exists.Try signing up.');
    }

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) {
        return res.status(400).send('Either email or password is incorrect.')
    }

    const token = user.generateAuthToken();
    res.send(token);
}

module.exports = authenticate;