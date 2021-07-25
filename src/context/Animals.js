import {createContext, useState, useEffect} from 'react'
import API from '../service/AnimalService'


export const AnimalsContext = createContext()
const AnimalsProvider = ({children}) => {
    const [availableAnimals, setAvailableAnimals] = useState([])
    useEffect(()=> {
      ;(async () => { // immediately invoked function expression (IIFE)
          await refresh('available') // initial grab for available only
      })()
    },[]) // empty dependancy array only fires one time

    const refresh = async(status) => {
        try {
            const res = await API.getAll(`findByStatus?status=${status}`)
            const formattedRes = res.map((record) =>{
                const categoryName = record.category && record.category.name || ''
                return {...record, categoryName}
            })
            setAvailableAnimals(formattedRes)
        } catch(e) { 
            console.error(e)
        }
    }

    return (
        <AnimalsContext.Provider value={{availableAnimals, refresh}}>
           {children} 
        </AnimalsContext.Provider>
    )
}

export default AnimalsProvider
