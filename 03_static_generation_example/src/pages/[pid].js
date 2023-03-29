import { Fragment } from "react";
import path from 'path'
import fs from 'fs/promises'

export default function ProductDetailsPage(props) {
    const { loadedProduct } = props

    return (
        <div>
        <h1>{loadedProduct.title}</h1>
        <p>{loadedProduct.description}</p>
        </div>
    )
}


export async function getStaticProps(context) {
    // using context to get values from the path [pid]
    const { params } = context
    const productId = params.pid

    // Fetching dummy data
    const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    
    // Finding specific product using ID from context
    const product = data.products.find(product => product.id == productId)
    
    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { pid: 'p1'} },
            { params: { pid: 'p2'} },
            { params: { pid: 'p3'} },
        ],
        fallback: false
    }
}