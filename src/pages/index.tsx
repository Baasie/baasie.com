import * as React from "react";
import BackgroundImage from 'gatsby-background-image'
import {graphql, useStaticQuery} from 'gatsby'

import Layout from "../templates/layout"
import NavigationBar from "../components/NavigationBar"
import SEO from "../components/Seo"

const Index = ( {className} : any) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "background1.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )
    const imageData = data.desktop.childImageSharp.fluid
  return (
    <Layout>
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
        >
            <SEO/>
            <NavigationBar/>
            Hallo world
        </BackgroundImage>
    </Layout>
  )
}

export default Index
