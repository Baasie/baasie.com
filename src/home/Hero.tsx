import * as React from "react"
import "twin.macro"
import {AvatarKenny} from "../components/AvatarKenny";
import Button from "../components/button";

const Hero = () => {
    return (
        <div tw="p-8 bg-gray-800 shadow-lg bg-opacity-80">
            <div tw="flex flex-row items-center justify-around m-8">
                <div tw="text-center text-white w-2/5 space-y-6 text-shadow">
                    <h1 tw="text-base md:text-xl xl:text-3xl font-bold">Hi, I am Kenny Baas-Schwegler</h1>
                    <div tw="font-sans text-xs md:text-sm xl:text-base space-y-4">
                        <div >
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
                <div tw="w-1/5 rounded-md object-contain">
                    <AvatarKenny size="large" />
                </div>
            </div>
        </div>
    )
}

export default Hero