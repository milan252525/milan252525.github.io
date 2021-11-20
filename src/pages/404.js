import * as React from "react"
import travoltaGIF from "../images/travolta.gif"

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>404 -Page not found</h1>
      <img 
        src={travoltaGIF} 
        alt="Confused Travolta"
      />
    </main>
  )
}

export default NotFoundPage
