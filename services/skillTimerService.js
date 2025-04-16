
const dataStorage = [{ "activity": "Front-end",  "time": 80 }]

const createSkillTimer = async (data) => {
    try {
      dataStorage.push(data)
    } catch(e) {
      throw new Error(e.message)
    }
}

const showAllSkillTimer = async () => {
    try {
      return dataStorage
    } catch(e) {
      throw new Error(e.message)
    }
}

const updateSkillTimer  = async (data) => {
  try {
    const {activity} = data

    const foundSkillPosition = dataStorage.findIndex(item => item.activity === activity)
    dataStorage[foundSkillPosition] = data

  } catch(e) {
    throw new Error(e.message)
  }
}
  
  module.exports = {
    createSkillTimer,
    showAllSkillTimer,
    updateSkillTimer
  }