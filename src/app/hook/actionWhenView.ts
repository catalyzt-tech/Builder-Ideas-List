"use client";
import { useEffect } from "react";

export function ActionIntoView(elemId:string, animation:string, threshold:number = 0.1, rootMargin:string = "0px") {
  useEffect(() => {
    let elem = document.querySelector(elemId)
    if(elem) {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                elem?.classList.add(animation)    
                elem?.classList.replace("opacity-0", "opacity-100")
                observer.unobserve(elem!)
            }
        }, {
            threshold:threshold,
            rootMargin:rootMargin
        });
        observer.observe(elem!);
    }
}, []);

}