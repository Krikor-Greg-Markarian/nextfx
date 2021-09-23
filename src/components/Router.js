import React from 'react'
import cn from 'classnames'

function Router() {
    return (
        <div>
            <div className = {cn("w-3/12")}>
                <p className = {cn("text-sm")}>60%</p>
                <p className = {cn("font-bold text-sm pt-8")}>Whole Home WIFI</p>
                <p className = {cn("font-bold text-sm text-gray-500 pt-1")}>Delivering fast, reliable WIFI throughout your home.</p>
            </div>
        </div>
    )
}

export default Router
