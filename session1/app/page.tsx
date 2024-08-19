import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button';
export default function page() {
let data:string[] = ["thêm mới", "sửa", "xóa"];
  return (
    <div>
      Họ và tên : Nguyễn Thị Thu Quỳnh
      <Header></Header>
      <Footer></Footer>
      <Button name={data}></Button>
    </div>
  )
}
