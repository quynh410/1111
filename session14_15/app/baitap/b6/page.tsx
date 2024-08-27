"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const getUsers = async ()=>{
      let res = await axios.post(`http://localhost:3000/api`);
      setUsers(res.data);
    }
    getUsers();
  },[])
  return (
    <div>
      {
        users.map((item:any)=>{
          return(
            <>
            <div key={item.id}> <br />
              <p>Tên : <b>{item.name}</b></p>
              <p>Email : <b>{item.email}</b></p>
              <p>Địa chỉ : <b>{item.address.street},{item.address.suite},{item.address.city}</b></p>
              <br />
              <hr />
            </div>
            </>
          )
        })
      }
    </div>
  )
}
