import * as React from "react";
import "twin.macro"

const Layout = ({ children } : any) => {

    return (
        <>
            <div id="top" tw="font-sans bg-one">
                {children}
            </div>
        </>
    )
}

export default Layout
