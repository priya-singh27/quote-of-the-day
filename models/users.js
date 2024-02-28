const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

userSchema.methods.generateAuthToken = function () {
    //Token is generated using data in payload +secretkey
    const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
    return token;
};

const User = mongoose.model('User', userSchema);

module.exports = User;