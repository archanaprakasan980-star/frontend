import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

import Home from './components/Home'
import Products from './components/Products'
import AddProduct from './components/AddProduct'

const App = () => {
  return (
    <>
    <Router>
      <nav className='bg-amber-200 shadow-lg'>
        <div className='max-w-7xl mix-auto px-4 sm:px-6 lg:px-8'>
      <ul className='flex space-x-6 py-4'>
        <li>
          <Link to="/"className=' bg-amber-100 text-black hover:text-gray-300 border-2 text-3xl '>Home</Link>
                  

        </li>
        <li>
          <Link to="/products" className= 'bg-amber-100 text-black hover:text-gray-300 border-2 text-3xl'>Products</Link>

        </li>
        <li>
          <Link to="/addproduct" className='bg-amber-100 text-black hover:text-gray-300 border-2 text-3xl '>Add Product</Link>
        </li>



      </ul>

      </div>

      </nav>


      {/* Routes */}
      <Routes>

        <Route path='/' element= {<Home/>}/>
        <Route path='/products' element= {<Products/>} />
        <Route path='/addproduct' element= {<AddProduct/>}/>
         

      </Routes>
      </Router>
      </>
    
    
  )
}

export default App