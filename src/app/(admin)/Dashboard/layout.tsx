import '../../globals.css'
export default function adminLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className=''>



                {children}




            </body>
        </html>
    )
}