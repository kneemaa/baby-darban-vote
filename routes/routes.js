const controller = require('../controllers/genderControllers')

const routes = (app) => {
  app.post('/api/vote', controller.vote)
  app.get('/api/genders', controller.findAll)
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));    
  })
}

module.exports = routes
