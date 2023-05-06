import  { useState, useEffect } from 'react';

import './App.css';
import Form from './components/Form';
import GiphyDisplay from './components/GiphyDisplay';

function App() {

  const [giphy, setGiphy] = useState(null);
  const apiKey = 'Wj1emufPvtJQ8BQmbs0OTwoMazWTJ7XB'

  const getGiphy = async (searchTerm) => {
    // make fetch req to api endpoint
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1&offset=0&rating=g&lang=en`
    )
    // parse the JSON
    const data = await response.json()
    // console.log(data)
    setGiphy(data);
    // console.log(data)

  }

  useEffect(() => {
    getGiphy('lebron');
  }, [])

  
  return (
    <div className='App'>
      <Form giphySearch={getGiphy} />
      <GiphyDisplay giphy={giphy}  />
    </div>
  );
}

export default App;



