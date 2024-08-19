"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Chinh() {
  const  pathName  = usePathname()
  return (
    <div className='flex gap-9 font-mono text-[20px]'>
      <Link
        className={pathName === "/home" ? "active" : ""}
        href={"/home"}
      >
        Home
      </Link>
      <Link
        className={pathName === "/home/about" ? "active" : ""}
        href={"/home/about"}
      >
        {" "}
        About
      </Link>
      <Link
        className={pathName === "/home/contact" ? "active" : ""}
        href={"/home/contact"}
      >contact</Link>
      <Link
        className={pathName === "/home/login" ? "active" : ""}
        href={"/home/auth/login"}
      >Login</Link>
    </div>
  )
}
