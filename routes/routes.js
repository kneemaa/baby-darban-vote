const controller = require('../controllers/genderControllers')

const routes = function(app){
  app.get('/api/genders', controller.findAll)
  app.get('/api/genders/:gender', controller.findByGender)
}

module.exports = routes
