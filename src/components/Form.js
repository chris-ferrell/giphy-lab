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
    //  handleSubmit() will lift the state to App.js
    const handleSubmit = (event) => {

        event.preventDefault()

        props.giphySearch(formData.searchTerm)

        

    }
  return (

    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='searchTerm' value={formData.searchTerm} onChange={handleChange} />
            <input type='submit' value='Submit' />
        </form>
    </div>
  )
}

export default Form