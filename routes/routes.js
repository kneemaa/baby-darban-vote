const controller = require('../controllers/genderControllers')

const routes = (app) => {
  app.post('/api/vote', controller.vote)
  app.get('/api/genders', controller.findAll)
  app.get('/api/reveal', controller.getFinalAnswer)
}

module.exports = routes
