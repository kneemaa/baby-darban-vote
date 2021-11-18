const controller = require('../controllers/genderControllers')

const routes = (app) => {
  app.post('/api/vote', controller.vote)
  app.get('/api/genders', controller.findAll)
  app.get('/api/reveal', controller.getFinalAnswer)
  app.get('/api/winners/:reveal', controller.findWinners)
}

module.exports = routes
