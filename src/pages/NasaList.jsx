import {useState} from 'react';
import ListDisplay from '../components/ListDisplay';
import SearchForm from '../components/SearchForm';

function NasaList() {
  // this is the state variable that will hold the image data returned from the NASA API
  const [nasaList, setNasaList] = useState(null);

  // Function getNasaList 
  // use the baseUrl and endpoint to do the search 
  // from the return data, set nasaList to just the array of items in the collection
  const getNasaList = async (searchTerm) => {
    const baseUrl = 'https://images-api.nasa.gov/';
    const endpoint = 'search';
    const url = baseUrl + endpoint + '?q=' + searchTerm;

    // make fetch request and store response
    try {
      const response = await fetch(url);
      const data = await response.json();
      // first console.log to ensure that the data matches what I expected
      console.log(data);
      // then set the nasaList to JUST the array of items returned
      setNasaList(data.collection.items);

    } catch (e) {
      console.log(e);
      // you can also use
      // console.error(e)
    }
  }

  return (
    <>
    <h1>Enter a search term and get results of images from NASA</h1>
    <SearchForm getNasaList={getNasaList}/>
    <ListDisplay nasaList = {nasaList}/>
    </>
  )
}

export default NasaList