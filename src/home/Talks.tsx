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
    conferenceUrl: string
    type: string
}

interface SessionProps {
    session: SessionComponentContent
}

const Session = ( {session} : SessionProps) => {
    return  (
        <div tw="flex flex-col md:w-1/3 bg-primary shadow-2xl rounded-b-lg items-center pb-4">
            <div tw="h-36 md:h-28 lg:h-56 xl:h-60 2xl:h-80 w-full overflow-hidden">
                <GatsbyImage
                    image={session.image}
                    alt={session.name}
                    tw="object-cover"
                />
            </div>
            <div tw="text-gray-800 p-2 font-sans text-sm xl:text-base p-4">
                <h1 tw="prose-sm md:prose-md lg:prose-lg xl:prose-xl font-bold h-20 md:h-24">
                    {session.name}
                </h1>
                <a
                    role="button"
                    tw="italic text-xs text-white px-1 py-1 bg-indigo-500 hover:bg-indigo-400 rounded"
                    href={session.conferenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {session.type} @ {session.conference}
                </a>
                <div tw="line-clamp-6 px-1 py-1">
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
                    conferenceUrl: rendition.url,
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
                <div tw="flex flex-col md:flex-row 2xl:w-4/5 items-center justify-between m-2 xl:m-4 space-y-4 md:space-y-0 md:space-x-4 xl:space-x-6 2xl:space-x-24">
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