const path = require('path');

const upload =  async (req, res) => {
  try {
     const response = await req.file;
     const filePath = req.file ? req.file.path : "";
     // store the file path address to the database
     return res.status(200).json({
          data : response,
          message : `File uploaded successfully`,
          success : true,
          err : {}
     }) 
  } catch (error) {
     console.log(error);
     return res.status(500).json({
          message : `Error while uploading image`,
          error : error.message
     })
  }
}

module.exports = {
     upload,
}