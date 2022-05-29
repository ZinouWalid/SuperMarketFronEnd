import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../Welcome/Header'
function AddAds() {
  const [ImgURL, setImgURL] = useState('')
  const [Name, setName] = useState('')
  const [AdLink, setAdLink] = useState('')

  function Add() {
    var axios = require('axios')
    var data = JSON.stringify({
      name: Name,
      img: ImgURL,
      AdLink: AdLink,
    })

    var config = {
      method: 'post',
      url: 'http://localhost/ads/add_ads',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log(error)
      })
    alert('Ads added')
    window.location.reload(false)
  }
  return (
    <div className=''>
      <Header />
      <div className='h-screen flex justify-center items-center -mt-8'>
        <div className='flex flex-col justify-center border-slate-900 border-[2px] rounded-lg p-4'>
          <h3 className='text-3xl font-semibold my-4'>
            Ajouter une publicité :
          </h3>

          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Nom de publicité :</label>
            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              value={Name}
              placeholder='nom de publicité'
              name='usrnm'
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Image publicitaire :</label>

            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              value={ImgURL}
              placeholder="Put here the URL for the ad's image "
              name='usrnm'
              onChange={(e) => {
                setImgURL(e.target.value)
              }}
            />
          </div>
          <div className='m-2 flex items-center'>
            <label className='text-left mr-2'>Lien de publicité :</label>

            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              value={AdLink}
              placeholder='Put here the link you want to be sent to when they click on the ad'
              name='usrnm'
              onChange={(e) => {
                setAdLink(e.target.value)
              }}
            />
          </div>

          <button
            type=''
            className={
              'text-md border-blue rounded border bg-amber-500 py-2 px-4 text-white hover:bg-amber-400 focus:border-black focus:outline-none my-3'
            }
            onClick={Add}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddAds
