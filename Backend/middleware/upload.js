const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    //location where file will be saved
    destination: function(req, file, cb){
        cb(null, 'uploads/')  
    },
    //renames files with current timestamp and extensions
    filename: function(req, file, cb){
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext) // Example: 1730392563400.jpg
    }
})

var upload = multer({
    storage: storage,
    //restricts what file types can be uploaded
    fileFilter: function(req, file, callback){
        if(
            file.mimetype == "application/pdf"||
            file.mimetype == "image/png"||
            file.mimetype == "image/jpeg"
        ){
            callback(null, true)
        } else{
            console.log("Only pdf, png, jpg supported!")
            callback(null, false)
        }
    }, 
    // Set maximum file size limit (here: 64 MB)
    limits: {
        fileSize: 1024 * 1024 * 64
    }
})

module.exports = upload