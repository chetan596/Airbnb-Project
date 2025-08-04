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
    folder: "Airbnb_data",           // folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"], // note: use allowed_formats (not allowedFormats)
  },
});


const DPupload = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Airbnb_User_dp",           // folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"], // note: use allowed_formats (not allowedFormats)
  },
});


module.exports = {cloudinary , storage, DPupload};