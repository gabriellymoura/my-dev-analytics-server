
const dataStorage = [{description: 'This is my description of the day', date: '2025-04-16T11:45:31.241Z' }]

const createHistoty = async (data) => {
    try {
      dataStorage.push(data)
    } catch(e) {
      throw new Error(e.message)
    }
}

const showAllHistory = async () => {
    try {
      return dataStorage
    } catch(e) {
      throw new Error(e.message)
    }
}
  
  module.exports = {
    createHistoty,
    showAllHistory
  }