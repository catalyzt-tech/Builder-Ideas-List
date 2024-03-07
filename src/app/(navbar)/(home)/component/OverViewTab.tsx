"use client"
import { LoadMarkDownType } from "./Home"

export default function OverViewTab({
    overViewData
}:{
    overViewData: LoadMarkDownType
})  {

return (

    <div className="animate-slideup"> 
        <div className="render" dangerouslySetInnerHTML={{__html: overViewData.contentHtml}} />
    </div>

    )

}
