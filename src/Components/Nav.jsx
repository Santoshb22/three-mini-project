import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='font-extrabold flex  gap-3 underline fixed top-0 text-red-600'>
        <Link to={"/"}>Random User</Link>
        <Link to={"/random-jokes"}>Random Jokes</Link>
        <Link to={"/cats-listing"}>Cats Listing</Link>
    </div>
  )
}

export default Nav