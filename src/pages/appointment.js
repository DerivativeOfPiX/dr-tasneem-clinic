import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function Appointment(props) {

    const [isLoading, setIsLoading] = useState(true)

    return (
        <main>
            <title>Appointment</title>

            <div className="bg-black m-auto flex justify-center m-4 rounded">
                <div className="m-auto w-2/3 text-center p-4 rounded">
                    <h1 className="emphasize-text text-white font-serif text-3xl my-4">Book an Appointment</h1>
                    {
                        isLoading ?
                            <div className="w-full h-full bg-black">
                                <div className="flex justify-center">
                                    <h2 className="text-white text-2xl">Loading...</h2>
                                    <FontAwesomeIcon icon={faSpinner} size='lg' className="text-white animate-spin mx-4 mt-2"  />
                                </div>
                            </div>
                            : null
                    }
                    <iframe src="https://dtc-build.herokuapp.com/index.php" scrolling="no" frameBorder="0" className="w-full my-5" height={window.innerHeight - 10 + "px"}
                        onLoad={() => {
                            setIsLoading(false)
                            console.log("Loaded !")
                        }} />
                </div>
            </div>
        </main>
    )
}