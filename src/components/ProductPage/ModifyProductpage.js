import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Welcome/Header'

function ModifyProductpage() {
  let Productid = useParams()
  console.log(Productid)
  const [Product, setProduct] = useState({})
  console.log(Product)
  const [id, setid] = useState()
  const [name, setname] = useState('')
  const [price, setprice] = useState()
  const [Promontion, setPromontion] = useState()

  const [rating, setrating] = useState()
  const [category, setcategory] = useState()
  const [img, setimg] = useState()
  const [tags, settags] = useState()

  useEffect(() => {
    var axios = require('axios')
    var data = {
      id: Productid.id,
    }

    var config = {
      method: 'post',
      url: 'http://localhost:3001/product/get_product_view',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o',
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.product))
        setProduct(response.data.product)
        setid(response.data.product.id)
        setname(response.data.product.name)
        setprice(response.data.product.price)
        setPromontion(response.data.product.promotion)
        setrating(response.data.product.rating)
        setcategory(response.data.product.category)
        setimg(response.data.product.img)
        settags(response.data.product.tags)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  function UpdateProduct() {
    var axios = require('axios')
    var data = JSON.stringify({
      id: id,
      name: name,
      price: price,
      promotion: Promontion,
      rating: rating,
      category: category,
      img: img,
      tags: tags,
    })

    var config = {
      method: 'post',
      url: 'http://localhost:3001/product/modify_product',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        alert('Product Updated')
        window.history.back()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <Header/>
      <div className='h-screen flex justify-center items-center -mt-8'>
        <div className='flex flex-col justify-center border-slate-900 border-[2px] rounded-lg p-4'>
          <h3 className='text-3xl font-semibold my-4'>
            Modifier les informations de produit :
          </h3>

          <div className='flex items-center'>
            <label className='text-left mr-2'>Nom :</label>

            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='nom'
              name='usrnm'
              value={name}
              onChange={(e) => {
                setname(e.target.value)
              }}
            />
          </div>
          <div className='flex items-center my-2'>
            <label className='text-left mr-2'>Prix :</label>

            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='prix'
              name='usrnm'
              value={price}
              onChange={(e) => {
                setprice(e.target.value)
              }}
            />
          </div>
          <div className='flex items-center my-2'>
            <label className='text-left mr-2'>Remise :</label>

            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='remise'
              name='usrnm'
              value={Promontion}
              onChange={(e) => {
                setPromontion(e.target.value+' out of 5')
              }}
            />
          </div>

          <div className='flex items-center my-2'>
            <label className='text-left mr-2'>Évaluation ( sur 5) :</label>

            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='évaluation'
              name='usrnm'
              value={rating?.split(' ')[0]}
              onChange={(e) => {
                setrating(e.target.value)
              }}
            />
          </div>
          <div className='flex items-center my-2'>
            <label className='text-left mr-2'>Catégorie :</label>
            <select
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              value={category}
              onChange={(e) => {
                setcategory(e.target.value)
              }}
            >
              <option value='epicerie-bonbons-chocolat'>
                epicerie-bonbons-chocolat
              </option>
              <option value='epicerie-vaisselle'>epicerie-vaisselle</option>
              <option value='epicerie-alimentaire'>epicerie-alimentaire</option>
              <option value='boissons'>boissons</option>
              <option value='miels-confitures-pates-a-tartiner'>
                miels-confitures-pates-a-tartiner
              </option>
              <option value='cosmetique'>cosmetique</option>
              <option value='nettoyage'>nettoyage</option>
            </select>
          </div>
          <div className='flex items-center my-2'>
            <label className='text-left mr-2'>Image :</label>

            <input
              className=' flex-1 rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out'
              type='text'
              placeholder='img'
              name='usrnm'
              value={img}
              onChange={(e) => {
                setimg(e.target.value)
              }}
            />
          </div>

          <button
            type=''
            className={
              'text-md border-blue rounded border bg-amber-500 py-2 px-4 text-white hover:bg-amber-400 focus:border-black focus:outline-none my-3'
            }
            onClick={UpdateProduct}
          >
            UPDATE{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModifyProductpage
