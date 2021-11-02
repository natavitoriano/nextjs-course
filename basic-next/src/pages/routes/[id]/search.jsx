import { useRouter } from 'next/router';

export default function search() {
    const router = useRouter();
    const id = router.query.id;

    return (
        <div>
            <h1>Routes/ {id}/ Search!!!</h1>
        </div>
    )
}