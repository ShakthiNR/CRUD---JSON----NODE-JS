const express = require("express")
const router = express.Router()
const { createUser, getUniqueUser, getUsers, updateUser, deleteUser } = require("../Controllers/users")


router.get("/get/users",getUsers)
router.get("/user/:id",getUniqueUser)
router.post("/create/user",createUser)
router.patch("/update/user/:id",updateUser)
router.delete("/delete/user/:id",deleteUser)


module.exports = router