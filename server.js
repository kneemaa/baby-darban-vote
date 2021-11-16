const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const logger = require("morgan")
const PORT = process.env.PORT || 3001

const countDownDate = new Date("Nov 15, 2021 10:00:00").getTime()

app.use(logger('dev'))
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
require("./routes/routes.js")(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gender")

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
