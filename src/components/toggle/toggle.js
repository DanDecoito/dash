import { useState, useEffect } from "react";

export default function Toggle() {
    const [enabled, setEnabled] = useState(false);
    
    useEffect(() => {
        if (enabled == true)
        {
            document.documentElement.classList.add("dark")
        }
        else
        {
            document.documentElement.classList.remove("dark")
        }
    });
    
    {console.log(enabled)}
    return (
        <div className="">
            <div className="flex">
                <label class="inline-flex relative items-center ml-2 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-400 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-blue-500 to-green-400"
                    ></div>
                    {/* <span className="ml-2 text-sm font-medium text-Ken dark:text-Blue-text">
                        ON
                    </span> */}
                </label>
            </div>
        </div>
    );
}