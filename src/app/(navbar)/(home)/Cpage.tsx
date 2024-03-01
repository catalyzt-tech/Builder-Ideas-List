"use client"
import React, { useMemo, useState } from 'react';
import { NextButton, PageButton, Pagination, PrevButton } from "react-headless-pagination";
import TabPage from './component/Tab';
import GridCard from './component/GridCard';
import { CheckBoxStateType, MarkDownData, TabStateType } from './component/Home';
import ListCard from './component/ListCard';
import { HomeContextType, useHome } from './Context';
import ReactPaginate from 'react-paginate';
import CheckBoxFilter from './component/CheckBoxFilter';
import DialogFilter from './component/Dialog/DialogFilter';
import { newFilter } from './Text';
import DrawerFilter from './component/DrawerFilter';


interface HomeProps {
    markdownContents:  Omit<MarkDownData, "contentHtml">[];
}

export default function Cpage({
    markdownContents
}: HomeProps)  {

    const itemsPerPage = 1; 
    const {search}:HomeContextType = useHome?.()!;
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [state, setState] = useState<TabStateType>({
        // sort have four option
        // a stand for sort by name A-Z
        // n stand for no sort
        // le stand for low effort
        // he stand for high effort
        sort: "n",
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

            let categoryCondition:any;
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
    } ,[filteredMarkdownContent])

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
    // const handlePageClick = (selectedItem: { selected: number }) => {
    //     setCurrentPage(prev => selectedItem.selected);
    // };

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
    
    return (

    <> 


        {/* 
                ─█▀▀█ ░█─── ░█─── 　 ░█▀▀█ ▀▀█▀▀ ░█▄─░█ 
                ░█▄▄█ ░█─── ░█─── 　 ░█▀▀▄ ─░█── ░█░█░█ 
                ░█─░█ ░█▄▄█ ░█▄▄█ 　 ░█▄▄█ ─░█── ░█──▀█
                ᵂᴵᵀ ᴷᵁᴬʸ ᴸᴱᴷ
        */}

        <TabPage
        state={state}
        setState={setState}
        checkBox={checkBox}
        setCheckBox={setCheckBox}
        handleChangeCheckBox={handleChangeCheckBox}
        handleClearFilter={handleClearFilter}
        />


        <div className="mt-[2.5rem] relative">
            {state.view === "g" ? 
            <div className="animate-slideleft flex gap-6 ">
                
                {/*  
                        ░█▀▀█ ░█─░█ ░█▀▀▀ ░█▀▀█ ░█─▄▀ ░█▀▀█ ░█▀▀▀█ ▀▄░▄▀ 
                        ░█─── ░█▀▀█ ░█▀▀▀ ░█─── ░█▀▄─ ░█▀▀▄ ░█──░█ ─░█── 
                        ░█▄▄█ ░█─░█ ░█▄▄▄ ░█▄▄█ ░█─░█ ░█▄▄█ ░█▄▄▄█ ▄▀░▀▄
                */}

                {state.filter && 
                    <CheckBoxFilter
                    checkBox={checkBox}
                    handleChangeCheckBox={handleChangeCheckBox}
                    />
                }

                <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-fit`}>
                    {currentItems.map((item, i) => (
                        <div className="" key={i}>
                            <GridCard
                            data={item}
                            />
                        </div>
                    ))}
                </div>
            </div>
            :
            <div className="animate-slideright">
                <div className="hidden md:block">
                    <ListCard
                    currentItems={currentItems}
                    />
                </div>
                <div className="flex md:hidden flex-col gap-4">
                    {currentItems.map((item, i) => (
                        <React.Fragment key={i}>
                            <GridCard 
                            data={item}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            }



            <div className="mt-12 text-sm font-medium text-gray-500 ">
            <Pagination
                currentPage={currentPage}
                setCurrentPage={handlePageClick}
                className="flex"
                truncableText="1"
                truncableClassName="p-4 border min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem] text-sm font-medium text-gray-500"
                edgePageCount={4}
                middlePagesSiblingCount={3}
                totalPages={pageCount}
                
                >
                <Pagination.PrevButton className="">Previous</Pagination.PrevButton>

                <nav className="flex justify-center">
                    <ul className="flex items-center">
                    <Pagination.PageButton
                        activeClassName=""
                        inactiveClassName=""
                        className="p-4 border min-w-[1rem] min-h-[1rem] max-w-[1rem] max-h-[1rem]"
                    />
                    </ul>
                </nav>

                <Pagination.NextButton className="">Next</Pagination.NextButton>
                </Pagination>

            {/* <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                forcePage={currentPage}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            /> */}
                {/* <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                forcePage={currentPage}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                activeClassName={"active"}
                renderOnZeroPageCount={null}
            /> */}
        </div>
        {/* <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                forcePage={currentPage}
                containerClassName="flex"
                activeClassName='bg-gray-100'
                activeLinkClassName="bg-gray-100"
                disabledLinkClassName="cursor-not-allowed"
                pageClassName=""
                pageLinkClassName="border-l border-t border-b border-gray-300 px-[0.75rem] py-[0.375rem] hover:bg-gray-50"
                previousClassName=""
                previousLinkClassName="border-l border-y px-[0.75rem] py-[0.375rem] hover:bg-gray-50"
                nextClassName=""
                nextLinkClassName=" border-x border-y px-[0.75rem] py-[0.375rem] hover:bg-gray-50"
                breakClassName=""
                breakLinkClassName="px-[0.65rem] py-[0.375rem] border-l border-y hover:bg-gray-50"
                renderOnZeroPageCount={null}
            /> */}
         
        </div>

        <DialogFilter
        checkBox={checkBox}
        handleChangeCheckBox={handleChangeCheckBox}
        open={state.dialog}
        onClose={() => setState(prev => ({...prev, dialog:false}))}
        />

        <DrawerFilter
        checkBox={checkBox}
        handleChangeCheckBox={handleChangeCheckBox}
        open={state.drawer}
        onClose={() => setState(prev => ({...prev, drawer: false}))}
        handleClearFilter={handleClearFilter}

        />
        

    </>

    )

}

