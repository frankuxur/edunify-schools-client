import { useEffect, useState } from "react"
import axios from 'axios'

const useGetAllSchools = () => {
  const [isLoading, setIsLoading] = useState(false)  
  const [schools, setSchools] = useState([])

  useEffect(() => {
    const getAllSchools = async () => {
        setIsLoading(true)

        try {
            const { data } = await axios.get('http://localhost:3001/schools')
            setSchools(data)
        } catch (error) {
            console.log(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    getAllSchools()
  }, [])



  return { isLoading, schools }
}

export default useGetAllSchools