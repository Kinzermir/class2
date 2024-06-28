import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        Hello from product page!!
        <br />
        <Link href ="/product/t-shirt">T-shirt Category</Link>/
        <br />
        <Link href ="/product/dress-shirt">Dress shirt Category</Link>

    </div>
  )
}