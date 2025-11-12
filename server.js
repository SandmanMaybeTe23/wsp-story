import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"


const app = express()

import indexRouter from "./routes/index.js"

app.use(express.static('public'))
app.use(morgan("dev"))

nunjucks.configure('views', {
    autoescape: true,
    express: app
})


app.use("/",indexRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})