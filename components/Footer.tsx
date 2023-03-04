import Link from "next/link"

const Footer = () => (
  <footer className="my-2 flex items-center gap-8">
    <div>
      <span>Made by </span>
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

export default Footer
