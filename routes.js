const express = require('express')

const historyController = require('./controllers/historyController')
const skillTimerController = require('./controllers/skillTimerController')
const techTrackerController = require('./controllers/techTrackerController')


const router = express.Router()

router.get('/history', historyController.getHistoty)
router.post('/history', historyController.postNewHistoty)

router.get('/skills', skillTimerController.getSkills)
router.post('/skills', skillTimerController.postNewSkill)
router.put('/skills', skillTimerController.putSkill)


router.get('/tech', techTrackerController.getTechTracker)
router.post('/tech', techTrackerController.postNewTechTracker)
router.put('/tech', techTrackerController.putTech)


module.exports = router