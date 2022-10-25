const multer = require("multer");
const path = require("path");
const { brotliCompress } = require("zlib");

//Destination to store image
const imageStorage = multer.diskStorage({
     destination: (req, file, cb) => {
          let folder = "";

          if (req.baseUrl.includes("users")) {
               folder = "users";
          } else if (req.baseUrl.includes("photos")) {
               folder = "photos";
          } //Add more if's you need

          cb(null, `uploads/${folder}/`);
     },

     filename: (req, file, cb) => {
          cb(null, Date.now() + path.extname(file.originalname)); // adadasdasdasd.jpeg
     },
});

const imageUpload = multer({
     storage: imageStorage,
     fileFilter(req, file, cb) {
          if (!file.originalname.match(/\.(png|jpg)$/)) {
               //upload only png and jps formats
               return cb(
                    new Error("Only files with '.png' and '.jpg' are accepted.")
               );
          }
          cb(undefined, true);
     },
});

module.exports = { imageUpload };
