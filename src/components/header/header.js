import { useState } from "react";
import Toggle from "../toggle/toggle";


export default function DashHeader(props) {


    return (
        <>
            <div className="
                grid grid-cols-1
                mx-7 pt-8
                font-Inter
                bg-Ken
                dark:bg-very-dark-blue
                lg:justify">
                <div>
                    <p className="text-xl font-bold
                        text-Black-text
                        dark:text-Ken 
                        lg:text-3xl
                        

                    ">Social media DashBoard</p>
                    <p className="
                        font-bold text-Dark-text text-sm lg:
                         dark:text-Blue-text ">Total Followers: {props.totalFollowers}</p>
                </div>

                <div className="h-px bg-Dark-text my-4 lg:hidden"></div>

                <div className="flex justify-between ">
                    <p className="
                        font-bold text-Dark-text
                        dark:text-Blue-text
                        
                    ">Dark Mode</p>
                   <div className="">
                    <Toggle />
                   </div>
                    
                </div>




            </div>

        </>
    )
}