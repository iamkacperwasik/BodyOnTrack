import {Providers} from "Providers"
import clsx from "clsx"
import "globals.css"
import {Inter} from "next/font/google"
import Link from "next/link"
import Script from "next/script"

const inter = Inter({subsets: ["latin"]})

export {metadata} from "metadata"

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(inter.className.toString(), "bg-black text-white")}>
        <Providers>
          {children}

          <footer className="container mx-auto mt-8 max-w-2xl rounded-lg p-4 text-xl text-white shadow-md">
            <div className="tsm:flex-col flex flex-col gap-2 text-sm sm:justify-between">
              <p className="mb-2 text-lg sm:text-xl">
                &quot;Empowering Your Health Journey, One Calorie at a
                Time&quot;
              </p>

              <div className="flex items-center gap-4 text-gray-300 ">
                <div>
                  <span>&copy; 2023 </span>
                  <Link
                    href="https://kacper.wasik.me"
                    target="_blank"
                    className="hover:underline"
                  >
                    Kacper Wąsik
                  </Link>
                </div>

                <div className="h-[15px] w-[2px] border-r border-gray-300" />

                <Link
                  href="https://github.com/iamkacperwasik/BodyOnTrack"
                  target="_blank"
                  className="hover:underline"
                >
                  Source code
                </Link>
              </div>
            </div>
          </footer>
        </Providers>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6PYV8JEW10" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6PYV8JEW10');
        `}
        </Script>
      </body>
    </html>
  )
}
