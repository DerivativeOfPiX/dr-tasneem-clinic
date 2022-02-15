import React from "react"

export function Footer() {
    return (
        <footer>
            <div className="bg-blue">
                <h1 className="emphasize-text font-serif text-white">Reach Out to Us</h1>
                <div className="flex text-white">
                    <div>
                        <h2 className="font-serif font-bold">Malir Cantt Clinic</h2>
                        <p>New AD Mart, Above Agha Khan Lab, Malir Cantt.</p>
                        <h2 className="font-serif font-bold">Clifton Clinic</h2>
                        <p>The Plaza Mall, Room Number 526, 5th Floor, Doctor's Plaza, 2 Talwar, Clifton</p>
                    </div>
                    <div>
                        <h1 className="font-serif font-bold">Contact number</h1>
                        <a className="text-underline" href='tel:+923022301918'>0302-2301918</a>
                    </div>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14471.906477677618!2d67.1824621!3d24.9328664!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9463299906bda39b!2sDr%20Tasneem&#39;s%20Clinic!5e0!3m2!1sen!2s!4v1644911688932!5m2!1sen!2s" 
                    width="100%0" height="100%" style={{ border: 0 }} className="m-auto" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </footer>
    )
}