import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import "twin.macro"
import {SessionContent} from "../components/SessionData";
import Button from "../components/button";

interface SessionProps {
    session: SessionContent
}

const Session = ( {session} : SessionProps) => {
    return  (
        <div tw="flex flex-col md:w-1/3 bg-primary shadow-2xl rounded-b-lg items-center pb-4">
            <GatsbyImage
                image={session.img.childImageSharp.gatsbyImageData}
                alt={session.name}
                tw="object-contain w-full"
            />
            <div tw="text-gray-800 p-2 font-sans text-sm xl:text-base p-4">
                <div tw="line-clamp-6">
                    {session.description}
                </div>
            </div>
            <div>
                <Button to="/about-me">Read more</Button>
            </div>
        </div>
    )
}

const Talks = () => {
    const data = useStaticQuery(graphql`
        {
            autonomyWant: file(relativePath: { eq: "sessions/autonomy-want.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
            sessions: allContentYaml {
                nodes {
                    ...session
                }
            }
        }
    `)

    const sessions: SessionContent[] = data.sessions.nodes[0].sessions
    return (
        <div tw="p-8 bg-gray-800 shadow-lg bg-opacity-80 "
             id="talks">
            <div tw="flex flex-col items-center justify-start">
                <div tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 ">
                    <h1 tw="text-base text-white md:text-xl xl:text-3xl font-bold">—Talks and hands-on—</h1>
                </div>
                <div tw="flex flex-col md:flex-row lg:w-4/5 items-center justify-between md:m-4 lg:m-8 space-y-4 md:space-y-0 md:space-x-6 lg:space-x-14">
                    <Session session={sessions[0]}/>
                    <Session session={sessions[1]}/>
                    <Session session={sessions[2]}/>
                </div>
            </div>
        </div>
    )
}

export default Talks