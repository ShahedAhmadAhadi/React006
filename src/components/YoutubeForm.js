import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log(values)
}

const validate = values => {
    let errors = {}

    if (!values.name) {
        return errors.name = "Required"
    }
    if (!values.email) {
        return errors.email = "Required"
    }else if (!/^A-Z0-9._%+-]+@[A-Z0.9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    if (!values.channel) {
        return errors.channel = "Required"
    }

    return errors
}

function YoutubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate 
    })

    console.log(formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
                <label htmlFor="channel">Channel</label>
                <input type="text" name="channel" id="channel" onChange={formik.handleChange} value={formik.values.channel} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm
