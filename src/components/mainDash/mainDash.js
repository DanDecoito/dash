

export default function MainDash(props) {

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5  mt-12 mx-2">

                {/* Div1 */}
                <div className="mx-4  h-60 flex flex-col items-center border-blue-500 border-t-4 rounded-md shadow-xl
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg dark:text-Ken 
                    hover:bg-gray-200 dark:hover:bg-cyan-900 ">
                    {/* Image and name display */}
                    <div className="flex items-center mt-8">
                        <div>{props.icon1}</div>
                        <p className="ml-2 mt-1
                            text-center font-Inter text-xs font-bold text-Dark-text 
                            dark:text-Blue-text"
                        >{props.username1}</p>
                    </div>
                    {/* Number of followers/subscribers */}
                    <p className="mt-7
                    text-6xl font-Inter font-extrabold">{props.bigNum1}</p>
                    <p className="
                        font-Inter text-Dark-text
                        dark:text-Blue-text text-xl mt-1">F o l l o w e r s</p>
                    {/* Number of new followers for today*/}
                    <div className="flex items-center mt-4">
                        <div>{props.voteIcon1}</div>
                        <p className="ml-2
                        font-Inter text-green-500">{props.voteNum1} Today</p>
                    </div>
                </div>

                {/* Div2 */}
                <div className="mx-4 w-10-12 h-60 flex flex-col items-center border-blue-300 border-t-4 rounded-md shadow-xl
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg dark:text-Ken 
                    hover:bg-gray-200 dark:hover:bg-cyan-900 ">
                    {/* Image and name display */}
                    <div className="flex items-center mt-8">
                        <div>{props.icon2}</div>
                        <p className="ml-2 mt-1
                            text-center font-Inter text-xs font-bold text-Dark-text 
                            dark:text-Blue-text"
                        >{props.username2}</p>
                    </div>
                    {/* Number of followers/subscribers */}
                    <p className="mt-7
                    text-6xl font-Inter font-extrabold">{props.bigNum2}</p>
                    <p className="
                        font-Inter text-Dark-text
                        dark:text-Blue-text text-xl mt-1">F o l l o w e r s</p>
                    {/* Number of new followers for today*/}
                    <div className="flex items-center mt-4">
                        <div>{props.voteIcon2}</div>
                        <p className="ml-2
                        font-Inter text-green-500">{props.voteNum2} Today</p>
                    </div>
                </div>

                {/* Div3 */}
                <div className="mx-4 w-10-12 h-60 flex flex-col items-center instaBorder border-t-4 rounded-md shadow-xl
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg dark:text-Ken 
                    hover:bg-gray-200 dark:hover:bg-cyan-900 ">
                    {/* Image and name display */}
                    <div className="flex items-center mt-8">
                        <div>{props.icon3}</div>
                        <p className="ml-2 mt-1
                            text-center font-Inter text-xs font-bold text-Dark-text 
                            dark:text-Blue-text"
                        >{props.username3}</p>
                    </div>
                    {/* Number of followers/subscribers */}
                    <p className="mt-7
                    text-6xl font-Inter font-extrabold">{props.bigNum3}</p>
                    <p className="
                        font-Inter text-Dark-text
                        dark:text-Blue-text text-xl mt-1">F o l l o w e r s</p>
                    {/* Number of new followers for today*/}
                    <div className="flex items-center mt-4">
                        <div>{props.voteIcon3}</div>
                        <p className="ml-2
                        font-Inter text-green-500">{props.voteNum3} Today</p>
                    </div>
                </div>

                {/* Div4 */}
                <div className="mx-4 w-10-12 h-60 flex flex-col items-center border-red-700 border-t-4 rounded-md shadow-xl
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg dark:text-Ken 
                    hover:bg-gray-200 dark:hover:bg-cyan-900 ">
                    {/* Image and name display */}
                    <div className="flex items-center mt-8">
                        <div>{props.icon4}</div>
                        <p className="ml-2 mt-1
                            text-center font-Inter text-xs font-bold text-Dark-text 
                            dark:text-Blue-text"
                        >{props.username4}</p>
                    </div>
                    {/* Number of followers/subscribers */}
                    <p className="mt-7
                    text-6xl font-Inter font-extrabold">{props.bigNum4}</p>
                    <p className="
                        font-Inter text-Dark-text
                        dark:text-Blue-text text-xl mt-1">F o l l o w e r s</p>
                    {/* Number of new followers for today*/}
                    <div className="flex items-center mt-4">
                        <div>{props.voteIcon4}</div>
                        <p className="ml-2
                        font-Inter text-red-500">{props.voteNum4} Today</p>
                    </div>
                </div>
            </div>
        </>
    )

}