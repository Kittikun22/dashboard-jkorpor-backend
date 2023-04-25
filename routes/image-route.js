const express = require('express')
const multer = require('multer');

const {
    uploadImage,
    getImages,
    createImage,
    updateImage,
    deleteImage
} = require('../controllers/image-control')

const imageRoute = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

imageRoute.get('/getImages', getImages)
imageRoute.post('/uploadImage', upload.single('file'), uploadImage)
imageRoute.post('/createImage', createImage)
imageRoute.put('/updateImage', updateImage)
imageRoute.post('/deleteImage', deleteImage)


module.exports = imageRoute