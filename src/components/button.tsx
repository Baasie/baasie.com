import { Link } from "gatsby"
import * as React from "react"
import tw from "twin.macro"

interface ButtonProps {
  children: any
  to?: string
  href?: string
}

const Button = ({
  children,
  to,
  href,
}: ButtonProps) => {
  const style = [
    tw`text-center m-4 text-white px-4 py-2 bg-red-800 hover:bg-red-700 rounded break-words`,
  ]
  if (href) {
    return (
      <a
        role="button"
        css={style}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
  if (to) {
    return (
      <Link css={style} to={to}>
        {children}
      </Link>
    )
  }

  return null
}

export default Button
