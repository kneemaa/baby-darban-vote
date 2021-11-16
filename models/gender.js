const mongoose = require("mongoose")
const Schema = mongoose.Schema

const genderSchema = new Schema({
  gender: { type: String, required: true},
  author: { type: String, required: true},
  date: { type: Date, default: Date.now }
})

const Gender = mongoose.model("Gender", genderSchema)

module.exports = Gender
