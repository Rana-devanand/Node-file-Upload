const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = require("../middleware/imageUpload-Middleware")
const uploadImageController = require("../controllers/uploadImage");

const upload  = multer({ storage })

router.post("/upload" , upload.single("image") , uploadImageController.upload )


module.exports = router;