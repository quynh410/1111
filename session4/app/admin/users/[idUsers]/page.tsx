"use client"
import React from 'react'

export default function page(props:any) {
    console.log("id",props);
    
  const {params} = props;
  return (
    <div>
      Trang chi tiet user <br />
      id nguoi dung: {params.idUsers}
    </div>
  )
}
