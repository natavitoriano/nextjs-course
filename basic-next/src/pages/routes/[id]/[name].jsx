import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Name() {
    const router = useRouter();
    const id = router.query.id;
    const name = router.query.name;

    return (
        <div>
            <h1>Routes/ {id}/ {name}</h1>
            <Link href="/routes">
                <button>Back</button>
            </Link>
        </div>
    )
}