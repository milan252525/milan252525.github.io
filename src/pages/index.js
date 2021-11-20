import * as React from "react"
import kenobiGIF from "../images/hellothere.gif"

const pageStyles = {}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
    <title>milan_25</title>
    <img 
      src={kenobiGIF} 
      alt="General Kenobi saying 'Hello there'"
    />
    <p>This site is under development!</p>
    </main>
  )
}
  
export default IndexPage
