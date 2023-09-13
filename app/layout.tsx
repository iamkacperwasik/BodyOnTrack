import clsx from "clsx"
import "globals.css"
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className.toString(), "bg-black text-white")}>
        {children}
      </body>
    </html>
  )
}
