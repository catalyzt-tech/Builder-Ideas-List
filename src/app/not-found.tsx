import Link from "next/link";
import Navbar from "./component/navbar/Navbar";

export default function Custom404() {


    return (
    <div className="min-h-[100vh] max-h-[100vh] flex flex-col">
        <div className="py-4">
            <Navbar/>
        </div>
        
        <div className="flex-grow bg-gray-300 text-center">
            <div className="flex flex-col justify-center items-center">
                <h6 className="text-2xl font-medium text-gray-500">404 Error</h6>
                <h6 className="text-7xl font-medium text-gray-900">Page not found</h6>
            </div>    
        </div>
    </div>
    
);
}