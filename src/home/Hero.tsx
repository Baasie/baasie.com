import * as React from "react"
import "twin.macro"
import {AvatarKenny} from "../components/AvatarKenny";

const Hero = () => {

    return (
        <div tw="p-8 bg-gray-800 shadow-lg bg-opacity-80">
            <div tw="flex flex-col md:flex-row-reverse items-center justify-around m-8">
                <AvatarKenny size="small"/>
                <AvatarKenny size="large"/>
                <div tw="text-center text-white md:w-2/5 space-y-2">
                    <h2 tw="text-sm md:text-lg xl:text-2xl font-bold">Hi, I'm</h2>
                    <h1 tw="text-base md:text-xl xl:text-3xl font-extrabold">—Kenny Baas-Schwegler—</h1>
                    <h3 tw="text-xs md:text-base xl:text-xl font-semibold">A sociotechnical IT Architect, a visual Deep Democracy facilitator and Domain-Driven Design expert</h3>
                </div>
            </div>
        </div>
    )
}

export default Hero