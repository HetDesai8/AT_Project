const express = require('express')
const userctrl=require("../controllers/userControl")

const router = express.Router()
router.post('/Login', userctrl.userLogin)
router.post('/Register', userctrl.userRegister)
router.post('/ViewCart', userctrl.userViewItem)
router.post('/DeleteCart', userctrl.userDeleteItem)
router.post('/AddItem', userctrl.userAddItem)

module.exports = router