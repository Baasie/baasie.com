import * as React from "react"
import "twin.macro"
import Button from "../components/button";
import {graphql, useStaticQuery} from "gatsby";
import {ChildImageSharp} from "../components/logos/vddd";
import {GatsbyImage} from "gatsby-plugin-image";

interface AboutMeData {
    aboutMe: ChildImageSharp
}

export const AboutMeImage = graphql`
    {
        aboutMe: file(relativePath: { eq: "about-me.jpeg" }) {
            childImageSharp {
                gatsbyImageData(height: 2365, width: 3543)
            }
        }
    }
`

const AboutMe = () => {
    const { aboutMe } = useStaticQuery<AboutMeData>(AboutMeImage)

    return (
        <div tw="p-2 md:p-8 bg-white shadow-lg bg-opacity-80">
            <div tw="flex flex-col md:flex-row items-center justify-around m-2 md:m-8 space-y-2 md:space-y-0">
                <GatsbyImage
                    image={aboutMe.childImageSharp.gatsbyImageData}
                    alt="About me at DDD"
                    tw="md:w-2/5 rounded-tr-3xl rounded-lg md:rounded-bl-3xl"
                />
                <div tw="text-center text-gray-800 md:w-2/5 space-y-6 text-shadow">
                    <div tw="font-sans text-xs md:text-sm xl:text-base space-y-4 text-shadow-xl">
                        <div>
                            A lot of knowledge is lost when designing and building software — lost because of hand-overs in a telephone game, confusing communication by not having a shared language, discussing complexity without visualisation and by not leveraging the full potential and wisdom of the diversity of the people.
                        </div>
                        <div >
                            I am a sociotechnical architect working with CTO's, managers, architects and teams to change that to design and build sustainable quality software that can change with business needs!
                        </div>
                        <div >
                            You can hire me to facilitate workshops, give training, assess your software, inspire the organisation with talks and hands-on or a long term consulting assignment. Check-out what I do below.
                        </div>
                    </div>
                    <div>
                        <Button to="/about-me">More about me</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe