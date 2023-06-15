import React, {useState} from "react";
import './FormSubmit.css'

function FormSubmit(props) {

    const [values, setValues] = useState({
		name: '',
		description: ''
	})

	const handleChange = e => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

    const handleSubmit = e => {
		e.preventDefault()
		if (values.name) {
			props.formSubmit(values.name, values.description)
		}
	}

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__item">
                <input type='text' name="name" id="name" className="input" onChange={handleChange} placeholder="Name" />
            </div>
            <button className="btn__submit" type='submit'>
                Submit
            </button>
        </form>
    )
}

export default FormSubmit