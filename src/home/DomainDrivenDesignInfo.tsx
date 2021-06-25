import * as React from "react"
import "twin.macro"
import Button from "../components/button";
import {graphql, useStaticQuery} from "gatsby";
import {ChildImageSharp, VdddLogo} from "../components/logos/vddd";
import {GatsbyImage} from "gatsby-plugin-image";

interface DomainDrivenDesignInfoData {
    domainDrivenDesignInfo: ChildImageSharp
}

export const DomainDrivenDesignInfoImage = graphql`
    {
        domainDrivenDesignInfo: file(relativePath: { eq: "domain-driven-design-es.png" }) {
            childImageSharp {
                gatsbyImageData(height: 1365, width: 2543)
            }
        }
    }
`

const DomainDrivenDesignInfo = () => {
    const { domainDrivenDesignInfo } = useStaticQuery<DomainDrivenDesignInfoData>(DomainDrivenDesignInfoImage)

    return (
        <div tw="p-2 md:p-8 bg-white shadow-lg bg-opacity-80">
            <div tw="flex flex-col md:flex-row items-center justify-around m-2 md:m-8 space-y-2 md:space-y-0">
                <div tw="flex flex-col text-center text-gray-800 md:w-2/5 space-y-6 text-shadow items-center">
                    <h1 tw="text-base md:text-xl xl:text-3xl font-extrabold text-red-800">—Domain-Driven Design Expertise—</h1>
                    <div tw="font-sans text-xs md:text-sm xl:text-base space-y-4 text-shadow-xl">
                        <div>
                            Domain-driven design (DDD) is an approach to developing software for complex business requirements by designing shared models for creating software. We focus on language where we crisply concisely describe the situation in the domain by creating a shared language created through conversations between business people (specialists) and software people which becomes the ubiquitous language. Instead of one canonical language, we create multiple bounded contexts.
                        </div>
                    </div>
                    <div>
                        <Button to="/training">Check-out my public trainings</Button>
                    </div>
                    <div tw="font-sans text-xs md:text-sm xl:text-base space-y-4 text-shadow-xl">
                        I am also a community leader of the virtual DDD community, a community driven site for people who want to get more in-depth knowledge of Domain-Driven Design. Click the logo below to check-it-out!
                    </div>
                    <div>
                        <a
                            tw="text-lg leading-tight text-gray-800 flex-shrink-0 content-center flex items-center w-full p-4"
                            href="https://virtualddd.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <VdddLogo />
                        </a>
                    </div>
            </div>
                <GatsbyImage
                    image={domainDrivenDesignInfo.childImageSharp.gatsbyImageData}
                    alt="About me at DDD"
                    tw="md:w-2/5 rounded-tl-3xl md:rounded-br-3xl"
                />
            </div>
        </div>
    )
}

export default DomainDrivenDesignInfo