import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import "twin.macro"

import BaseTemplate from "../templates/BaseTemplate"
import Hero from "../home/Hero";
import NavigationBar from "../components/NavigationBar"
import SEO from "../components/Seo"
import Talks from "../home/Talks";
import Footer from "../components/footer";
import AboutMe from "../home/AboutMe";
import DomainDrivenDesignInfo from "../home/DomainDrivenDesignInfo";

const Index = () => {
    const {backgroundImage} = useStaticQuery(graphql`
        {
            backgroundImage: file(relativePath: { eq: "background.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        height: 2399
                        width: 3424
                    )
                }
            }
        }
    `)
    const image = getImage(backgroundImage)
    const bgImage = convertToBgImage(image)

    return (
        <BaseTemplate>
            <SEO/>
            <BackgroundImage
                tw="h-auto bg-scroll"
                {...bgImage}
            >
                <NavigationBar/>
                <Hero/>
                <AboutMe/>
                <Talks/>
                <DomainDrivenDesignInfo/>
                <Footer/>
            </BackgroundImage>
        </BaseTemplate>
    )
}

export default Index
