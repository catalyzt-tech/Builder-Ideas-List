"use client";
import Checkbox from "@/src/app/component/Checkbox/Checkbox";
import { newFilter } from "../../Text";
import { CheckBoxStateType } from "../Home";

export function CheckBoxType({
  checkBox,
  handleChangeCheckBox,
}:{
  checkBox: Pick<CheckBoxStateType, "Type">
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
})  {

return (
    <> 
      {newFilter["type"].map((item, i) => (
          <Checkbox
            key={i}
            sizeCheckbox='min-w-[20px] min-h-[20px]'
            label={item}
            value={item}
            checked={checkBox["Type"].includes(item)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Type" as keyof CheckBoxStateType, e.target.value)}
          />
        ))}
    </>
    )
}

export function CheckBoxEffort({
  checkBox,
  handleChangeCheckBox,
}:{
  checkBox: Pick<CheckBoxStateType, "Effort">
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
})  {

return (
    <> 
      {newFilter["effort"].map((item, i) => (
          <Checkbox
           key={i}
           label={item}
           value={item}
           checked={checkBox["Effort"].includes(item)}
           onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Effort" as keyof CheckBoxStateType, e.target.value)}
         />
        ))}
    </>
    )
}

export function CheckBoxSkillset({
  checkBox,
  handleChangeCheckBox,
}:{
  checkBox: Pick<CheckBoxStateType, "SkillSet">
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
})  {

return (
    <> 
      {newFilter["skillset"].options.map((item, i) => (
          <Checkbox
           key={i}
           label={item}
           value={item}
           checked={checkBox["SkillSet"].includes(item)}
           onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("SkillSet" as keyof CheckBoxStateType, e.target.value)}
         />
        ))}
    </>
    )
}


export function CheckBoxCategory({
  checkBox,
  handleChangeCheckBox,
}:{
  checkBox: Pick<CheckBoxStateType, "Category">
  handleChangeCheckBox: (name: keyof CheckBoxStateType, value: string) => void
})  {

return (
    <> 
        {newFilter["category"].map((item, i) => (
            <Checkbox
            key={i}
            label={item.name}
            value={item.id}
            checked={checkBox["Category"].includes(item.id)}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Category" as keyof CheckBoxStateType, e.target.value)} 
            />
        ))}    
        </>
    )
}
