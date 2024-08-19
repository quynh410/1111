"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Products() {
    const pathName = usePathname()
    console.log("11111", pathName);
    
  return (
    <div>
      <Link className={pathName === "/products/menmen" ? "active":""} href={"/products/menmen"}>Mèn Mén</Link> 
      <Link className={pathName === "/products/iphone" ? "active":""} href={"/products/iphone"}> Iphone</Link>

    </div>
  )
}
