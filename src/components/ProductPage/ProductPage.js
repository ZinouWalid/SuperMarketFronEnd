import React from 'react'
import './ProductPage.css'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Product from '../Products/Product'
import ReactPaginate from 'react-paginate'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

function ProductPage() {
  const [SearchBoolean, setSearchBoolean] = useState(false)

  const [Search, setSearch] = useState('')
  const [items, setItems] = useState([])

  const [pageCount, setpageCount] = useState(0)

  let limit = 26

  useEffect(() => {
    const getComments = async () => {
      var axios = require('axios')
      var data = ''

      var config = {
        method: 'post',
        url: 'http://localhost:3001/product/get_pages',
        headers: {},
        data: data,
      }

      axios(config)
        .then(function (response) {
          console.log('data :' + JSON.stringify(response.data))
          const total = response.data.product
          setpageCount(Math.ceil(total / limit)-1)
        })
        .catch(function (error) {
          console.log(error)
        })

      // console.log(Math.ceil(total/12));
    }

    getComments()
  }, [])

  useEffect(() => {
    const getComments = async () => {
      var axios = require('axios')
      var data = {
        category: 'All',
        limit: limit,
      }

      var config = {
        method: 'post',
        url: `http://localhost:3001/product/get_product_with_category`,
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o',
        },
        data: data,
      }

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data))
          console.log(response)

          setItems(response.data.product)
        })
        .catch(function (error) {
          console.log(error)
        })
      // console.log(Math.ceil(total/12));
    }

    getComments()
  }, [])

  const handlePageClick = async (data) => {
    console.log(data.selected)

    let currentPage = data.selected + 1

    var axios = require('axios')
    var data = {
      SearchBoolean: SearchBoolean,
      tags: Search.trim().toLowerCase(),
      limit: limit,
      currentPage: currentPage,
    }
    var config = {
      method: 'post',
      url: `http://localhost:3001/product/get_pages_productes_superMarket`,
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjExMGIzNmU1ZTNjMTE1NGIzNDgxYTMiLCJpYXQiOjE2NDUyODQ2MzN9.5cDaEHdyTqON_lBkq8Q9c7l7wmqJipqLImyjigKkd4o',
      },
      data: data,
    }
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        console.log(response)
        setItems(response.data.product)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  function SearchButton(data) {
    let currentPage = data.selected + 1

    var axios = require('axios')
    var data = JSON.stringify({
      tags: Search.trim().toLowerCase(),
      limit: limit,
      currentPage: currentPage,
    })

    var config = {
      method: 'post',
      url: 'http://localhost:3001/product/search_product',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        setItems(response.data.product)
      })
      .catch(function (error) {
        console.log(error)
      })

    var data1 = JSON.stringify({
      tags: Search.trim().toLowerCase(),
    })

    var config = {
      method: 'post',
      url: 'http://localhost:3001/product/search_product_forpages',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data1,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        const total = response.data.product.length
        setpageCount(Math.ceil(total / limit))
      })
      .catch(function (error) {
        console.log(error)
      })

    setSearchBoolean(true)
  }

  return (
    <div>
      <nav className='w-screen flex h-14 items-center bg-slate-900 text-white lg:h-16 z-30 shadow-md shadow-amber-400'>
        <a href='/' className=' flex items-center p-4 '>
          <img
            src='./images/Logo.jpg'
            alt='9odyani'
            className='rounded h-11 w-11 object-cover'
          />
          <h2 className='flex font-semibold mx-2 hover:bg-gray-800 rounded-full p-1 uppercase text-xl'>
            9odyani
          </h2>
        </a>

        <div className='my-auto mx-auto flex max-w-3xl flex-1 items-center text-slate-900 '>
          <input
            type='text'
            value={Search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            className=' flex-1 rounded-l border-none px-2 outline-none h-6 md:h-10'
            placeholder='Cherchez un produit, une marque ou une catégorie'
          />
          <button
            className='border-1 h-6 rounded-r border-black bg-amber-400 px-1 hover:bg-amber-500 md:px-2 md:h-10 lg:px-3 '
            onClick={SearchButton}
          >
            <SearchIcon />
          </button>
        </div>
      </nav>
      <div className='flex items-center justify-between'>
        <h1 className='text-5xl font-semibold ml-4'>Produits : </h1>
        <a
          href='/AddproductPage'
          className='bg-green-500 p-2 rounded text-white text-xl font-medium hover:scale-105 hover:bg-green-600 transition duration-300 mr-6 my-6'
        >
          <AddIcon /> Ajouter un noveau produit
        </a>
      </div>
      <div className='ProductDisplay'>
        <div className='prdct'>
          <Grid container justify='center' spacing={4}>
            {items.map((product) => (
              <Grid className='productgrid' item xs={12} sm={6} md={4} lg={3}>
                <Product
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  id={product._id}
                  promotion={product.promotion}
                />
              </Grid>
            ))}
          </Grid>

          <div className='paginationDiv'>
            <ReactPaginate
              previousLabel={'précédent'}
              nextLabel={'suivant'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={'pagination justify-content-center'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
