import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import {IGatsbyImageData} from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import "twin.macro"

type ChildImageSharp = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

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

interface AvatarKennyProps {
  size: "small"|"large"
}

export const AvatarKenny = ({size}: AvatarKennyProps) => {
  const { avatarKennySmall, avatarKennyLarge } = useStaticQuery<AvatarKennyData>(AvatarKennyImage)
  if(size === "large") {
    return (
        <GatsbyImage
            image={avatarKennyLarge.childImageSharp.gatsbyImageData}
            alt="AvatarKenny"
            tw="hidden md:flex md:w-1/5 object-contain"
        />
    )
  }
  return (
      <GatsbyImage
          image={avatarKennySmall.childImageSharp.gatsbyImageData}
          alt="AvatarKenny"
          tw="md:hidden object-contain"
      />
  )
}
