"use client";
import { log } from 'console'
import React from 'react'
interface Product {
    idProduct:string
}
interface Props {
    params:Product
}
/*
    components trong next ks co 2 loai 
    1: client components ( chay tren trinh duyet)
    2: server components (chay tren server)
    \Mac dinh khi tao function thi no mac dinh la server components
*/
export default function page(props:Props) {
    console.log("Gia tri cua props",props);
    // dung detructoring
    const {params} = props;
  return (
    <div>
      Trang chi tiet san pham <br />
      id san pham : {params.idProduct}
    </div>
  )
}   
