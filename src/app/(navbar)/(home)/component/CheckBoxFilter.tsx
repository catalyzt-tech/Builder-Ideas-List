"use client"

import Checkbox from "@/src/app/component/Checkbox/Checkbox"
import { CheckBoxStateType } from "./Home"

export const filterItem = {
    "Type": ["Project Idea", "Foundation Mission Request", "Delegate Mission Request"],
    "Effort": ["Small", "Medium", "Large"],
    "Label": ["OP Stack", "Attestations", "Chain Infra", "Consumer Apps", "Smart Contracts", "DeFi", "Developer Tooling", "Documentation", "Gaming", "Governance", "NFTs", "Protocol", "Wallets", "RetroPGF"],
    "Category": ["S5: Intent 1 - Progress towards technical decentralization", "S5: Intent 2 - Grow the Superchain", "S5: Intent 3 - Improve the Consumer Experience", "S5: Intent 4 - Improve governance accessibility", "Ecosystem Idea", "Draft Idea", "Mad Science Project Idea", "Contribution Opportunity"],
}

export default function CheckBoxFilter({
    checkBox,
    handleChangeCheckBox
}:{
    checkBox: CheckBoxStateType
    handleChangeCheckBox:(name: keyof CheckBoxStateType, value: string) => void
})  {




return (

      <div className="flex flex-col gap-4 col-span-1 border min-w-60 max-w-60 h-fit rounded-lg p-2 animate-slideleft sticky top-24">
        <div className="flex flex-col gap-1  ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">Type</h6>
            {filterItem["Type"].map((item, i) => (
                <Checkbox
                key={i}
                label={item}
                value={item}
                checked={checkBox["Type"].includes(item)}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Type" as keyof CheckBoxStateType, e.target.value)}
                />
            ))}
        </div>
        
        <hr className='h-[0.0625rem] bg-gray-200'/>

        <div className="flex flex-col gap-1  ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">Category</h6>
            {filterItem["Category"].map((item, i) => (
                <Checkbox
                key={i}
                label={item}
                value={item}
                checked={checkBox["Category"].includes(item)}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Category" as keyof CheckBoxStateType, e.target.value)} 
                />
            ))}
        </div>
        <hr className='h-[0.0625rem] bg-gray-200'/>

        <div className="flex flex-col gap-1  ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">Effort</h6>
            {filterItem["Effort"].map((item, i) => (
                <Checkbox
                key={i}
                label={item}
                value={item}
                checked={checkBox["Effort"].includes(item)}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Effort" as keyof CheckBoxStateType, e.target.value)}
                />
            ))}
        </div>
        <hr className='h-[0.0625rem] bg-gray-200'/>
       
        <div className="flex flex-col gap-1  ">
            <h6 className="text-xs font-medium text-gray-400 mb-2">Label</h6>
            {filterItem["Label"].map((item, i) => (
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
