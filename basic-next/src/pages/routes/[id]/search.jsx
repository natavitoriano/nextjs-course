import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Search() {
    const router = useRouter();
    const id = router.query.id;

    return (
        <div>
            <h1>Routes/ {id}/ Search!!!</h1>
            <Link href="/routes">
                <button>Back</button>
            </Link>
        </div>
    )
}