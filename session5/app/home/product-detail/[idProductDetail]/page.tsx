"use client"
import React from 'react'

export default function page(props:any) {
    const {params} = props;
    console.log(1111111,props);
    
  return (
    <div>
      Product Id : {params.idProductDetail}
    </div>
  )
}
