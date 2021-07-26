import {createContext, useState, useEffect} from 'react'
import API from '../service/AnimalService'

export const AnimalsContext = createContext() // Initialize Context API
const AnimalsProvider = ({children}) => {
    const [availableAnimals, setAvailableAnimals] = useState([])
    useEffect(()=> {
      ;(async () => { // immediately invoked function expression (IIFE)
          await refresh('available') // initial grab for available only
          return
      })()
    },[]) // empty dependancy array only fires one time

    const refresh = async(status) => {
            const res = await API.getAll(`findByStatus?status=${status}`) || []
            if ( res.length ) {
                const formattedRes = res.map((record) =>{
                    record.categoryName = record.category && record.category.name || ''
                    return record
                })
                setAvailableAnimals(formattedRes)
            }            
    }

        // Provider passes data to nested components that consume it
        return (
        <AnimalsContext.Provider value={{availableAnimals, refresh}}>
           {children} 
        </AnimalsContext.Provider>
    )
}

export default AnimalsProvider
