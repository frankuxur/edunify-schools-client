import axios from "axios"
import { useContext, useState } from "react"
import { ToastContext } from "../context/ToastContext"

const useAddSchool = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { setShowToast, setToastData } = useContext(ToastContext)

  const addSchool = async (data) => {
    if (isLoading) return

    setIsLoading(true)

    const { image, ...info } = data
    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('info', JSON.stringify(info))

      const response = await axios.post('http://localhost:3001/schools', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
        
      setToastData({
        color: 'var(--success)',
        text: 'School added',
        icon: 'checkbox-circle',
        time: 5000,
      })
      setShowToast(true) 

      return response

    } catch (error) {
      setToastData({
        color: 'var(--warning)',
        text: error.message,
        icon: 'close-circle',
        time: 7000,
      })
      setShowToast(true) 
    } finally {
      setIsLoading(false)
    }
  }



  return { isLoading, addSchool }
}

export default useAddSchool