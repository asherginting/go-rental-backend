const route = require('express').Router();

route.use('/vehicles', require('./vehicles'));
route.use('/popular', require('./popular'));
route.use('/users', require('./users'));
route.use('/auth', require('./auth'));
route.use('/profile', require('./profile'));
route.use('/histories', require('./histories'));
route.use('/categories', require('./categories'));

route.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'GoRental Backend is Running!'
    });
});

module.exports = route;
