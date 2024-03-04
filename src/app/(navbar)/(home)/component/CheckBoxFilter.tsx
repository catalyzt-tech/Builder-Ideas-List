"use client"

import Checkbox from "@/src/app/component/Checkbox/Checkbox"
import { CheckBoxStateType } from "./Home"
import { newFilter } from "../Text"
import { CheckBoxCategory, CheckBoxEffort, CheckBoxSkillset, CheckBoxType } from "./Filter/CheckBox"


export default function CheckBoxFilter({
    checkBox,
    handleChangeCheckBox,
    handleClearFilter
}:{
    checkBox: CheckBoxStateType;
    handleChangeCheckBox:(name: keyof CheckBoxStateType, value: string) => void;
    handleClearFilter: () => void

})  {




return (

      <div className="hidden lg:flex flex-col gap-4 col-span-1 border min-w-60 max-w-60 h-fit rounded-lg p-2 animate-slideleft z-10">
        <div className="flex items-center justify-between gap-1 ">
            <h6 className="text-sm font-bold text-gray-900 ">Filter</h6>
            <button 
            onClick={handleClearFilter}
            className="underline">
                <h6 className="text-xs font-normal text-gray-900 ">Clear Filters</h6>
            </button>
        </div>
        <hr className='h-[0.0625rem] bg-gray-200'/>



        {newFilter["type"].length > 1 && 
           <>
            <div className="flex flex-col gap-1  ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">Type</h6>
            <CheckBoxType
                checkBox={checkBox}
                handleChangeCheckBox={handleChangeCheckBox}
            />
        </div>
        <hr className='h-[0.0625rem] bg-gray-200'/>
           </>
        }

        <div className="flex flex-col gap-1 ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">Category</h6>
            <CheckBoxCategory
                checkBox={checkBox}
                handleChangeCheckBox={handleChangeCheckBox}
            />
        </div>
        <hr className='h-[0.0625rem] bg-gray-200'/>


        <div className="flex flex-col gap-1  ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">Effort</h6>
            <CheckBoxEffort
            checkBox={checkBox}
            handleChangeCheckBox={handleChangeCheckBox}
            />
        </div>
        <hr className='h-[0.0625rem] bg-gray-200'/>
       
        <div className="flex flex-col gap-1  ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">SkillSet</h6>
            <CheckBoxSkillset
            checkBox={checkBox}
            handleChangeCheckBox={handleChangeCheckBox}
            />
        </div>
        <hr className='h-[0.0625rem] bg-gray-200'/>
       
        <div className="flex flex-col gap-1  ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">Label</h6>
            {newFilter["labels"].map((item, i) => (
                <Checkbox
                key={i}
                label={item}
                value={item}
                checked={checkBox["Label"].includes(item)}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Label" as keyof CheckBoxStateType, e.target.value)} 
                />
            ))}
        </div>
        
     
    </div>

    )

}
