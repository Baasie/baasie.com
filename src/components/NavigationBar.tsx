import { Link } from "gatsby"
import React, { useState } from "react"
import tw from "twin.macro"
import {
    GithubLogo,
    LinkedinLogo,
    TwitterLogo,
    VdddLogo
} from "./logos"

interface MobileNavigationItemProps {
    children: any
    to?: string
    href?: string
}

const MobileNavigationItem = ({children, to, href}: MobileNavigationItemProps) => {
    const style = [tw`text-lg leading-tight text-gray-800 flex-shrink-0 content-center flex items-center w-full p-4 `]
    if(to) {
        return (
            <Link
                to={to}
                css={style}
            >
                {children}
            </Link>
        )
    }
    return (
        <a
            css={style}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}

const NavbarMobile = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    return (
        <div tw="lg:hidden">
            <div tw="w-full flex flex-row items-center justify-between px-2">
                <DesktopNavigationItem to="/">
                    Baasie.com
                </DesktopNavigationItem>
                <button
                    tw="relative flex flex-shrink-0 items-center m-4 px-3 py-2 border rounded border-white hover:text-red-800 hover:border-red-800"
                    onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
                >
                    <svg
                        tw="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div
                tw="block bg-white w-full z-30 shadow-md"
                css={!isMenuOpen ? tw`invisible h-5` : tw`h-auto`}
            >
                <div tw="flex flex-col lg:flex-row items-start lg:items-stretch justify-end opacity-100">
                    <MobileNavigationItem
                        to="/about-me"> About me
                    </MobileNavigationItem>
                    <MobileNavigationItem href="https://dddheuristics.com">
                        <VdddLogo />
                    </MobileNavigationItem>
                    <div tw="flex flex-row p-2 px-4 space-x-1">
                        <DesktopNavigationItem href="https://twitter.com/kenny_baas">
                            <TwitterLogo />
                        </DesktopNavigationItem>
                        <DesktopNavigationItem href="https://www.linkedin.com/in/kenny-baas/">
                            <LinkedinLogo />
                        </DesktopNavigationItem>
                        <DesktopNavigationItem href="https://github.com/Baasie">
                            <GithubLogo />
                        </DesktopNavigationItem>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface DesktopNavigationItemProps {
    children: any
    to?: string
    href?: string
}

const DesktopNavigationItem = ({children, to, href}: DesktopNavigationItemProps) => {
    const style = [tw`text-xl leading-tight text-gray-800 hover:text-red-800 cursor-pointer flex-shrink-0 content-center flex items-center`]
    if(to) {
        return (
            <Link
                to={to}
                css={style}
            >
                {children}
            </Link>
        )
    }
    return (
        <a
            css={style}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}

const NavbarDesktop = () => {
    return (
        <div tw="hidden lg:flex lg:h-full lg:px-4 lg:items-center lg:justify-between">
            <DesktopNavigationItem to="/">
                Baasie.com
            </DesktopNavigationItem>
            <div tw="lg:flex lg:justify-end lg:h-full lg:space-x-4">
                <div tw="space-x-4 lg:flex lg:flex-row lg:items-stretch">
                    <DesktopNavigationItem to="/about-me">
                        About me
                    </DesktopNavigationItem>
                    <DesktopNavigationItem href="https://dddheuristics.com">
                        <VdddLogo />
                    </DesktopNavigationItem>
                </div>
                <div tw="space-x-1 lg:flex lg:flex-row lg:items-stretch">
                    <DesktopNavigationItem href="https://twitter.com/kenny_baas">
                        <TwitterLogo />
                    </DesktopNavigationItem>
                    <DesktopNavigationItem href="https://www.linkedin.com/in/kenny-baas/">
                        <LinkedinLogo />
                    </DesktopNavigationItem>
                    <DesktopNavigationItem href="https://github.com/Baasie">
                        <GithubLogo />
                    </DesktopNavigationItem>
                </div>
            </div>
        </div>
    )
}

const NavBar = () => {
    return (
        <div tw="bg-white bg-opacity-80 shadow-md h-20 sticky top-0 inset-x-0 z-50">
            <NavbarMobile />
            <NavbarDesktop />
        </div>
    )
}

export default NavBar
