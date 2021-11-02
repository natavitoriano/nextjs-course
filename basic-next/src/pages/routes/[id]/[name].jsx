import { useRouter } from 'next/router';

export default function name() {
    const router = useRouter();
    const id = router.query.id;
    const name = router.query.name;

    return (
        <div>
            <h1>Routes/ {id}/ {name}</h1>
        </div>
    )
}