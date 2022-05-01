const express = require('express')
const SimulatorController = require('./controllers/SimulatorController')
const PageController = require('./controllers/PageController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const simulatorController = new SimulatorController()

// Routes
router.get('/', simulatorController.renderCapitals)
router.post('/', simulatorController.renderCapitalsResult)

router.all('*', pageController.renderNotFound)

module.exports = router
