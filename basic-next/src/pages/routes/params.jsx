import { useRouter } from 'next/router';

export default function params() {
    const router = useRouter();

    const id = router.query.id;
    const name = router.query.name;

    console.log(router);
    return (
        <div>
            <h1>Rotas Params: {id} e {name}</h1>
        </div>
    )
}