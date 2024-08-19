"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export default function Home() {
    const router = useRouter();
    const loginUser = () => {
        router.push('/home/auth/login') 
    }
  return (
    <div className='flex gap-9 font-mono ml-[20px] text-[20px]'>
      <button onClick={loginUser}>Đăng nhập</button>
      <button>Đăng kí</button>
    </div>
  )
}
