const { createSkillTimer, showAllSkillTimer, updateSkillTimer } = require("../services/skillTimerService")

const getSkills = async (req, res, next) => {
  try {
    const data = await showAllSkillTimer()
    res.json(data)
  }
  catch (err) {
  res.status(500).send(err)
  }
}

const postNewSkill = async (req, res, next) => {
      const newInput = {
        activity: req.body.activity,
        time: req.body.time,
    };

    try {
        await createSkillTimer(newInput)
        res.send('Created with success!')
        next()
      } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
      }
}

const putSkill = async (req, res, next) => {
    const newInput = {
      activity: req.body.activity,
      time: req.body.time,
  };

  try {
      await updateSkillTimer(newInput)
      res.send('Updated with success!')
      next()
    } catch(e) {
      console.log(e.message)
      res.sendStatus(500) && next(error)
    }
}

module.exports = {
    postNewSkill,
    getSkills,
    putSkill
}