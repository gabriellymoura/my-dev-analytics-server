
const dataStorage = [{ "name": "React", "level": "Avançado", "progress": 80 }]

const createTechTracker = async (data) => {
    try {
      dataStorage.push(data)
    } catch(e) {
      throw new Error(e.message)
    }
}

const showAllTechTracker = async () => {
    try {
      return dataStorage
    } catch(e) {
      throw new Error(e.message)
    }
}

const updateTechTracker  = async (data) => {
  try {
    const {name} = data

    const foundTechPosition = dataStorage.findIndex(item => item.name === name)
    dataStorage[foundTechPosition] = data

  } catch(e) {
    throw new Error(e.message)
  }
}
  
  module.exports = {
    createTechTracker,
    showAllTechTracker,
    updateTechTracker
  }