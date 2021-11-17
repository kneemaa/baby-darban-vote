const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const logger = require("morgan")

// process.env.PORT gets the port from the environment variable if it exists
// we will be using this for Heroku
const PORT = process.env.PORT || 3001

// Enable better logging in the server output
app.use(logger('dev'))
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
require("./routes/routes.js")(app)

// process.env.MONGODB_URI gets the port from the environment variable if it exists
// we will be using this for Heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gender")

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));    
})

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
