const express = require('express')

const router = express.Router()

const formDataCTRL = require('../controllers/formData')
const multer = require('../middlewares/multer-config')

router.post('/', multer, formDataCTRL.createCover)
router.get('/', formDataCTRL.getCover)

module.exports = router
