import React from 'react'

function AdViewAll(props) {
  function deleteAd() {
    var axios = require('axios')
    var data = JSON.stringify({
      id: props.id,
    })

    var config = {
      method: 'post',
      url: 'http://localhost:3001/ads/delete_ad',
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
    alert('Ad deleted')
    window.location.reload(false)
  }

  function updateAd() {
    var axios = require('axios')
    var data = JSON.stringify({
      id: props.id,
      showed: props.showed,
    })

    var config = {
      method: 'post',
      url: 'http://localhost:3001/ads/modify_ad',
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
    window.location.reload(false)
  }
  return (
    <div className='flex items-center my-10'>
      <div className='h-40  flext justify-center'>
        <img
          src={props.imgURL}
          alt=''
          className='h-full w-80 object-contain rounded '
        />
      </div>
      <div className='flex flex-col items-start ml-4'>
        <p className='text-center text-sm capitalize my-2'>
          Nom :<span className='font-medium'>{' ' + props.name}</span>
        </p>
        <p className='text-center text-sm my-2'>
          État :{' '}
          {props.showed ? (
            <span className='text-green-600'>publié</span>
          ) : (
            <span className='text-red-600'>non publié</span>
          )}
        </p>
        {props.showed ? (
          <div>
            <button
              className='my-2 bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded'
              onClick={updateAd}
            >
              Cacher
            </button>
          </div>
        ) : (
          <button
            className='my-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            onClick={updateAd}
          >
            Publier
          </button>
        )}
        <button
          className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={deleteAd}
        >
          Supprimer
        </button>
      </div>
    </div>
  )
}

export default AdViewAll
