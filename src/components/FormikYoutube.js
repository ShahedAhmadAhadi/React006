import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comment: '',
    phoneNumbers: ['', '']
}
const onSubmit = values => {
    console.log(values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().required('Required!').email('Invalid email format'),
    channel: Yup.string().required('Required!')
})

function FormikYoutube() {

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component={TextError} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <Field type="email" name="email" id="email" />
                    <ErrorMessage name="email">
                        {
                            error => <div className="error">{error}</div>
                        }
                    </ErrorMessage>
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" name="channel" id="channel" />
                    <ErrorMessage name="channel" />
                </div>
                <div className="form-control">
                    <label htmlFor="comment">Comment</label>
                    <Field as="textarea" name="comment" id="comment" />
                </div>
                <div className="form-control">
                    <label htmlFor="primaryPh">Primary phone number</label>
                    <Field name="phoneNumbers[0]" id="primaryPh" />
                </div>
                <div className="form-control">
                    <label htmlFor="secondaryPh">Secondary phone number</label>
                    <Field name="phoneNumbers[1]" id="secondaryPh" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default FormikYoutube
