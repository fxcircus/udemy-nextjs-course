import path from 'path'
import fs from 'fs/promises'
import Link from 'next/link'

export default function Home(props) {
  const { products } = props

  return (
    <ul>
      { products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  // redirect if no data was fetched from BE
  if(!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  // return 404 if no products found
  if (data.products.length === 0) {
    return { notFound: true }
  }

  return { props: {
    products: data.products
    },
    revalidate: 120 // ISR every 120 seconds at most
  }
}