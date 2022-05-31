import React from 'react'
import { GiKnifeFork } from 'react-icons/gi';
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='container mx-auto mt-4'>
      <Link to="/recipe-app">
      <GiKnifeFork className='text-5xl ml-5' />
      </Link>
    </div>
   
  )
}

export default Header