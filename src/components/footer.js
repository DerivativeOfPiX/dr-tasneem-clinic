import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faXmarkSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export function Footer() {
    return (
        <footer className="bg-black">
            <div className="w-2/3 m-auto">
                <h1 className="emphasize-text py-5 text-white font-serif text-3xl">Reach Out to Us</h1>
                <div className="flex p-2">
                    <div className="p-3 flex text-white flex-col">
                        <div className="my-2">
                            <h2 className="font-serif text-xl font-bold underline underline-offset-4">Malir Cantt Clinic</h2>
                            <p className="italic py-2">New AD Mart, Above Agha Khan Lab, Malir Cantt.</p>
                        </div>
                        <div className="my-2">
                            <h2 className="font-serif text-xl font-bold underline underline-offset-4">Clifton Clinic</h2>
                            <p className="italic py-2">The Plaza Mall, Room Number 526, 5th Floor, Doctor's Plaza, 2 Talwar, Clifton</p>
                        </div>
                    </div>
                    <div className="text-white m-auto ">
                        <div className="text-center my-2">
                            <h1 className="font-serif font-bold text-2xl my-2">Contact number</h1>
                            <a className="underline underline-offset-4 text-lg hover:text-lblue" href='tel:+923022301918'>0302-2301918</a>
                        </div>

                    </div>

                </div>
                <div className="my-2">
                    <div className="flex space-x-2 text-lblue justify-end">
                        <a href="https://www.facebook.com/drtasneemsclinic/" target="_blank">
                            <FontAwesomeIcon className="p-2 fa-brand fa-2x hover:text-blue" icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/dr.tasneemsclinic/" target="_blank">
                            <FontAwesomeIcon className="p-2 fa-brand fa-2x hover:text-blue" icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-5/6 m-auto">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14471.906477677618!2d67.1824621!3d24.9328664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9463299906bda39b!2sDr%20Tasneem&#39;s%20Clinic!5e0!3m2!1sen!2s!4v1644911688932!5m2!1sen!2s"
                    width="100%" height="100%" className="m-auto" loading="lazy"></iframe>
            </div>
        </footer>
    )
}