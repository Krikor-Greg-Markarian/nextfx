import React from 'react'
import cn from 'classnames'
import {FaCheck} from "react-icons/fa";

function RightPlan() {
    return (
        <div className = {cn("bg-blue-200 w-3/12")}>
            <div className = {cn("p-4")}>
                <p className = {cn("text-sm")}>Personal</p>
                <p className = {cn("text-sm")}>Good Value</p>
                <p className = {cn("font-bold")}>$39.99  <span className= {cn("text-sm")}>/month</span> </p>
                <div>
                <FaCheck  className = {cn("text-sm inline")}/>
                <p className = {cn("inline pl-2 text-sm")}>250Mbps</p>
                </div>
                <div>
                <FaCheck  className = {cn("text-sm inline")}/>
                <p className = {cn("inline pl-2 text-sm")}>400GB included data</p>
                </div>
                <div>
                <FaCheck  className = {cn("text-sm inline")}/>
                <p className = {cn("inline pl-2 text-sm")}>Premium productivity features and simple, secure file sharing</p>
                </div>
                <div className = {cn("")}>
                    <button className = {cn("bg-blue-800 p-2  rounded text-white")}>Order now</button>
                </div>
            </div>
        </div>
    )
}

export default RightPlan
