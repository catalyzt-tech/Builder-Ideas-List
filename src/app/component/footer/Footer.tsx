"use client"
import Heart from "@/public/icon/Heart"
import Lightning from "@/public/icon/Lightning"
import GitHubIcon from "@/public/icon/github-mark"
import { useEffect } from "react"

const Footer = () => {


    useEffect(() => {
        let elem = document.querySelector("#footer")
        if(elem) {
            const observer = new IntersectionObserver(([entry]) => {
                if(entry.isIntersecting) {
                    elem?.classList.add("animate-slowfade")    
                    elem?.classList.replace("opacity-0", "opacity-100")
                    observer.unobserve(elem!)
                }
            }, {
                threshold:0.1,
                rootMargin:"0px"
            });
            observer.observe(elem!);
        }
    }, []);

    return (
        <>
            <footer
                id="footer"
                className=" w-full my-8  opacity-0  ">
                <div className="my-8 flex items-center justify-center gap-2">
                    <a href="https://github.com/catalyzt-team">
                        <GitHubIcon/>
                    </a>
                    <a
                    href="https://github.com/catalyzt-team"
                    className="text-gray-500 text-sm font-normal hover:text-blue-500 hover:underline">© 2024 Catalyzt</a>
                    <p className="flex gap-x-2 justify-center items-center text-gray-500 text-sm font-normal">
                        Made With <Heart /> 
                        By 
                        <a
                        href="https://github.com/catalyzt-team/Builder-Ideas-List"
                        className="text-gray-500 "
                        >
                        <Lightning/>
                        </a>
                    </p>
                </div>
            </footer>
        </>
        )
    } 
    // @Catalyzt

export default Footer