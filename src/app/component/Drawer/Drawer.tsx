import React from 'react'
import "./drawer.css"
interface DrawerProps {
    children:React.ReactNode;
    open:boolean;
    anchor:"top" | "right" | "bottom" | "left";
}

const Drawer: React.FC<Partial<DrawerProps & {open:boolean,anchor:"top" | "right" | "bottom" | "left"}>> = (props) => {
    
    const {children, open, anchor} = props;
    
    const handleAnchor = () => {
        // if(anchor === "top") {
        //     if(open) {
        //         document.getElementById("sidenav-top")?.classList.add("anchor-top");
        //         return "";
        //     }
        //     else if(!open){
        //         document.getElementById("sidenav-top")?.classList.remove("anchor-top");
        //         return "";
        //     }
        // }   
        // else if(anchor === "right") {
        //     if(open) {
        //         document.getElementById("sidenav-right")?.classList.add("anchor-right");
        //         return "";
        //     }
        //     else if(!open){
        //         console.log("CORRECT CONDITION RUNNING")
        //         document.getElementById("sidenav-right")?.classList.remove("anchor-right");
        //         return "";
        //     }
        // }
        // else if(anchor === "bottom") {
        //     if(open) {
        //         document.getElementById("sidenav-bottom")?.classList.add("anchor-bottom");
        //         return "";
        //     }
        //     else if(!open){
        //         document.getElementById("sidenav-bottom")?.classList.remove("anchor-bottom");
        //         return "";
        //     }
        // }
        // //left
        
        // else {
        //     if(open) {
        //         document.getElementById("sidenav-left")?.classList.add("anchor-left")
        //     }
        //     else if(!open){
        //         document.getElementById("sidenav-left")?.classList.remove("anchor-left")
        //     }

        // }
    }

    return (
    <>
    {anchor === "top" ? <div id="sidenav-top" 
    className={`w-full h-[12rem] ${handleAnchor()} text-white text-center fixed bg-black overflow-x-hidden pt-[1rem] lg:pt-[1.5rem] top-[-12rem] left-0`} 
    style={{transitionDuration:"0.5s",transition:"0.5s top"}}  >
        {children}
   </div> : ""}

    {anchor === "right" ? <div id="sidenav-right" 
    className={`w-[15.625rem] h-full ${handleAnchor()} text-white text-center fixed bg-black overflow-x-hidden pt-[1rem] lg:pt-[1.5rem] right-[-15.625rem] top-0`} 
    style={{transitionDuration:"0.5s",transition:"0.5s right"}}  >
        {children}
   </div> : ""}

    {anchor === "bottom" ? <div id="sidenav-bottom" 
    className={`w-full h-[12rem] ${handleAnchor()} text-white text-center fixed bg-black overflow-x-hidden pt-[1rem] lg:pt-[1.5rem] bottom-[-12rem] left-0`} 
    style={{transitionDuration:"0.5s",transition:"0.5s bottom"}}  >
        {children}
   </div> : ""}

   {anchor === "left" ? <div id="sidenav-left" 
    className={`w-[15.625rem] h-full ${handleAnchor()} text-white text-center fixed bg-black overflow-x-hidden pt-[1rem] lg:pt-[1.5rem] left-[-15.625rem] top-0`} 
    style={{transitionDuration:"0.5s",transition:"0.5s left"}}  >
        {children}
   </div> : ""}


    </>
    )
}

export default Drawer;