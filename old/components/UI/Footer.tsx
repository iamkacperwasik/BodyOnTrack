import Link from "next/link"

export const Footer = () => (
  <footer className="flex gap-8 p-4 text-white">
    <div>
      <span>Autor: </span>
      <Link
        href="https://github.com/iamkacperwasik"
        target="_blank"
        className="font-semibold"
      >
        Kacper Wąsik
      </Link>
    </div>
    <div>
      <Link
        href="https://github.com/iamkacperwasik/kcalculator"
        target="_blank"
      >
        Github Repo
      </Link>
    </div>
  </footer>
)
