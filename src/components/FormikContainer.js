import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'

const initialValues = {}
const onSubmit = (values) => {}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().required('Required!').email('Invalid email format'),
    channel: Yup.string().required('Required!')
})

function FormikYoutube() {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            {
                formik => {
                    return 
                }
            }
        </Formik>
    )
}

export default FormikYoutube
