import React from 'react'
import{ useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

const AddProduct = () => {

  const{register,handleSubmit,reset}=useForm()

   const onSubmit=(data) =>{
    console.log(data)
    alert('Product Added!')
    reset()

   }

  return (
    <div className='flex justify-center items-center min-h-screen bg-purple-300'>
      <form className='bg-white p-6 rounded-lg shadow-md w-96 space-y-4' onSubmit={handleSubmit(onSubmit)}>
           <h2 className='text-xl font-semibold text-center'> Add product </h2>

      <input placeholder='Enter product name'
        className='w-full border p-2 rounded'
       {...register("name")}/>




<input placeholder='Enter product price'
 className='w-full border p-2 rounded'
 {...register("name")}/>

 <input placeholder='Enter product image'
  className='w-full border p-2 rounded'
  {...register("name")}/>


  <textarea placeholder='Enter product Description'
  className='w-full border p-2 rounded'
  {...register("description")}/>


  <button className='w-full bg-indigo-600 hover: bg-indigo-700 text-white py-2 rounded'>Add product</button>









      </form>
      



    </div>
  )
}

export default AddProduct