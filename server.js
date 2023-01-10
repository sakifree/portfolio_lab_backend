/***************************** */
// IMPORT DEPENDENCIES
/***************************** */
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

/***************************** */
// IMPORT JSON FILES
/***************************** */
const projects = require("./projects.json")
const about = require("./about.json")

/***************************** */
// CREATE APP OBJECT
/***************************** */
const app = express()

/***************************** */
// MIDDLEWARE
/***************************** */
app.use(cors())
app.use(morgan("dev"))

/***************************** */
// ROUTES
/***************************** */

// Home Route
app.get("/", (req, res) => {
    res.send("Hello World")
})

// Project Route
app.get("/projects", (req, res) => {
    res.json(projects)
})

// About Route
app.get("/about", (req, res) => {
    res.json(about)
})

/***************************** */
// SERVER LISTENER
/***************************** */
const PORT = 4000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})