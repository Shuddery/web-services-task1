const Router = require('express')
const router  = new Router()
const ElectricianController = require('../controller/electrician.controller')

router.post('/electrician', ElectricianController.createElectrician)
router.get('/electrician', ElectricianController.getElectrician)
router.get('/electrician/:id', ElectricianController.getOneElectrician)
router.put('/electrician/', ElectricianController.updateElectrician)
router.delete('/electrician/:id', ElectricianController.deleteElectrician)


module.exports = router