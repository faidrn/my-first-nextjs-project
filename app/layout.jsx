import Navbar from "../components/Navbar";

export const metadata = {
    title: 'Mi tienda con Next.js',
    description: 'Esta es la página principal de mi tienda',
    keywords: 'tienda, next.js, ecommerce, productos',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}