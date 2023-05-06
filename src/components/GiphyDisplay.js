

const GiphyDisplay = ({giphy}) => {
    
const loaded = () => {
  console.log(giphy.data[0])
  return (
    <div>

        <img src={giphy.data[0].images.original.url}  alt={giphy.data[0].username}/>
       
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