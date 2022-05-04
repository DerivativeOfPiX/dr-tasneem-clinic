import React from 'react'
import { Transition } from 'react-transition-group';

export function Card(props) {
    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };
    return (
        <Transition in timeout={duration}>
            {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <div className="bg-white text-white rounded p-2 m-2 w-full">
                        <h1 className='text-center font-bold font-serif text-2xl text-blue p-2 mt-2'>{props.heading}</h1>
                        <p className='text-black m-auto text-center w-1/2 italic'>{props.description}</p>
                    </div>
                </div>)}
        </Transition>
    )
}