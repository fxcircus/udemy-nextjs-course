import { useRouter } from "next/router";

export default function ProductPage() {
    const router = useRouter()

    console.log(router.pathname) // /products/[projectId]
    console.log(router.query) // {projectId: '123'}
    console.log(router.query.projectId) // 123

    return (
        <h1>Some Product page</h1>
    )
}