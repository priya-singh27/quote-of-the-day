// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// const User = require('../models/users');
// const config = require('config');

// const authMiddleware = async (req, res, next) => {
//     const token = req.headers.authorization && req.headers.authorization.split(' ')[1];  

//     if (token) {
//         try {
//             //verify token
//             const decoded = jwt.verify(token,config.get('jwtPrivateKey') );

//             //If the token is valid ,set isLoggedIn to true in the database
//             await User.findByIdAndUpdate(decoded._id, { isLoggedIn: true });
//             req._id = decoded._id;
//         } catch (err) {
            
//             //If the token is invalid or expired,set isLoggedIn to false in the database
//             await User.findByIdAndUpdate(decoded._id, { isLoggedIn: false });
//             console.log('Error verifying token:',err);
//         }
//     }

//     next();
// };
// app.use(authMiddleware);