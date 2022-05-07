import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import IframeResizer from "iframe-resizer-react"

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
                                    <FontAwesomeIcon icon={faSpinner} size='lg' className="text-white animate-spin mx-4 mt-2" />
                                </div>
                            </div>
                            : null
                    }
                    {/*Remember that you can manipulate the url to prefill some fields ... */}
                    <IframeResizer src="https://dtc-build.herokuapp.com/index.php" className="w-full my-5 h-screen"
                        onLoad={() => {
                            setIsLoading(false)
                        }} 
                        />
                </div>
            </div>
        </main>
    )
}