import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Welcome/Header'

function Ads() {
  return (
    <div className='bg-gray-100 w-screen min-h-screen'>
      <Header />
      <div className='mt-8 w-full max-h-[85vh] flex items-center justify-center mx-auto'>
        <Link
          className='w-[20vw] mx-auto bg-white p-4 shadow-sm rounded flex flex-col items-center hover:scale-105 transition-all duration-500 text-xl font-semibold'
          to='/Ads/allAds'
        >
          Tous les publicités
          <img
            src='https://cdn-icons-png.flaticon.com/512/1055/1055664.png'
            alt=''
            className='mt-4 h-30 w-30 object-contain'
          />
        </Link>
        <Link
          className='max-w-[20vw] mx-auto bg-white p-4 shadow-sm rounded flex flex-col items-center hover:scale-105 transition-all duration-500 text-xl font-semibold'
          to='/Ads/showedAds'
        >
          Les publicités publiées
          <img
            src='https://cdn-icons-png.flaticon.com/512/1801/1801044.png'
            alt=''
            className='mt-4 h-30 w-30 object-contain'
          />
        </Link>
        <Link
          className='w-[20vw] mx-auto bg-white p-4 shadow-sm rounded flex flex-col items-center hover:scale-105 transition-all duration-500 text-xl font-semibold'
          to='/Ads/addAds'
        >
          Ajouter une publicité
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwALPs9AZ9u4K7AKQPxvo-qoZ9jej507cHQ&usqp=CAU'
            alt=' '
            className='mt-4 h-30 w-30 object-contain'
          />
        </Link>
      </div>
    </div>
  )
}

export default Ads
