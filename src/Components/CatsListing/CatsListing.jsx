import React, { useEffect, useState } from 'react';
import catBg from "../../../public/cat-bg.png";
import chaiImage from "../../../public/chaimage.png"
import axios from "axios";
import CatCard from './CatCard';
import "./style.css";
import Nav from '../Nav';
const CatsListing = () => {
  const [catData, setCatData] = useState([]);

  async function fetchCatData() {
    try {
      const res = await axios.get("https://api.freeapi.app/api/v1/public/cats?page=1&limit=10")
      if (res.status === 200) {
        setCatData(res.data.data.data);
      }
    } catch (error) {
      console.log("Fetch Cats failed: ", error.message);
    }
  }

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
    <div className='min-h-screen py-10 bg-[#b7b7b7]' style={{ backgroundImage: `url(${catBg})`, backgroundSize: 'contain' }}>
      <div className="header flex justify-between items-start mx-10 sm:mx-20">
      <h1 className='font-bold  mb-2 font-sans text-2xl sm:text-5xl text-white' >Cats around us</h1>
      <Nav/>
       <a href="https://chaicode.com/" target='_blank'><img src={chaiImage} alt="chai aur code"  className='-mt-8 size-10 sm:size-16'/></a>
      </div>
      <div className=' px-10 sm:px-20 grid grid-flow-col gap-6 overflow-auto over hide-scrollbar'>
      {catData?.map((data) => <CatCard key={data.id} data={data} />)}
      </div>
    </div>
  );
}


export default CatsListing;
