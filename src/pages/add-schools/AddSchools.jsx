import { useContext } from 'react'
import Form from '../../components/Form'
import Wrapper from '../../components/Wrapper'
import './add-schools.css'
import { ToastContext } from '../../context/ToastContext'
import Toast from '../../components/toast/Toast'

const AddSchools = () => {
  const { showToast } = useContext(ToastContext)

  return (
    <Wrapper>
      <main className="add">
          <header className="add__header">
              <h1 className="add__title">Add School</h1>
              <h2 className="add__subtitle">Fill the form below to add a school details to the database. All fields are mandatory.</h2>
          </header>

          <Form />
      </main>

      {showToast ? <Toast /> : null}
    </Wrapper>
  )
}

export default AddSchools