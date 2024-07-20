import { useRef, useState } from 'react'
import useAddSchool from '../hooks/useAddSchool'
import { useNavigate } from 'react-router-dom'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Loader from './loader/Loader'

const Form = () => {
  const [previewImage, setPreviewImage] = useState('')
  const { isLoading, addSchool } = useAddSchool()
  const navigate = useNavigate()
  const fileRef = useRef(null)
  const formRef = useRef(null)
  const initialValues = {
    name: '',
    address: '',
    city: '',
    state: '',
    contact: '',
    email_id: '',
    image: '',
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required(),
    address: Yup.string().trim().required(),
    city: Yup.string().trim().required(),
    state: Yup.string().trim().required(),
    contact: Yup
            .string()
            .matches(phoneRegExp, 'contact number is not valid')
            .min(10, "contact number is too short")
            .max(10, "contact number is too long")
            .required(),
    email_id: Yup.string().trim().email('enter a valid email').required('email is a required field'),
    image: Yup.string().trim().required('attach an image'),
  })

  const setPreview = (e, formik) => {  
    if (!e.target.files.length) {
        formik.setFieldValue("image", '')
        setPreviewImage('')
        return
    }

    formik.setFieldValue("image", e.target.files[0])
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
  }

  const handleSubmit = async (data) => {
    const response  = await addSchool(data)
    if (!!response) {
        formRef.current.reset()
        fileRef.current.value = ''
        setPreviewImage('')
    }
  }

  return (
    <Formik 
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
    >
        {(formik) => (

            <FormikForm className='form' ref={formRef}> 
                <div className='form__field'>
                    <label htmlFor="" className="form__label">School Name</label>

                    <Field 
                        type="text"
                        autoComplete='off' 
                        autoCorrect='false'
                        placeholder="Enter name of the school" 
                        className="form__input" 
                        name="name"                    
                    />

                    <div className="form__error-message">
                        <ErrorMessage name='name' component='span' />
                    </div>
                </div>
                
                <div className='form__field'>
                    <label htmlFor="" className="form__label">Address</label>

                    <Field 
                        type="text"
                        autoComplete='off' 
                        autoCorrect='false'
                        placeholder="Enter address" 
                        className="form__input" 
                        name="address"                    
                    />

                    <div className="form__error-message">
                        <ErrorMessage name='address' component='span' />
                    </div>
                </div>

                <div className="form__group">
                    <div className='form__field'>
                        <label htmlFor="" className="form__label">City</label>

                        <Field 
                            type="text"
                            autoComplete='off' 
                            autoCorrect='false'
                            placeholder="e.g Patna" 
                            className="form__input" 
                            name="city"
                        />

                    <div className="form__error-message">
                        <ErrorMessage name='city' component='span' />
                    </div>
                    </div>

                    <div className='form__field'>
                        <label htmlFor="" className="form__label">State</label>

                        <Field 
                            type="text"
                            autoComplete='off' 
                            autoCorrect='false'
                            placeholder="e.g Bihar" 
                            className="form__input" 
                            name="state"
                        />

                    <div className="form__error-message">
                        <ErrorMessage name='state' component='span' />
                    </div>
                    </div>
                </div>
                
                <div className="form__group">
                    <div className='form__field'>
                        <label htmlFor="" className="form__label">Contact</label>

                        <Field 
                            type="text"
                            autoComplete='off' 
                            autoCorrect='false'
                            placeholder="e.g 9876543210" 
                            className="form__input" 
                            name="contact"
                        />

                    <div className="form__error-message">
                        <ErrorMessage name='contact' component='span' />
                    </div>
                    </div>

                    <div className='form__field'>
                        <label htmlFor="" className="form__label">Email</label>

                        <Field 
                            type="email" 
                            autoComplete='off' 
                            autoCorrect='false'
                            placeholder="e.g example@gmail.com" 
                            className="form__input" 
                            name="email_id"                        
                        />

                    <div className="form__error-message">
                        <ErrorMessage name='email_id' component='span' />
                    </div>
                    </div>
                </div>

                <div className='form__field'>
                    <label htmlFor="" className="form__label">Upload Image</label>

                    <label htmlFor="image" className='upload-button'>
                        <i className="ri-upload-cloud-2-line icon"></i>
                        <span>Click or drop image</span>
                        <input 
                            ref={fileRef}
                            type="file" 
                            name="image" 
                            id="image" 
                            onChange={(e) => {
                                setPreview(e, formik)
                            }}
                            accept="image/*"
                        />

                        {previewImage ? (
                            <>
                                <img
                                    src={previewImage}
                                    alt="preview" 
                                    className='preview'
                                />
                                <button className="remove" type='button' onClick={(e) => {
                                    e.preventDefault()
                                    setPreviewImage('')
                                    formik.setFieldValue('image', '')
                                    fileRef.current.value = ''
                                }}>
                                    <i className="ri-close-circle-fill icon"></i>
                                </button>
                            </>
                        ) : null}
                    </label>

                    <div className="form__error-message">
                        <ErrorMessage name='image' component='span' />            
                    </div>
                </div>

                <div className="form__buttons">
                    <button className='form__button' type='submit'>
                        {isLoading ? (
                            <Loader />
                        ) : (
                            'Add School'
                        )}
                    </button> 

                    <button className='form__button' type='button' onClick={() => navigate('/schools')}>
                        View Schools
                        <i className="ri-arrow-right-line icon"></i>
                    </button>     
                </div>      
            </FormikForm>
        )}
    </Formik>            
  )
}

export default Form