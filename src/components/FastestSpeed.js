import React from 'react'
import cn from 'classnames'

function FastestSpeed() {
    return (
        <div>
            <div>
                <p className = {cn("text-sm text-blue-700")}>unlimited possible</p>
                <p className = {cn("font-bold")}>Get your fastest speed</p>
                <div className = {cn("earth  w-full")}></div>
                <div className = "flex justify-center items-center">
                <button className = {cn("text-white text-sm bg-blue-800 p-2 rounded  ")}>check coverage map</button>
                </div>
            </div>
        </div>
    )
}

export default FastestSpeed
