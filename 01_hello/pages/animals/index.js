import Router, { useRouter } from "next/router";

export default function Animals() {
    const router = useRouter()

    const loadAnimalAndNavToIt = () => {
        // load Animal from DB
        router.push('/animals/turtle')
    }

    return (
        <div>
            <h1>Animals index page</h1>
            <button onClick={loadAnimalAndNavToIt}>yo</button>
        </div>
    )
}