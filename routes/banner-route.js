const express = require('express')

const {
    getBanner,
    createBanner,
    deleteBanner,
    updateBanner
} = require('../controllers/banner-control')

const bannerRoute = express.Router()

bannerRoute.get('/getBanner', getBanner)
bannerRoute.post('/createBanner', createBanner)
bannerRoute.post('/deleteBanner', deleteBanner)
bannerRoute.put('/updateBanner', updateBanner)


module.exports = bannerRoute