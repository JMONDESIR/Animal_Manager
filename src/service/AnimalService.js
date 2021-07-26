const url = 'https://petstore.swagger.io/v2/pet'

const API = {
  /*
    * @param endpoint(string) requested resource
  */  
  getAll: async (endpoint) => {
    try {
      const data = await fetch(`${url}/${endpoint}`)
      return data.json()
    } catch (e) {
      console.error(e)
    }
  },
  /*
    * @param payload(object) = pet schema
    * @param callback(function) = context refresh
  */
  update: async (payload, callback) => {
    try { 
      const options = {method: 'PUT', body: JSON.stringify(payload), headers: {'Content-type':'application/json'}}
      await fetch(url, options)
      return callback()
    } catch(e) {
      console.error(e)
    }
  }
}

export default API