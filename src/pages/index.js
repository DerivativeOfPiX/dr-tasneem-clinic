import * as React from "react"
import { Card } from "../components/card"
import front from '../images/front-img.jpg'
//for animations refer
//https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-page-transitions-with-plugin-transition-link/
const IndexPage = () => {
  return (
    <main>
      <title>Dr Tasneem's Clinic</title>
      <div className="flex justify-between text-white p-2">
        <div className="m-auto">
          <h1 className="font-serif text-blue emphasize-text">Welcome to Dr Tasneem's Clinic</h1>
          <h2 className="text-lblue">We offer holistic healthcare and beauty services</h2>
          <button className="p-2 m-2 bg-green rounded">Book an Appointment</button>
        </div>
        <img className="fill w-1/4" alt="Hijama Treatment Procedure" src={front}></img>

      </div>
      <div className="my-2">
        <h1 className="emphasize-text text-blue text-center">What we do</h1>
        <p className="text-lblue text-center">At Dr. Tasneem’s Clinic, we combine cosmetology with aesthetic services and alternative treatment
          (Hijama)<br /> to create a personalised treatment plan that achieves clear skin while alleviating common health issues,
          enhancing your natural beauty.</p>
        <div className="my-2">
          <h1 className="emphasize-text text-blue text-center">Our Services</h1>
          <div className="flex">
            <Card heading="HydraFacial"
              description="We provide top of the line hydrafacial" />
            <Card heading="Platlet Rich Plasma Injections"/>
            <Card heading="Botox Dermal Fillers"/>
          </div>
          <a href="/about-us">... any many more</a>
        </div>
        <div>

        </div>
      </div>
    </main>
  )
}

export default IndexPage
