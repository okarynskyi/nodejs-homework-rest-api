const express = require('express')

const ctrl = require('../../controllers/auth')
const { ctrlWrapper } = require("../../helpers")
const { validateBody, authenticate, upload } = require("../../middlewares")
const { schemas } = require("../../models/user")

const router = express.Router()

router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail))
router.post("/verify", validateBody(schemas.emailSchema), ctrlWrapper(ctrl.resendVerifyEmail))

router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent))
router.post("/logout", authenticate, ctrlWrapper(ctrl.logout))
router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = router