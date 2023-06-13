const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `env/${process.env.NODE_ENV}.env`)
});


module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || '16.16.162.164',
    PORT : process.env.PORT || 4000,
    SECRET: process.env.SECRET || 'AAAAA'
}
