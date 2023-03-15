import { useRouter } from "next/router";

export default function CatchAllProject() {
    const router = useRouter
    console.log(router.query)
    return (
        <h1>Catch-All Page</h1>
    )
}