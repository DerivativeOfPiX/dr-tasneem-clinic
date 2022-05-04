import React, { useEffect, useState } from "react"

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

    useEffect(() => {
        fetch(`https://api.aladhan.com/v1/gToHCalendar/${TODAY.getMonth() + 1}/${TODAY.getFullYear()}`).then(res => {
            return (res.json())
        }).then(data => setDates(hijama_dates(data.data))).catch((err) => setDates(["Error fetching dates."]))
    }, [])


    return (
        <div className="flex flex-col md:justify-around space-y-4 items-center text-center md:flex-row">
            <div className="w-full bg-white text-white rounded md:w-1/3 mx-4 p-4 flex flex-col content-center">
                <h2 className="text-blue font-bold text-xl p-2">17th</h2>
                <h3 className="italic text-black">{dates[0]}</h3>
            </div>
            <div className="w-full bg-white text-white rounded md:w-1/3 mx-4 p-4 flex flex-col content-center">
                <h2 className="text-blue font-bold text-xl p-2">19th</h2>
                <h3 className="italic text-black">{dates[1]}</h3>
            </div>
            <div className="w-full bg-white text-white rounded md:w-1/3 mx-4 p-4 flex flex-col content-center">
                <h2 className="text-blue font-bold text-xl p-2">21st</h2>
                <h3 className="italic text-black">{dates[2]}</h3>
            </div>
        </div>
    )
}