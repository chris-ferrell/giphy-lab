

const GiphyDisplay = ({giphy}) => {
    
const loaded = () => {
  return (
    <div>

        <img src={giphy.data[0]embed_url}  />
       
    </div>
  );
}
    // console.log(giphy.data[0].url)
 const loading = () => {
    return <h1>No Gif to display</h1>
  }

 return giphy ? loaded() : loading()

};

export default GiphyDisplay