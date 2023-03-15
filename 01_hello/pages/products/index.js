import Link from "next/link"

export default function Products() {
    // dummy "DB data" ➜
    const products = [
        { id: "Guitar", model: "Fender Strat" },
        { id: "Synth", model: "Minimoog" }
    ]
    return (
        <div>
            <h1>Products page</h1>
            <ul>
                {products.map(product => 
                <li key={product.id}>
                    <Link href={
                        {pathname: `/products/[id]`,
                        query: {id: product.id}
                        }}>{product.model}
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}