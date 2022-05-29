import React from 'react'

function Header({ hideSearch, hideBasket, hideOptions }) {
  return (
    <nav className=' flex justify-between h-14 w-full items-center bg-slate-900 text-white lg:h-16 z-30 shadow-md shadow-amber-400'>
      {/* Logo and title */}
      <a href='/' className='flex items-center p-4 mr-auto'>
        <img
          src='./images/Logo.jpg'
          alt='9odyani'
          className='rounded h-11 w-11 object-cover'
        />
        <h2 className='flex font-semibold mx-2 hover:bg-gray-800 rounded-full p-1 uppercase text-xl'>
          9odyani
        </h2>
      </a>
    </nav>
  )
}

export default Header
