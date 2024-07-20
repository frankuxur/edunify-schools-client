import './page-not-found.css'
import Wrapper from '../../components/Wrapper'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()
  
  return (
    <Wrapper>
        <main className="not-found">
            <i className="ri-file-warning-line icon"></i>
            <h1>Page Not Found</h1>
            <button onClick={() => navigate('/')}>
                <i class="ri-arrow-left-up-line icon"></i>
                Return to home page
            </button>
        </main>
    </Wrapper>
  )
}

export default PageNotFound