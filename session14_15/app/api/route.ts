// import { NextResponse } from 'next/server'
// import React from 'react'
// let user = [
//     {
//         id: 1,
//         name: 'Nguyen Van A',
//         age: 25
//     },
//     {
//         id: 2,
//         name: 'Nguyen Van B',
//         age: 30
//     },
//     {
//         id: 3,
//         name: 'Nguyen Van C',
//         age: 28
//     }
// ]
// export async function GET() {

import { NextResponse } from "next/server"

    
//   return NextResponse.json(user)
// }

export async function GET(){
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return NextResponse.json(data)
}
export async function POST(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    return NextResponse.json(data)
}