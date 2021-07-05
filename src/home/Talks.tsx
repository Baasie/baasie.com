import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import "twin.macro"
import {SessionContent} from "../components/SessionData";
import Button from "../components/button";
import {IGatsbyImageData} from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";


type SessionComponentContent = {
    name: string
    image: IGatsbyImageData
    description: string
    conference: string
    type: string
}

interface SessionProps {
    session: SessionComponentContent
}

const Session = ( {session} : SessionProps) => {
    return  (
        <div tw="flex flex-col md:w-1/3 bg-primary shadow-2xl rounded-b-lg items-center pb-4">
            <GatsbyImage
                image={session.image}
                alt={session.name}
                tw="h-full w-full object-cover"
            />
            <div tw="text-gray-800 p-2 font-sans text-sm xl:text-base p-4">
                    <div tw="prose-sm md:prose-md lg:prose-lg xl:prose-xl font-bold h-1/5">
                        {session.name} @ {session.conference}
                    </div>

                <div tw="line-clamp-6 h-4/5">
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
            sessions: allContentYaml {
                nodes {
                    ...session
                }
            }
        }
    `)

    const sessions: SessionContent[] = data.sessions.nodes[0].sessions

    const sessionsMap: Map<Date, SessionComponentContent> = new Map<Date, SessionComponentContent>()


    sessions.forEach( session => {
            session.renditions.forEach(rendition => {
                let sessionComponentContent: SessionComponentContent = {

                    name: rendition.alternativeTitle || session.name,
                    image: session.img.childImageSharp.gatsbyImageData,
                    description: rendition.alternativeDescription || session.description,
                    conference: rendition.conference,
                    type: rendition.type
                };
                sessionsMap.set(rendition.date, sessionComponentContent);
            })
        }
    )
    //DIRTY BUT NEVER HAPPENS
    let placeholderSession: SessionComponentContent  = {
        name: "",
        image: sessions[0].img.childImageSharp.gatsbyImageData,
        description: "",
        conference: "",
        type: ""
    }
    let allDates = Array.from(sessionsMap.keys())
    let upcomingDate = FindFirstUpcomingSession(allDates);
    let pastDates = FindAllPastSessionsOrderedByTheLastOneFirst(allDates)
    let upcomingSession: SessionComponentContent = sessionsMap.get(upcomingDate) || placeholderSession
    let firstPastSession: SessionComponentContent = sessionsMap.get(pastDates[0]) || placeholderSession
    let secondPastSession: SessionComponentContent = sessionsMap.get(pastDates[1]) || placeholderSession


    return (
        <div tw="p-8 bg-gray-800 shadow-lg bg-opacity-80 "
             id="talks">
            <div tw="flex flex-col items-center justify-start">
                <div tw="my-2 w-4/5 lg:w-2/3 xl:w-1/2 ">
                    <h1 tw="text-base text-white md:text-xl xl:text-3xl font-bold">—Talks and hands-on—</h1>
                </div>
                <div tw="flex flex-col md:flex-row lg:w-4/5 items-center justify-between md:m-4 lg:m-8 space-y-4 md:space-y-0 md:space-x-4 lg:space-x-24">
                    <Session session={upcomingSession}/>
                    <Session session={firstPastSession}/>
                    <Session session={secondPastSession}/>
                </div>
            </div>
        </div>
    )
}

const FindFirstUpcomingSession = (dates: Array<Date>) => {
   return dates.filter(date => new Date(date) > new Date()).sort((a, b) =>  +new Date(a) - +new Date(b))[0]
}

const FindAllPastSessionsOrderedByTheLastOneFirst = (dates: Array<Date>) => {
    return dates.filter(date => new Date(date) <= new Date()).sort((a,b) => +new Date(b) - +new Date(a))
}

export default Talks