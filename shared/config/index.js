const path = require('path');
const env = process.env.NODE_ENV;

const ROOT_PATH = path.resolve(__dirname, '..'); /* ? */

module.exports = {
    version: '1.0.0',
    port: process.env.PORT || 3000,
    env,
    mongodbUri: env === 'development' ? 'mongodb://localhost:27017/imsklad' : process.env.MONGODB_URL,
    paths: {
        viwes: path.resolve(ROOT_PATH, 'views'),
        public: path.resolve(ROOT_PATH, 'public'),
        lib: path.resolve(ROOT_PATH, 'node_modules')
    },
    
}
