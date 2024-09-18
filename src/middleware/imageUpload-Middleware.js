const multer = require('multer');
const path = require('path');

console.log(path);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/image");
  },
  filename: (req, file, cb) => {
    cb(null,  Date.now() + path.extname(file.originalname));
  },
});


module.exports = storage;