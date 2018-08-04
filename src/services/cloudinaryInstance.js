const cloudinary = require('cloudinary');
const env = require('dotenv');
env.load();

const config = {
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET
};

cloudinary.config(config);


module.exports = cloudinary;
