import * as React from "react"
import "twin.macro"

const Footer = () => {
  return (
    <div tw="bg-white flex flex-col items-center justify-center p-4 text-center opacity-80">
      <div>Copyright © Baasie.com</div>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Virtual-Domain-driven-design/virtual-domain-driven-design/graphs/contributors"
        >
          Developed by Kenny Baas-Schwegler
        </a>
      </div>
    </div>
  )
}

export default Footer
