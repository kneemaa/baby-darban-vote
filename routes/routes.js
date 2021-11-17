const controller = require('../controllers/genderControllers')

const routes = (app) => {
  app.post('/api/vote', controller.vote)
  app.get('/api/genders', controller.findAll)
}

module.exports = routes
