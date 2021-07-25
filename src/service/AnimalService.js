const basePath = 'https://petstore.swagger.io/v2/pet'

const API = {

  getAll: (endpoint) => {
    try {
      fetch(`${basePath}/${endpoint}`).then(data => data.json())
    } catch(e) {
        console.error(e)
    }
  },

  update: async (payload, callback) => {
    try { 
      const options = {method: 'PUT', body: JSON.stringify(payload), headers: {'Content-type':'application/json'}}
      await fetch(basePath, options)
      return callback()
    } catch(e) {
      console.error(e)
    }
  }
}

export default API