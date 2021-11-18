const mongoose = require("mongoose")
const Schema = mongoose.Schema

const revealSchema = new Schema({
  answer: { type: String, required: true},
  result: { type: String, required: true}
})

const Reveal = mongoose.model("Reveal", revealSchema)

module.exports = Reveal
