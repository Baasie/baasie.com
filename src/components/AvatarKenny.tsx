import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { ChildImageSharp } from "./logos/vddd"

interface AvatarKennyData {
  avatarKennySmall: ChildImageSharp
  avatarKennyLarge: ChildImageSharp
}

export const AvatarKennyImage = graphql`
  {
    avatarKennySmall: file(relativePath: { eq: "avatar-kenny-small.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 250, width: 250)
      }
    }
    avatarKennyLarge: file(relativePath: { eq: "avatar-kenny-large.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 1576, width: 1389)
      }
    }
  }
`

export interface AvatarKennyProps {
  size: "small" | "large"
}

export const AvatarKenny = ({size} : AvatarKennyProps) => {
  const { avatarKennySmall, avatarKennyLarge } = useStaticQuery<AvatarKennyData>(AvatarKennyImage)
  if(size === "large") {
    return (
        <GatsbyImage
            image={avatarKennyLarge.childImageSharp.gatsbyImageData}
            tw="object-contain mr-2 h-8 rounded-md"
            alt="AvatarKenny"
        />
    )

  }
  return (
    <GatsbyImage
      image={avatarKennySmall.childImageSharp.gatsbyImageData}
      tw="object-contain mr-2 h-8 rounded-md"
      alt="AvatarKenny"
    />
  )
}
