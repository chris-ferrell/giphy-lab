import {useState} from 'react'

const Form = (props) => {
    // instantiate a instance of state
    const [formData, setFormData] = useState({seachTerm: '', name: ''});

    // this function captures/updates the formData
    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }
  return (

    <div>Form</div>
  )
}

export default Form