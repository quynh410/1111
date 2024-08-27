import React from 'react'
async function getPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data.slice(0,15) 
  
}
export default async function page() {
    const posts = await getPosts()
  return (
    <div>
      <h1 className='font-bold text-[30px]'>List of Post</h1>
      {
        posts.map((item:any)=>{
            return(
                <li key={item.id}>{item.title}</li>
            )
        })
      }
    </div>
  )
}
