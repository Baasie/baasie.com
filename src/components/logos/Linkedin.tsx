import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { ChildImageSharp, TwContent } from "./vddd"

interface LinkedinLogoData {
  linkedinLogo: ChildImageSharp
}

export const linkedinImage = graphql`
  {
    linkedinLogo: file(relativePath: { eq: "logo/linkedin.png" }) {
      childImageSharp {
        gatsbyImageData(height: 24, width: 24, layout: FIXED)
      }
    }
  }
`

export const LinkedinLogo = ({ twContent = "mr-2 h-8" }: TwContent) => {
  const { linkedinLogo } = useStaticQuery<LinkedinLogoData>(linkedinImage)
  return (
    <GatsbyImage
      image={linkedinLogo.childImageSharp.gatsbyImageData}
      tw={twContent}
      alt="Linkedin"
    />
  )
}
