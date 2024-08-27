import React from 'react'
async function getProducts(){
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data.slice(0,15) 
  
}
export default async function page() {
    const products = await getProducts()
  return (
    <div>
      <h1 className='font-bold text-[30px]'>List of Product</h1>
      {
        products.map((item:any)=>{
            return(
                <>
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Price: {item.price}</p>
                    <p>Image : <img src={item.image} className='w-[200px] ml-[50px]'/></p>
                    <hr /> <br />
                </div>
                </>
                
            )
        })
      }
    </div>
  )
}
