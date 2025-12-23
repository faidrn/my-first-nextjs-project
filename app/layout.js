export const metadata = {
    title: 'Next.js My App',
    description: 'A simple Next.js application',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <nav>
                    <h1>Navbar</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Tienda</li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    )
}