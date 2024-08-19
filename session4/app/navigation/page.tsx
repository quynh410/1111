import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      menu thanh dieu huong <br />
      <Link href={"/navigation/about"}>About</Link> <br />
      <Link href={"/navigation/news"}>News</Link>
    </div>
  )
}
