import Link from 'next/link';
import router from 'next/router';

export default function rotas() {

    function simpleNavigation(url) {
        router.push(url);
    }

    function paramsNavigation() {
        router.push({
            pathname: "/routes/params",
            query: {
                id: 123,
                name: 'Ana'
            }
        })
    }

    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/routes/params?id=12&name=Ana">
                    <li>Params</li>
                </Link>
                <Link href="/routes/123/search">
                    <li>Search</li>
                </Link>
                <Link href="/routes/123/Daniel">
                    <li>Daniel</li>
                </Link>
            </ul>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={paramsNavigation}>Params</button>
                <button onClick={() => router.push("/routes/123/search")}>Search</button>
                <button onClick={() => simpleNavigation("/routes/123/Daniel")}>Daniel</button>
            </div>
        </div>
    )
}