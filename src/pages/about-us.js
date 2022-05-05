import React from "react"
import { Card } from "../components/card"

const About = () => {
  return (
    <main>
      <title>About Us</title>
      <h1 className="bg-sky-500 text-stone-50">
        About Us
      </h1>

      <div>
        <h1>Our Services</h1>
        <Card heading="PRP"/>
        <Card heading="HydraFacial"/>
        <Card heading="Mesotherapy"/>
        <Card heading="Consulation"/>
      </div>

      <div>
        <h1>Meet the Founder</h1>
        <h3>Dr Tasneem Kausar</h3>
      </div>

    </main>
  )
}

export default About
