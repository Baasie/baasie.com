import * as React from "react";
import "twin.macro"

const BaseTemplate = ({ children } : any) => {

    return (
        <>
            <div id="top" tw="font-sans">
                {children}
            </div>
        </>
    )
}

export default BaseTemplate
