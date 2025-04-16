const { createHistoty,showAllHistory } = require("../services/historyService")

const getHistoty = async (req, res, next) => {
  try {
    const data = await showAllHistory()
    res.json(data)
  }
  catch (err) {
  res.status(500).send(err)
  }
}

const postNewHistoty = async (req, res, next) => {
      const newInput = {
        description: req.body.description,
        date: new Date().toISOString()
    };

    try {
        await createHistoty(newInput)
        res.sendStatus(201)
        res.send('Created with success!')
        next()
      } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
      }
}

module.exports = {
    getHistoty,
    postNewHistoty
}