import Navbar from "../components/Navbar";
import { Roboto } from 'next/font/google';

export const metadata = {
    title: 'Mi tienda con Next.js',
    description: 'Esta es la página principal de mi tienda',
    keywords: 'tienda, next.js, ecommerce, productos',
}

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    variable: '--font-roboto',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}