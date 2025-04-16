const { createTechTracker, showAllTechTracker, updateTechTracker } = require("../services/techTrackerService")

const getTechTracker = async (req, res, next) => {
  try {
    const data = await showAllTechTracker()
    res.json(data)
  }
  catch (err) {
  res.status(500).send(err)
  }
}

const postNewTechTracker = async (req, res, next) => {
      const newInput = {
        name: req.body.name,
        progress: req.body.progress,
        level: req.body.level,
    };

    try {
        await createTechTracker(newInput)
        res.send('Created with success!')
        next()
      } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
      }
}

const putTech = async (req, res, next) => {
  const newInput = {
    name: req.body.name,
    progress: req.body.progress,
    level: req.body.level,
  };

try {
    await updateTechTracker(newInput)
    res.send('Updated with success!')
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}


module.exports = {
    postNewTechTracker,
    getTechTracker,
    putTech
}