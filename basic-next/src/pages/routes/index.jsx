import Link from 'next/link';

export default function rotas() {
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
        </div>
    )
}