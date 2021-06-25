import * as React from "react"
import "twin.macro"
import {graphql, useStaticQuery} from "gatsby";
import {ChildImageSharp} from "../components/logos/vddd";
import {GatsbyImage} from "gatsby-plugin-image";

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


const Hero = () => {
    const { avatarKennySmall, avatarKennyLarge } = useStaticQuery<AvatarKennyData>(AvatarKennyImage)

    return (
        <div tw="p-8 bg-gray-800 shadow-lg bg-opacity-80">
            <div tw="flex flex-col md:flex-row-reverse items-center justify-around m-8">
                <GatsbyImage
                    image={avatarKennyLarge.childImageSharp.gatsbyImageData}
                    alt="AvatarKenny"
                    tw="hidden md:flex md:w-1/5 object-contain"
                />
                <GatsbyImage
                    image={avatarKennySmall.childImageSharp.gatsbyImageData}
                    alt="AvatarKenny"
                    tw="md:hidden object-contain"
                />
                <div tw="text-center text-white md:w-2/5 space-y-2">
                    <h2 tw="text-sm md:text-lg xl:text-2xl font-bold">Hi, I'm</h2>
                    <h1 tw="text-base md:text-xl xl:text-3xl font-extrabold">—Kenny Baas-Schwegler—</h1>
                    <h3 tw="text-xs md:text-base xl:text-xl font-semibold">A sociotechnical IT Architect, a visual Deep Democracy facilitator and Domain-Driven Design expert</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero