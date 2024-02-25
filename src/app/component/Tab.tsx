"use client"
import GridIcon from "@/public/icon/GridIcon"
import ListIcon from "@/public/icon/ListIcon"
import { useState } from "react"
import { TabStateType } from "./Home"

export default function TabPage({

}:{
    
})  {
    const [state, setState] = useState<TabStateType>({
        index: 0,
        view: "g",
        currentBadge: 0,
    })

    function handleChangeIndex(index:number) {
        setState(prev => ({...prev, index:index}))
    }

    const tab = [
        {
            text:"Project",
            index: 0,
        },
        {
            text:"Overview",
            index: 1,
        },
        {
            text:"Builder Guide",
            index: 2,
        },
       
    ]

    const badge = [
        {
            text:"All",
            index: 0,
        },
        {
            text:"OP Stack",
            index: 1,
        },
        {
            text:"Collective Governance",
            index: 2,
        },
        {
            text:"Developer Ecosystem",
            index: 3,
        },
        {
            text:"End User Experience Adoption",
            index: 4,
        },
    ]


    console.log(state.currentBadge)

return (

    <div className=" mt-[2rem] ">
        <div className="flex justify-between gap-4 border-b">

            <div className="flex gap-8 ">
                {tab.map((item, i) => (
                    <div 
                    key={i}
                    onClick={() => handleChangeIndex(i)}
                    className={`${item.index === state.index ? "text-slate-900" : "text-slate-500"} hover:text-primaryRed text-lg font-normal cursor-pointer flex items-center gap-2 px-4 py-1.5 relative`}
                    >
                        {item.index === state.index && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primaryRed animate-slideup"></div>}
                        <h6>{item.text}</h6>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
                {/* active #161616 ::: inactive #94A3B8 */}
                <div className="" onClick={() => setState(prev => ({...prev, view:"g"}))}>
                    <GridIcon fill={state.view === "g" ? "#161616" : "#94A3B8"} className="cursor-pointer block"/>
                </div>
                <div className="" onClick={() => setState(prev => ({...prev, view:"l"}))}>
                    <ListIcon fill={state.view === "l" ? "#161616" : "#94A3B8"} className="cursor-pointer block"/>
                </div>
            </div>

        </div>

        <div className="flex flex-wrap gap-2 mt-4 mb-[2.5rem]">
            {badge.map((item, i) => (
                <div 
                key={i}
                className={` 
                hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                border rounded-full px-2 py-1 cursor-pointer transition-colors 
                ${state.currentBadge === item.index ?"bg-secondaryRed text-primaryRed border-secondaryRed" : "text-slate-900 border"}
                `}
                onClick={() => setState(prev => ({...prev, currentBadge: item.index}))}
                >
                    <p className=" text-sm font-thin">{item.text}</p>
                </div>
            ))}
        </div>

    </div>


    )

}