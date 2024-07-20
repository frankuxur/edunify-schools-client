import './App.css'
import { ToastProvider } from './context/ToastContext'
import AddSchools from './pages/add-schools/AddSchools'
import PageNotFound from './pages/page-not-found/PageNotFound'
import ShowSchools from './pages/show-schools/ShowSchools'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <ToastProvider>
        <Routes>
          <Route path='/' element={<AddSchools />} />
          <Route path='/schools' element={<ShowSchools />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ToastProvider>
    </div>
  )
}

export default App
