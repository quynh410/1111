"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [products,setProducts]= useState([]);
    
    useEffect(()=>{
        const getData= async()=>{
            let res = await axios.get("https://fakestoreapi.com/products")
            setProducts(res.data);
        }
        getData();
    },[])
  return (
    <div>
      {
        products.map((item:any)=>{
            return (
                <>
                <div key={item.id}>
                    <h2>Tên sản phẩm : <b>{item.title}</b> </h2>
                    <p> Giá :  <b>{item.price}</b></p>
                    <p> Đánh giá :  <b>{item.description}</b></p>
                    <p> Image : <img src={item.image} className='w-[200px] ml-[50px]'/></p>
                    <hr />
                </div>
                </>
            )
        })
      }
    </div>
  )
}
