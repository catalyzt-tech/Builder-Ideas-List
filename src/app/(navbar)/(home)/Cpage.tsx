"use client"
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import TabPage from './component/Tab';
import { CheckBoxStateType, MarkDownData, TabStateType } from './component/Home';
import DialogFilter from './component/Dialog/DialogFilter';
import { newFilter } from './Text';
import DrawerFilter from './component/DrawerFilter';
import ProjectTab from './component/ProjectTab';
import OverViewTab from './component/OverViewTab';
import { useSearchParams } from 'next/navigation'
import Filter from "@/public/filter/filter.json"


interface HomeProps {
    markdownContents: Omit<MarkDownData, "contentHtml">[];
}

export default function Cpage({
    markdownContents
}: HomeProps) {
    const searchParams = useSearchParams()
    const params = searchParams.get('grouping')
    // for special case like #4 it doesn't appear on params variable
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    let fullQuery = params + hash

    const itemsPerPage = 15;
    // const { search }: HomeContextType = useHome?.()!;
    const [search, setSearch] = useState<string>("")
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [state, setState] = useState<TabStateType>({
        // sort have four option
        // n stand for no sort
        // a stand for sort by name A-Z
        // le stand for low effort
        // he stand for high effort
        sort: "a",
        // index = 1 mean project
        // index = 0 mean overview
        index: 0,
        // view have two option
        // g stand for grid
        // l stand for list
        view: "g",
        // badge = type
        filter: true,
        dialog: false,
        drawer: false,
    })


    const [checkBox, setCheckBox] = useState<CheckBoxStateType>({
        Type: [],
        Effort: [],
        Label: [],
        Category: [],
        SkillSet: [],
    })

    function handleSearchChange(e:React.ChangeEvent<HTMLInputElement>) {
        setSearch(prev => e.target.value)
    }


    // if search !== "" then filter by item.title
    // if currentBadge !== "All" then filter with item.type
    const filteredMarkdownContent = useMemo(() => {
        setCurrentPage(0)
        return markdownContents.filter(item => {
            const searchCondition = search !== "" ?
                item.title.toLowerCase().includes(search.toLowerCase()) :
                true;

            const typeCondition = checkBox["Type"].length !== 0 ?
                checkBox["Type"].some(elem => item.type === elem) :
                true;

            const effortCondition = checkBox["Effort"].length !== 0 ?
                checkBox["Effort"].some(elem => item.effort === elem) :
                true;

            // console.log(item.skillset)
            // console.log(checkBox["SkillSet"])
            const skillSetCondition = checkBox["SkillSet"].length !== 0 ?
                checkBox["SkillSet"].some(elem => item.skillset === elem) :
                true;

            let categoryCondition: any;
            if (checkBox["Category"].length !== 0) {
                let categoryId = newFilter.category.options.find((elem) => elem.name === item.category)!.id
                categoryCondition = checkBox["Category"].some(elem => elem === categoryId)
            }
            else {
                categoryCondition = true
            }


            const labelCondition = checkBox["Label"].length !== 0 ?
                checkBox["Label"].some(elem => item.labels.split(', ').some(subElem => subElem === elem)) :
                true;

            return searchCondition && typeCondition && effortCondition && labelCondition && categoryCondition && skillSetCondition;
        });
    }, [markdownContents, search, checkBox["Type"], checkBox["Effort"], checkBox["Label"], checkBox["Category"], checkBox["SkillSet"]]);



    const pageCount = useMemo(() => {
        return Math.ceil(filteredMarkdownContent.length / itemsPerPage);
    }, [filteredMarkdownContent])

    const currentItems = useMemo(() => {
        let sortedItems = filteredMarkdownContent

        if (state.sort === "a") {
            sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        } else if (state.sort === "le") {
            const order: { [key: string]: number } = { "Small": 0, "Medium": 1, "Large": 2 };
            sortedItems.sort((a, b) => {
                return order[a.effort] - order[b.effort];
            });
        } else if (state.sort === "he") {
            const order: { [key: string]: number } = { "Small": 2, "Medium": 1, "Large": 0 };
            sortedItems.sort((a, b) => {
                return order[a.effort] - order[b.effort];
            });
        }

        return sortedItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);;
    }, [currentPage, filteredMarkdownContent, state.sort]);



    const handlePageClick = (page: number) => {
        setCurrentPage(prev => page);
    };

    const handleChangeCheckBox = (name: keyof CheckBoxStateType, value: string) => {
        setCheckBox(prev => {
            let temp = { ...prev };

            let index = temp[name].findIndex(elem => elem === value);

            if (index === -1) {
                temp[name] = [...temp[name], value];
            } else {
                temp[name] = temp[name].filter(elem => elem !== value);
            }

            return temp;
        });
    };

    const handleClearFilter = () => {
        setCheckBox({
            Type: [],
            Effort: [],
            Label: [],
            Category: [],
            SkillSet: [],
        })  
    }

    function handleGrouping(search:string) {
        Filter['url-link-groupings'].options.map((item, i) => {
            if(item.name === search){
                
                console.log(search)
                console.log(item['category-ids'])
                setCheckBox(prev => ({...prev, Category:item['category-ids']}))
            }
        })

    }

    useEffect(() => {
        if(fullQuery && fullQuery.length > 2) {
            handleGrouping(fullQuery)
        }        
    }, [searchParams])
    

    return (

        <>


            {/* 
                ─█▀▀█ ░█─── ░█─── 　 ░█▀▀█ ▀▀█▀▀ ░█▄─░█ 
                ░█▄▄█ ░█─── ░█─── 　 ░█▀▀▄ ─░█── ░█░█░█ 
                ░█─░█ ░█▄▄█ ░█▄▄█ 　 ░█▄▄█ ─░█── ░█──▀█
        */}

            <TabPage
                state={state}
                setState={setState}
                setCheckBox={setCheckBox}
            />


            {state.index === 0 && 
                <OverViewTab/>
            }
            {state.index === 1 && 
                <ProjectTab
                    checkBox={checkBox}
                    setState={setState}
                    currentItems={currentItems}
                    currentPage={currentPage}
                    handleChangeCheckBox={handleChangeCheckBox}
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                    state={state}
                    handleClearFilter={handleClearFilter}
                    search={search}
                    handleSearchChange={handleSearchChange}
                />
            }

            <DialogFilter
                checkBox={checkBox}
                handleChangeCheckBox={handleChangeCheckBox}
                open={state.dialog}
                onClose={() => setState(prev => ({ ...prev, dialog: false }))}
            />

            <DrawerFilter
                checkBox={checkBox}
                handleChangeCheckBox={handleChangeCheckBox}
                open={state.drawer}
                onClose={() => setState(prev => ({ ...prev, drawer: false }))}
                handleClearFilter={handleClearFilter}
            />

         
        </>

    )

}

