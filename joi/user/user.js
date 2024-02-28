const Joi = require('joi');

module.exports = function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(user);
};