import { time } from "console"
import express from "express"
const router = express.Router()
import fs from "fs"
import { title } from "process"



router.get("/", (req, res) => {

    res.render("index.njk", {
        title: "BIG Website",
        message: "welcome to this magical website"
    })

})








export default router