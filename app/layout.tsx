import "globals.css"
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className + "min-h-screen bg-gray-900 text-white"}>
        <main>{children}</main>
      </body>
    </html>
  )
}
