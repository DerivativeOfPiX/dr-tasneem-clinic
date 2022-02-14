import * as React from "react"
import front from '../images/front-img.jpg'

const IndexPage = () => {
  return (
    <main>
      <title>Dr Tasneem's Clinic</title>
      <div className="flex justify-between text-white p-2">
        <div className="m-auto">
          <h2 className="font-serif text-blue emphasize-text">We offer holistic healthcare<br />and beauty services</h2>
          <button className="p-2 bg-green rounded">Book an Appointment</button>
        </div>
          <img className="fill w-1/4" alt="Hijama Treatment Procedure" src={front}></img>
      
      </div>

    </main>
  )
}

export default IndexPage
