import { Inter } from 'next/font/google'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello next world</h1>
      <li>
        <Link href="/products">Products</Link>
        <Link href="/products/1/2">Catch-all page</Link>
      </li>
    </div>
  )
}
