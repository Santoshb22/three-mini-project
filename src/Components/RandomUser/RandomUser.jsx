import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserCard from './UserCard';
import Nav from '../Nav';

const RandomUser = () => {
const [data, setData] = useState(null);

const fetchUser = async () => {
  try {
    const res = await axios.get('https://api.freeapi.app/api/v1/public/randomusers/user/random');
    if (res.status === 200) {
      setData(res.data.data)}
  } catch (error) {
    console.error('Fetch user failed:', error.message);
  }
};

useEffect(() => {
  fetchUser();
}, []);
  return (
  <div className='bg-gray-900 h-screen flex items-center justify-center'>
    <Nav/>
    {data ? <UserCard userData={data} /> : <p>Loading...</p>}
  </div>
  )
}

export default RandomUser