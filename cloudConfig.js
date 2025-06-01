const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({ 
  cloud_name: process.env.IMAGE_CLOUD_NAME, 
  api_key:  process.env.IMAGE_CLOUD_API, 
  api_secret: process.env.IMAGE_CLOUD_API_SECRET
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Airbnb_data',
    allowerdFormats: ["png" , "jpg" , "jpeg"],
   
  },
});

module.exports = {cloudinary , storage}