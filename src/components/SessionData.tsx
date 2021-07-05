import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"


export const SessionData = graphql`
    fragment session on ContentYaml {
        sessions {
            name
            img {
                publicURL
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
            renditions {
                conference
                url
                date
                type
                video
                speakerdeck
                miro
                alternativeTitle
                alternativeDescription
            }
            description
        }
    }
`

export type SessionContent = {
    name: string
    description: string
    renditions: Array<Rendition>
    img: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
}

export type Rendition = {
    conference: string
    url: string
    date: Date
    type: "talk" | "keynote" | "hands-on" | "workshop"
    video?: string
    speakerdeck?: string
    miro?: string
    alternativeTitle?: string
    alternativeDescription?: string
}

