import * as React from "react";
import "twin.macro"

const Layout = ({ children } : any) => {
  return (
    <>
      <div id="top" tw="font-sans">
        {children}
      </div>
    </>
  )
}

export default Layout
