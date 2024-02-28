"use client"
import GridIcon from "@/public/icon/GridIcon"
import ListIcon from "@/public/icon/ListIcon"
import { CheckBoxStateType, TabStateType } from "./Home"
import SearchIcon from "@/public/icon/SearchIcon"
import SortIcon from "@/public/icon/SortIcon"
import SettingIcon from "@/public/icon/SettingsIcon"
import Input from "../../../component/Input"
import { HomeContextType, useHome } from "../Context"
import { Menu, Transition } from '@headlessui/react'
import FilterDropdown from "./FilterDropdown"
import { filterItem } from "./CheckBoxFilter"
export default function TabPage({
    state,
    setState,
    checkBox,
    handleChangeCheckBox,
    handleClearFilter
}:{
    state:TabStateType,
    setState:React.Dispatch<React.SetStateAction<TabStateType>>,
    checkBox: CheckBoxStateType
    setCheckBox: React.Dispatch<React.SetStateAction<CheckBoxStateType>>
    handleChangeCheckBox:(name: keyof CheckBoxStateType, value: string) => void
    handleClearFilter: () => void
})  {
    
    function handleChangeIndex(index:number) {
        setState(prev => ({...prev, index:index}))
    }


    const {search, handleSearchChange}:HomeContextType = useHome?.()!;

    const tab = [
        {
            text:"Project",
            index: 0,
        },
        {
            text:"Overview",
            index: 1,
        },
    ]

  


return (

    <div className=" mt-[2rem] flex flex-col gap-4 ">
        <div className="flex justify-between gap-4 border-b">
            <div className="flex gap-8 ">
                {tab.map((item, i) => (
                    <div 
                    key={i}
                    onClick={() => handleChangeIndex(i)}
                    className={`${item.index === state.index ? "text-slate-900" : "text-slate-500"} hover:text-primaryRed  cursor-pointer flex items-center gap-2 px-4 py-1.5 relative`}
                    >
                        {item.index === state.index && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primaryRed animate-slideup"></div>}
                        <h6 className="font-rubik text-lg font-normal">{item.text}</h6>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

            <div className=""> 
                <Input
                Icon={<SearchIcon/>}
                value={search}
                onChange={handleSearchChange}
                className="border placeholder-slate-500 bg-white text-slate-500 focus:ring w-full px-1 py-1.5 rounded-full "
                placeholder="Search Project"
                />
            </div>


            {/*             
                ░█▀▀▀█ ░█▀▀▀█ ░█▀▀█ ▀▀█▀▀ 　 ░█▀▀█ ▀▀█▀▀ ░█▄─░█ 
                ─▀▀▀▄▄ ░█──░█ ░█▄▄▀ ─░█── 　 ░█▀▀▄ ─░█── ░█░█░█ 
                ░█▄▄▄█ ░█▄▄▄█ ░█─░█ ─░█── 　 ░█▄▄█ ─░█── ░█──▀█
            */}

            <div className="flex justify-end items-center gap-3 flex-wrap">
                  
                    <FilterDropdown
                    setState={setState}
                    />

      
                        {/* active #161616 ::: inactive #94A3B8 */}
                    <div className="flex gap-2 border p-1.5  rounded-full h-10">
                            <div className={`px-1 ${state.view === "g" && "bg-gray-100 rounded-tl-xl rounded-bl-xl rounded-br-sm rounded-tr-sm"}`} onClick={() => setState(prev => ({...prev, view:"g"}))}>
                                <GridIcon fill={state.view === "g" ? "#161616" : "#94A3B8"} className="cursor-pointer block"/>
                            </div>

                            <div className="border w-[0.0625rem] border-gray-200"></div>

                            <div className={`px-1 ${state.view === "l" && "bg-gray-100 rounded-tl-sm rounded-bl-sm rounded-br-xl rounded-tr-xl"}`} onClick={() => setState(prev => ({...prev, view:"l"}))}>
                                <ListIcon fill={state.view === "l" ? "#161616" : "#94A3B8"} className="cursor-pointer block"/>
                            </div>
                    </div>
            </div>
        </div>


            {/* 
                    ░█▀▀▀ ▀█▀ ░█─── ▀▀█▀▀ ░█▀▀▀ ░█▀▀█ 　 ░█▀▀█ ▀▀█▀▀ ░█▄─░█ 
                    ░█▀▀▀ ░█─ ░█─── ─░█── ░█▀▀▀ ░█▄▄▀ 　 ░█▀▀▄ ─░█── ░█░█░█ 
                    ░█─── ▄█▄ ░█▄▄█ ─░█── ░█▄▄▄ ░█─░█ 　 ░█▄▄█ ─░█── ░█──▀█
            */}
             {/* overflow-x-auto scrollbar-small scrollbar-thumb pb-2 */}
            <div className="flex gap-2 items-center flex-wrap">
                   
                    <div 
                    onClick={() => setState(prev => ({...prev, filter:!prev.filter}))}
                    className={`flex h-10 items-center gap-2 border  rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 ${state.filter && "bg-gray-50"}`}>
                        <SettingIcon className=""/>
                    <h6 className="text-base font-normal text-gray-600">Filters</h6>
                    </div>

                    <div className="border w-[0.0625rem] h-[1.625rem] border-gray-200"></div>


                    <div 
                    className={` 
                    h-10
                    hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                    border rounded-full px-3 py-2 cursor-pointer transition-colors self-center shrink-0
                    ${Object.keys(checkBox).every(key => checkBox[key as keyof CheckBoxStateType].length === 0) ? "bg-secondaryRed text-primaryRed border-secondaryRed" : "text-slate-900 border"}
                    `}
                    onClick={handleClearFilter}
                    >
                        <p className=" text-sm font-normal ">All</p>
                    </div>

                {filterItem["Type"].map((item, i) => (
                    <div 
                    key={i}
                    className={` 
                    h-10
                    hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                    border rounded-full px-3 py-2 cursor-pointer transition-colors self-center shrink-0
                    ${checkBox.Type.some((elem) => elem === item) ?"bg-secondaryRed text-primaryRed border-secondaryRed" : "text-slate-900 border"}
                    `}
                    onClick={() => {
                        handleChangeCheckBox("Type" as keyof CheckBoxStateType, item)
                    }}
                    >
                        <p className=" text-sm font-normal ">{item}</p>
                    </div>
                ))}
            </div>

    </div>


    )

}