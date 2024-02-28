const bcrypt = require('bcrypt');
const validateUser = require('../joi/user/user');
const User= require('../models/users')

const createUser = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');

    user = new User({
        email: req.body.email,
        password:req.body.password
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user = await user.save();

    const token = user.generateAuthToken();

    res.header('x-auth-token', token).send(user.email);
};

module.exports = createUser;