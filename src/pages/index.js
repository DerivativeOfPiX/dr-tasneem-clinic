import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"
import { Card } from "../components/card"
import HijamaDates from "../components/HijamaDates"
import front from '../images/front-img.jpg'
import logo from '../images/logo-light.png'
import { Link } from "gatsby"
//for animations refer
//https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-page-transitions-with-plugin-transition-link/
const IndexPage = () => {
  const date = new Date()
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const serviceData = [{
    name: "Hydra Facial",
    description: "Merow, this is a sample description for Hydra Facial Service, test line break line break"
  }, {
    name: "PRP for Face & Hair",
    description: "Merow, this is a sample description for Hydra Facial Service, test line break line brea"
  }, {
    name: "Microdermabrasion",
    description: "Merow, this is a sample description for Hydra Facial Service, test line break line brea"
  }, {
    name: "Laser Hair Removal",
    description: "Merow, this is a sample description for Hydra Facial Service, test line break line brea"
  }, {
    name: "Botox & Dermal Fillers",
    description: "Merow, this is a sample description for Hydra Facial Service, test line break line brea"
  }, {
    name: "Thread Lift",
    description: "Merow, this is a sample description for Hydra Facial Service, test line break line brea"
  }]

  const [service, setService] = React.useState(0)

  return (
    <main>
      <title>Dr Tasneem's Clinic</title>
      <div className="flex flex-col bg-black text-white p-2">
        <div className="w-full p-4" />
        <img className="fill w-5/6 my-2 sm:w-1/4 m-auto" alt="Hijama Treatment Procedure" src={logo}></img>
        <div className="m-auto w-1/2 my-5 py-4 flex flex-col">
          <h1 className="text-lblue font-serif font-bold text-3xl py-4">We offer holistic healthcare and beauty services</h1>
          <p className="italic">
            At Dr. Tasneem’s Clinic, we combine cosmetology with
            aesthetic services and alternative treatment (Hijama)
            to create a personalised treatment plan that achieves clear skin while
            alleviating common health issues, enhancing your natural beauty.
          </p>
          <div className="w-full py-5" />
          <Link to="/appointment">
          <button className="p-2 my-4 md:w-2/5 mr-3 bg-lblue font-serif italic rounded float-right self-end text-2xl font-bold">Book an Appointment</button>
          </Link>
        </div>
      </div>
      <div className="bg-black">
        <div className="flex flex-col py-4 w-2/3 m-auto">
          <h1 className="emphasize-text text-white font-serif text-3xl">Our Services</h1>
          <div className="py-5" />
          <div className="flex justify-around flex-col md:flex-row " >
            <span  onClick={() => service - 1 < 0 ? setService(serviceData.length - 1) : setService(service - 1)} className="p-4">
              <FontAwesomeIcon className="transition ease-in-out hover:text-black hover:bg-white duration-300 p-2 rounded text-white top-1/2 translate-y-1/2" icon={faArrowLeft} size="lg" />
            </span>
            <div className="">
              <Card heading={serviceData[service].name}
                description={serviceData[service].description} />
            </div>
            <span onClick={() => service + 1 > serviceData.length - 1 ? setService(0) : setService(service + 1)} className="p-4">
              <FontAwesomeIcon className="transition ease-in-out hover:text-black hover:bg-white duration-300 p-2 rounded text-white top-1/2 translate-y-1/2" icon={faArrowRight} size="lg" />
            </span>
          </div>
        </div>
        <div className="flex flex-col w-2/3 m-auto">
          <h1 className="emphasize-text py-5 text-white font-serif text-3xl">Hijama dates for {month[date.getMonth()]}</h1>
          <div className="py-5">
            <HijamaDates />
          </div>
        </div>
        <div>

        </div>
      </div>
    </main>
  )
}

export default IndexPage
