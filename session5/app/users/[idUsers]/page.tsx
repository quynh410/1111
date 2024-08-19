"use client"
import React from 'react'

export default function UserDetail(props:any) {
    const {params} = props;
    console.log("gia tri props", props);
    
  return (
    <div>
       Trang thong tin chi tiet user : {params.idUsers}
    </div>
  )
}
