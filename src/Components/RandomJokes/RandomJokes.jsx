import React, { useEffect, useState } from 'react'
import tweeterBg from "../../../public/tweeter-bg.png"; 
import TweetCard from './TweetCard';
import axios from "axios";
import Nav from '../Nav';

const RandomJokes = () => {
const [data, setData] = useState(null);

async function fetchJokes() {
  try {
    const res = await axios.get(`https://api.freeapi.app/api/v1/public/randomjokes/joke/random`)
    if(res.status == 200) {
      setData(res.data);
    }
  } catch (error) {
    console.error('Fetch Joke failed:', error.message);
  }
}

useEffect(() => {
  fetchJokes();
}, [])

  return (
    <div   
    style={{ backgroundImage: `url(${tweeterBg})`}}
     className=' bg-cover bg-center bg-no-repeat sm:bg-cover flex justify-center items-center h-screen'>
      <Nav/>
      {data? <TweetCard jokeData = {data}/> : <p>Loading...</p>}
    </div>
  )
}

export default RandomJokes