import React from 'react'

export function Card(props){
    return(
        <div className="bg-green text-white rounded p-2 m-2">
            <h1 className='text-center font-bold font-serif'>{props.heading}</h1>
            
        </div>
    )
}