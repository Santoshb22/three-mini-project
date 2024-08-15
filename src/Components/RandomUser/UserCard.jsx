import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import chaiImage from "../../../public/chaimage.png"

const UserCard = ({ userData }) => {
  const { registered, dob, picture, name, login, location, cell } = userData;
  const registeredDate = new Date(registered.date);
  const dobDate = new Date(dob.date);
  
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = dobDate.toLocaleDateString('en-US', options);
  const registeredSince = registeredDate.toLocaleDateString('en-US', options);


  const latitude = userData.location.coordinates.latitude;
  const longitude = userData.location.coordinates.longitude;

  function redirectToMapLocation() {
    const url = `https://www.google.com/maps/@?api=1&map_action=map&center=${latitude},${longitude}&zoom=14`
    window.open(url, "_blank");
  }

  return (
    <div className="user-card my-10 sm:my-0 h-auto sm:h-fit w-72 sm:w-96 bg-[#B6B3F3] rounded-lg border-[8px] p-4 border-white">
      <div className="card-header flex items-center justify-between">
        <FaArrowLeft className='h-4 w-4' />
        <p className='font-serif'>Profile Overview</p>
        <IoMdRefresh className='h-4 w-4 cursor-pointer' onClick={() => window.location.reload()} />
      </div>

      <div className="user-profile mt-12 flex flex-col items-center justify-center">
        <div className='relative'>
          <img src={picture.medium} alt="Profile image" className='w-24 h-24 rounded-full' />
          <span className='text-xs px-2 bg-black text-white font rounded-xl absolute -top-4 -right-4'>{name.title}</span>
        </div>
        <p className='text-center text-md sm:text-xl w-fit font-normal'>{name.first + " " + name.last}</p>
        <p className=' text-sm text-center font-normal'>{login.username}</p>
      </div>

      <div className="contact border-y border-black border-opacity-10 flex items-center justify-center gap-2 py-2 my-6">
        <div className="location flex items-center cursor-pointer" onClick={redirectToMapLocation}>
          <MdOutlineLocationOn className='bg-black text-white rounded-full size-5 mr-1' />
          <span>Location</span>
        </div>

        <div className="cell-no flex items-center cursor-pointer">
          <IoCallOutline className='bg-black text-white rounded-full size-5 mr-1' />
          <span>Call me</span>
        </div>
      </div>

      <div className='grid grid-cols-2 justify-center'>
        <div className="location-detail">
          <div className="city">
            <p className='text-[9px] text-[#000000B2]'>City</p>
            <h3 className='text-sm sm:text-lg font-semibold text-[#000000B2]'>{location.city}</h3>
          </div>

          <div className="date-of-birth">
            <p className='text-[9px] text-[#000000B2]'>Date of Birth</p>
            <h3 className='text-sm sm:text-lg font-semibold text-[#000000B2]'>{formattedDate}</h3>
          </div>

          <div className="time-zone">
            <p className='text-[9px] text-[#000000B2]'>Time Zone</p>
            <h3 className='text-sm sm:text-lg font-semibold text-[#000000B2]'>{location.timezone.offset + " " + location.timezone.description}</h3>
          </div>
        </div>

       <div className="contact-detail">
          <div className="nationality">
            <p className='text-[9px] text-[#000000B2]'>Nationality</p>
            <h3 className='text-sm sm:text-lg font-semibold text-[#000000B2]'>{location.country}</h3>
          </div>

          <div className="contact">
            <p className='text-[9px] text-[#000000B2]'>Phone No.</p>
            <h3 className='text-sm sm:text-lg font-semibold text-[#000000B2]'>{cell}</h3>
          </div>

          <div className="reg-since">
            <p className='text-[9px] text-[#000000B2]'>Registered Since</p>
            <h3 className='text-sm sm:text-lg font-semibold text-[#000000B2]'>{registeredSince}</h3>
          </div>
        </div>
      </div>

      <div className="footer-img flex justify-end -mb-3 cursor-pointer">
      <a href="https://courses.chaicode.com/learn" target='_blank'><img className='rounded-xl' src={chaiImage} alt="chai aur code image" /></a>
      </div>

      <div className=' footer flex justify-center items-end'>
      <p className='text-[8px] text-white font-bold float'>© chai aur code</p>
      </div>

    </div>
  );
};

export default UserCard;
