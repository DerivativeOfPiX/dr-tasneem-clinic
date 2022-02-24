import React, { useState } from "react"

export default function HijamaDates() {

    const TODAY = new Date()
    const HIJRI_DATES = ["17", "19", "21"]

    const [dates, setDates] = useState([])

    const hijama_dates = (cal) => {
        let hj = []
        cal.map((gdate) => {
            if (HIJRI_DATES.includes(gdate.hijri.day)) {
                hj.push(gdate.gregorian.date)
            }
        })
        return hj
    }

    fetch(`https://api.aladhan.com/v1/gToHCalendar/${TODAY.getMonth() + 1}/${TODAY.getFullYear()}`).then(res => {
        return (res.json())
    }).then(data => setDates(hijama_dates(data.data)))

    return (
        <div className="flex flex-col justify-around text-center md:flex-row">
            <div className="bg-blue text-white p-3 rounded">
                <h2>17th</h2>
                <h3>{dates[0]}</h3>
            </div>
            <div className="bg-blue text-white p-3 rounded">
                <h2>19th</h2>
                <h3>{dates[1]}</h3>
            </div>
            <div className="bg-blue text-white p-3 rounded">
                <h2>21st</h2>
                <h3>{dates[2]}</h3>
            </div>
        </div>
    )
}