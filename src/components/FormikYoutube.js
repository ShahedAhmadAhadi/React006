import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comment: '',
    phoneNumbers: ['', ''],
    phNumbers: ['']
}
const onSubmit = values => {
    console.log(values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().required('Required!').email('Invalid email format'),
    channel: Yup.string().required('Required!')
})

const validateComments = value => {
    let error
    if (!value){
        error = "Required"
    }
    return error
}

function FormikYoutube() {

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={false}>
            {
                formik => {
                    return (
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
                    <Field as="textarea" name="comment" id="comment" validate={validateComments} />
                    <ErrorMessage name="comment" component={TextError} />
                </div>
                <div className="form-control">
                    <label htmlFor="primaryPh">Primary phone number</label>
                    <Field name="phoneNumbers[0]" id="primaryPh" />
                </div>
                <div className="form-control">
                    <label htmlFor="secondaryPh">Secondary phone number</label>
                    <Field name="phoneNumbers[1]" id="secondaryPh" />
                </div>
                <FieldArray name="phNumbers">
                    {
                        fieldArrayProps => {
                            console.log('fieldProps', fieldArrayProps)
                            const {push, remove, form} = fieldArrayProps
                            const { values } = form
                            const { phNumbers } = values
                            return (
                                <div>
                                    {phNumbers.map((phNumbers, index) => (
                                        <div key={index}>
                                            <Field name={`phNumbers[${index}]`} />
                                            {index > 0 && <button type="button" onClick={() => remove(index)}> - </button>}
                                            <button type="button" onClick={() => push('')}> + </button>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    }
                </FieldArray>
                <button type="button" onClick={() => formik.setTouched({name: true, channel: true, email: true, comment: true})}>validate</button>
                <button type="submit">Submit</button>
            </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikYoutube
