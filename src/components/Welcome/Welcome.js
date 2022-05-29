import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

function Welcome() {
  return (
    <div className='bg-gray-100 w-screen min-h-screen'>
      <Header />

      <div className='mt-8 w-full max-h-[85vh] grid grid-cols-2 gap-3 mx-auto'>
        <Link
          className='w-[18vw] mx-auto bg-white p-4 shadow-sm rounded flex flex-col items-center hover:scale-105 transition-all duration-500'
          to='/ProductPage'
        >
          Produits
          <img
            src='https://thumbs.dreamstime.com/b/full-shopping-cart-17714121.jpg'
            alt='Produits'
            className='rounded h-30 w-30 object-contain'
          />
        </Link>
        <Link
          className='w-[18vw] mx-auto bg-white p-4 shadow-sm rounded flex flex-col items-center hover:scale-105 transition-all duration-500'
          to='/DeliveryMan'
        >
          Livreurs
          <img
            src='https://img.freepik.com/vecteurs-libre/chemin-concept-illustration_114360-1191.jpg?w=2000'
            alt='Livreurs'
            className='rounded h-30 w-30 object-contain'
          />
        </Link>
        <Link
          className='w-[18vw] mx-auto bg-white p-4 shadow-sm rounded flex flex-col items-center hover:scale-105 transition-all duration-500'
          to='/Ads'
        >
          Publicités
          <img
            src='https://wsobirds.org/images/bookstore/ad.png'
            alt='Publicités'
            className='rounded h-30 w-30 object-contain'
          />
        </Link>
        <Link
          className='w-[18vw] mx-auto bg-white p-4 shadow-sm rounded flex flex-col items-center hover:scale-105 transition-all duration-500'
          to='/livraison'
        >
          Prix de Livraison
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Price_Tag_Flat_Icon_Vector.svg/1200px-Price_Tag_Flat_Icon_Vector.svg.png'
            alt='Prix de Livraison'
            className='rounded h-30 w-30 object-contain'
          />
        </Link>
      </div>
    </div>
  )
}

export default Welcome
