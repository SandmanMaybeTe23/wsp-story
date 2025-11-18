import fs from "fs"
import express from "express"
const router = express.Router()
const storyData = JSON.parse(fs.readFileSync("./data/story.json","utf-8"))


const findPage = (id) => {
    
    return storyData.find(page => page.id == id)
}


router.get("/:id",(req,res) =>{
   
    const id = req.params.id
    const page = findPage(id)


    res.render("story-page.njk", {
        page
    })
})


export default router