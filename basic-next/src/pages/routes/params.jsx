import { useRouter } from 'next/router';
import Link from 'next/link';

export default function params() {
    const router = useRouter();

    const id = router.query.id;
    const name = router.query.name;

    console.log(router);
    return (
        <div>
            <h1>Routes Params: {id} e {name}</h1>
            <Link href="/routes">
                <button>Back</button>
            </Link>
        </div>
    )
}