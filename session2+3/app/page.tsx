import React from 'react'
import Bai1 from './baitap/bai1/Bai1'
import Bai2 from './baitap/bai2/Bai2'
import Bai3 from './baitap/bai3/Bai3'
import Bai5 from './baitap/bai5/Bai5'
import Bai6 from './baitap/bai6/Bai6'
import Bai7 from './baitap/bai7/Bai7'
import Bai8 from './baitap/bai8/Bai8'
export default function page() {
  let basebtn = {
    primary: "bg-blue-500 hover:bg-blue-600 w-[100px] h-[50px] rounded",
    success: "bg-green-500 hover:bg-green-600 w-[100px] h-[50px] rounded",
    danger: "bg-red-500 hover:bg-red-600 w-[100px] h-[50px] rounded",
    warning: "bg-yellow-500 hover:bg-yellow-600 w-[100px] h-[50px] rounded",
  }
  return (
    <div>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7 style= {basebtn}></Bai7>
      <Bai8></Bai8>
    </div>
  )
}
