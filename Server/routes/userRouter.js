const express = require('express')
const userctrl=require("../controllers/userControl")

const router = express.Router()
router.post('/Login', userctrl.userLogin)
router.post('/Register', userctrl.userRegister)


module.exports = router