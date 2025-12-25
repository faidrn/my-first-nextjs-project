import Navbar from "../components/Navbar";

export const metadata = {
    title: 'Next.js My App',
    description: 'A simple Next.js application',
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