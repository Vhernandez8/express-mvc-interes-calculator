class SimulatorController {
  constructor () {
    this.renderCapitalsResult = this.renderCapitalsResult.bind(this)
  }

  calculateInteres (capitals) {
    return capitals.reduce((capital, interesrate, years) => capital * interesrate / 100 * years)
  }

  renderCapitals (req, res) {
    res.render('capitals')
  }

  renderCapitalsResult (req, res) {
    console.log('req.body', req.body)
    const { capital, interesrate, years } = req.body

    const capitals = [
      parseInt(capital),
      parseInt(interesrate),
      parseInt(years)
    ]

    const interes = this.calculateInteres(capitals)

    res.render('capitals', {
      capital,
      interesrate,
      years,
      interes
    })
  }
}

module.exports = SimulatorController
