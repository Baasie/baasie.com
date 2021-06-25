import * as React from "react"
import "twin.macro"
import {AvatarKenny} from "../components/AvatarKenny"
import PageTemplate from "../templates/PageTemplate";

const AboutMe = () => {
   return (
       <PageTemplate>

           <div tw="flex flex-col md:flex-row-reverse items-center justify-around m-8">
                <AvatarKenny size="small"/>
                <AvatarKenny size="large"/>
                <div tw="text-center md:w-2/5 space-y-2 text-white">

                    <h1 tw="text-base md:text-xl xl:text-3xl font-extrabold ">—About Me—</h1>
                    <div>
                        A lot of knowledge is lost when designing and building software — lost because of hand-overs in a telephone game, confusing communication by not having a shared language, discussing complexity without visualisation and by not leveraging the full potential and wisdom of the diversity of the people.
                        That lost knowledge while creating software impacts the sustainability, quality and value of the software product.
                        Kenny Baas-Schwegler is a socio-technical organisation designer and software architect.
                        He blends IT approaches like Domain-Driven Design and Continuous Delivery and facilitates change through using visual collaboration practices, the Cynefin framework and Deep Democracy.
                        Kenny empowers and collaboratively enables organisations, teams and groups of people in designing and building sustainable quality software products.
                    </div>
                    <br/>
                    <div>
                        One of Kenny's core principles is sharing knowledge.
                        He does that by writing a blog on his website baasie.com and helping curate the Leanpub book visual collaboration tool.
                        Besides writing, he also shares experience in the Domain-Driven Design community as an organiser of Virtual Domain-Driven Design (virtualddd.com) and Domain Driven Design Nederland.
                        He enjoys being a public speaker by giving talks and hands-on workshops at conferences and meetups.
                    </div>
                </div>
            </div>
       </PageTemplate>
   )
}

export default AboutMe;