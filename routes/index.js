import { time } from "console"
import express from "express"
const router = express.Router()
import fs from "fs"
import { title } from "process"



router.get("/", (req, res) => {

    res.render("index.njk", {
        title: "Vår första dynamiska sida",
        message: "Med Nunjucks skapar vi magi!"
    })

})

router.get("/story", (req, res) => {

    res.render("story.njk", {
        title: "ARE YOU READY I CAN'T HEAR YOU",
        message: "Your story start now"
    })

})






export default router