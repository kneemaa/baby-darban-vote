const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    db.Gender
      .find(req.query)
      .sort({ date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  vote: function(req, res) {
    db.Gender
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
