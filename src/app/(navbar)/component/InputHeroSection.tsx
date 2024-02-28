"use client"

import SearchIcon from "@/public/icon/SearchIcon";
import Input from "../../component/Input";
import { HomeContextType, useHome } from "../Context";

export default function InputSection() {
    const {search, handleSearchChange}:HomeContextType = useHome?.()!;


    return (
        <Input
            value={search}
            onChange={handleSearchChange}
            Icon={<SearchIcon/>}
            placeholder="Search project"
        />
    )

}