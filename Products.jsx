import React from 'react'
import axios from 'axios'
import Product from './Product'
import {useState,useEffect} from 'react'

const Products = () => {
       const [data,setData]= useState([])
        const url="https://fakestoreapi.com/products"

       useEffect(()=>{
                 const fetchData= async ()=>{
                    try{
                        const response = await axios.get(url)
                        console.log(response)

                    }catch(error){
                       console.log(error)

                    }
                 }

                 fetchData()

       },[])

            

            

       

  return (
    <div>Products</div>
  )
}

export default Products