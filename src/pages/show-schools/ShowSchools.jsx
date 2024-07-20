import Wrapper from '../../components/Wrapper'
import useGetAllSchools from '../../hooks/useGetAllSchools'
import './show-schools.css'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import School from './School'

const ShowSchools = () => {
  const { isLoading, schools } = useGetAllSchools()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Wrapper page={'show'}>
      <main className="show">
        <header className="show__header">
          <button className="show__button" onClick={handleClick}>
            <i className="ri-arrow-left-line icon"></i>
          </button>

          <div className="show__header-title">
            <h1 className="show__title">Schools List</h1>
            <h2 className="show__subtitle">Here's a ist of all the schools fetched from the database</h2>
          </div>
        </header>

        {/* name, address, city and image */}
        <section className="schools">
          <div className="schools__list">
            {schools.length ? (
              schools.map(school => (
                <School key={school.id} school={school} />
              ))
            ) : (
              <div className="schools__empty">
                {isLoading ? (
                  <Loader color={'crownberry-blue'} />
                ) : (
                  <h1>
                    <div>There are no schools</div>
                    <button onClick={handleClick}>Add schools to view them here</button>
                  </h1>
                )}
              </div>  
            )}
            </div>
          </section>
      </main>
    </Wrapper>
  )
}

export default ShowSchools