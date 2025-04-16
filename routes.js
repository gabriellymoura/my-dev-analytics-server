const express = require('express')

const historyController = require('./controllers/historyController')

const router = express.Router()

router.get('/history', historyController.getHistoty)
// router.get('/history', (req, res, next) => {
// 	res.send('hello')
// })

router.post('/history', historyController.postNewHistoty)

router.post('/', (req, res, next)=>{
    const description = req.body.description;
  
    // Do something with the data
    console.log(`description: ${description}`);
  
    res.send('Data received successfully!');
})

module.exports = router