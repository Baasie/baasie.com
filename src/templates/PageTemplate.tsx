import * as React from "react";
import "twin.macro"
import BaseTemplate from "./BaseTemplate";
import SEO from "../components/Seo";
import BackgroundImage from "gatsby-background-image";
import NavigationBar from "../components/NavigationBar";
import {graphql, useStaticQuery} from "gatsby";
import {getImage} from "gatsby-plugin-image";
import {convertToBgImage} from "gbimage-bridge";
import Footer from "../components/footer";

const PageTemplate = ({ children } : any) => {
    const {backgroundImage} = useStaticQuery(graphql`
        {
            backgroundImage: file(relativePath: { eq: "background3.png" }) {
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

                <div tw="p-8 bg-gray-800 shadow-lg bg-opacity-80">
                    <div tw="prose-sm md:prose-md lg:prose-lg xl:prose-xl">
                        {children}
                    </div>
                </div>
                <Footer/>
            </BackgroundImage>

        </BaseTemplate>
    )
}

export default PageTemplate
