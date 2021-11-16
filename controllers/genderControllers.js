const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    db.Gender
      .find(req.query)
      .sort({ date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findByGender: function(req, res) {
    db.Gender
      .find({gender: req.params.gender})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  addBoy: function(req, res) {
    req.body["gender"] = "boy"
    db.Gender
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  addGirl: function(req, res) {
    req.body["gender"] = "girl"
    db.Gender
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
