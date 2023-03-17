


export default function Overview(props) {

    return (
        <div className="mx-2 mb-0 pb-96">

            <p className="mt-20 ml-3
            text-3xl font-Inter font-bold text-Dark-text dark:text-Ken">Overview - Today</p>
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-5 mt-2">
                {/* Div1 T1 */}
                <div className="h-32 mx-4 rounded-md shadow-xl                 
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg
                    hover:bg-gray-200 dark:hover:bg-cyan-900  ">
                    {/* pageviews and image */}
                    <div className="flex justify-between items-center mt-6 mx-8">
                        <p className="font-Inter font-bold text-Dark-text
                        dark:text-Blue-text
                        ">{props.overviewTextT1}</p>
                        <div>{props.iconT1}</div>
                    </div>
                    {/* number and precentage up today */}
                    <div className="flex justify-between items-center mt-4 mx-8">
                        <p className="text-4xl font-Inter text-Black-text
                        dark:text-Ken ">{props.numT1}</p>
                        <div className="flex items-center">
                            <div className="mt-4 ">{props.voteIconT1}</div>
                            <p className="ml-1 mt-4 text-green-500">{props.voteNumT1}%</p>
                        </div>
                    </div>
                </div>

                {/* Div T2 */}
                <div className="h-32 mx-4 rounded-md shadow-xl                  
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg
                    hover:bg-gray-200 dark:hover:bg-cyan-900  ">
                    {/* pageviews and image */}
                    <div className="flex justify-between items-center mt-6 mx-8">
                        <p className="font-Inter font-bold text-Dark-text
                        dark:text-Blue-text
                        ">{props.overviewTextT2}</p>
                        <div>{props.iconT2}</div>
                    </div>
                    {/* number and precentage up today */}
                    <div className="flex justify-between items-center mt-4 mx-8">
                        <p className="text-4xl font-Inter text-Black-text
                        dark:text-Ken ">{props.numT2}</p>
                        <div className="flex items-center">
                            <div className="mt-4 ">{props.voteIconT2}</div>
                            <p className="ml-1 mt-4 text-red-500">{props.voteNumT2}%</p>
                        </div>
                    </div>
                </div>

                {/* Div T3 */}
                <div className="h-32 mx-4 rounded-md shadow-xl                 
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg
                    hover:bg-gray-200 dark:hover:bg-cyan-900  ">
                    {/* pageviews and image */}
                    <div className="flex justify-between items-center mt-6 mx-8">
                        <p className="font-Inter font-bold text-Dark-text
                        dark:text-Blue-text
                        ">{props.overviewTextT3}</p>
                        <div>{props.iconT3}</div>
                    </div>
                    {/* number and precentage up today */}
                    <div className="flex justify-between items-center mt-4 mx-8">
                        <p className="text-4xl font-Inter text-Black-text
                        dark:text-Ken ">{props.numT3}</p>
                        <div className="flex items-center">
                            <div className="mt-4 ">{props.voteIconT3}</div>
                            <p className="ml-1 mt-4 text-green-500">{props.voteNumT3}%</p>
                        </div>
                    </div>
                </div>
                
                {/* Div T4 */}
                <div className="h-32 mx-4 rounded-md shadow-xl                
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg
                    hover:bg-gray-200 dark:hover:bg-cyan-900  ">
                    {/* pageviews and image */}
                    <div className="flex justify-between items-center mt-6 mx-8">
                        <p className="font-Inter font-bold text-Dark-text
                        dark:text-Blue-text
                        ">{props.overviewTextT4}</p>
                        <div>{props.iconT4}</div>
                    </div>
                    {/* number and precentage up today */}
                    <div className="flex justify-between items-center mt-4 mx-8">
                        <p className="text-4xl font-Inter text-Black-text
                        dark:text-Ken ">{props.numT4}</p>
                        <div className="flex items-center">
                            <div className="mt-4 ">{props.voteIconT4}</div>
                            <p className="ml-1 mt-4 text-green-500">{props.voteNumT4}%</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Bottom row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-5 mt-6 my-6">
                {/* Div B1 */}
                <div className="h-32 mx-4 rounded-md shadow-xl                
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg 
                    hover:bg-gray-200 dark:hover:bg-cyan-900 ">
                    {/* pageviews and image */}
                    <div className="flex justify-between items-center mt-6 mx-8">
                        <p className="font-Inter font-bold text-Dark-text
                        dark:text-Blue-text
                        ">{props.overviewTextB1}</p>
                        <div>{props.iconB1}</div>
                    </div>
                    {/* number and precentage up today */}
                    <div className="flex justify-between items-center mt-4 mx-8">
                        <p className="text-4xl font-Inter text-Black-text
                        dark:text-Ken ">{props.numB1}</p>
                        <div className="flex items-center">
                            <div className="mt-4 ">{props.voteIconB1}</div>
                            <p className="ml-1 mt-4 text-green-500">{props.voteNumB1}%</p>
                        </div>
                    </div>
                </div>
                
                 {/* DivB22 */}
                 <div className="h-32 mx-4 rounded-md shadow-xl                 
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg 
                    hover:bg-gray-200 dark:hover:bg-cyan-900 ">
                    {/* pageviews and image */}
                    <div className="flex justify-between items-center mt-6 mx-8">
                        <p className="font-Inter font-bold text-Dark-text
                        dark:text-Blue-text
                        ">{props.overviewTextB2}</p>
                        <div>{props.iconB2}</div>
                    </div>
                    {/* number and precentage up today */}
                    <div className="flex justify-between items-center mt-4 mx-8">
                        <p className="text-4xl font-Inter text-Black-text
                        dark:text-Ken ">{props.numB2}</p>
                        <div className="flex items-center">
                            <div className="mt-4 ">{props.voteIconB2}</div>
                            <p className="ml-1 mt-4 text-green-500">{props.voteNumB2}%</p>
                        </div>
                    </div>
                </div>

                {/* Div B3 */}
                <div className="h-32 mx-4 rounded-md shadow-xl            
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg 
                    hover:bg-gray-200 dark:hover:bg-cyan-900 ">
                    {/* pageviews and image */}
                    <div className="flex justify-between items-center mt-6 mx-8">
                        <p className="font-Inter font-bold text-Dark-text
                        dark:text-Blue-text
                        ">{props.overviewTextB3}</p>
                        <div>{props.iconB3}</div>
                    </div>
                    {/* number and precentage up today */}
                    <div className="flex justify-between items-center mt-4 mx-8">
                        <p className="text-4xl font-Inter text-Black-text
                        dark:text-Ken ">{props.numB3}</p>
                        <div className="flex items-center">
                            <div className="mt-4 ">{props.voteIconB3}</div>
                            <p className="ml-1 mt-4 text-green-500">{props.voteNumB3}%</p>
                        </div>
                    </div>
                </div>

                {/* Div B4 */}
                <div className="h-32 mx-4 rounded-md shadow-xl               
                    bg-Pale-card-bg 
                    dark:bg-Blue-card-bg 
                    hover:bg-gray-200 dark:hover:bg-cyan-900 ">
                    {/* pageviews and image */}
                    <div className="flex justify-between items-center mt-6 mx-8">
                        <p className="font-Inter font-bold text-Dark-text
                        dark:text-Blue-text
                        ">{props.overviewTextB4}</p>
                        <div>{props.iconB4}</div>
                    </div>
                    {/* number and precentage up today */}
                    <div className="flex justify-between items-center mt-4 mx-8">
                        <p className="text-4xl font-Inter text-Black-text
                        dark:text-Ken ">{props.numB4}</p>
                        <div className="flex items-center">
                            <div className="mt-4 ">{props.voteIconB4}</div>
                            <p className="ml-1 mt-4 text-green-500">{props.voteNumB4}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}