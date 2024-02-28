"use client"
import Drawer from "@/src/app/component/Drawer/Drawer"
import {useState} from "react"
export default function ScrollSpy({

}:{
    
})  {

    const [state, setState] = useState(false)

    function handleClose() {
        setState(prev => !prev)
    }

return (

    <> 
      <div className='hidden lg:block bg-white p-4 rounded-md shadow-md items-center w-56  '>
            <div className='mx-8 items-center'>
            <div className='text-base font-bold my-4'>
              ON THIS PAGE
            </div>
            <div className='font-medium my-4 text-gray-500'>
              Overview
            </div>
            <div className='font-medium my-4 text-gray-500'>
              Specification
            </div>
            <div className='font-medium my-4 text-gray-500' onClick={handleClose}>
              Deliverables
            </div>
            </div>
          </div>
        
    <Drawer
    open={state}
    anchor="right"
    >
        <h6>test</h6>
    </Drawer>
    </>

    )

}
