"use client"
import React, { useMemo, useState } from 'react';
import TabPage from './Tab';
import GridCard from './GridCard';
import { MarkDownData, TabStateType } from './Home';
import ListCard from './ListCard';
import { HomeContextType, useHome } from '../Context';
import ReactPaginate from 'react-paginate';

interface HomeProps {
    markdownContents:  Omit<MarkDownData, "contentHtml">[];
  }
export default function Cpage({
    markdownContents
}: HomeProps)  {


    const {search}:HomeContextType = useHome?.()!;
    const [state, setState] = useState<TabStateType>({
        index: 0,
        // view have two option
        // g stand for grid
        // l stand for list
        view: "g",
        // badge = type
        currentBadge: "All",
    })


   
    // if search !== "" then filter by item.title
    // if currentBadge !== "All" then filter with item.type
    const filteredMarkdownContent = useMemo(() => {
        return markdownContents.filter(item => {
            const searchCondition = search !== "" ? 
                item.title.toLowerCase().includes(search.toLowerCase()) : 
                true;
        
            const badgeCondition = state.currentBadge !== "All" ? 
                item.type.includes(state.currentBadge) : 
                true; 
        
            return searchCondition && badgeCondition;
        });
    }, [markdownContents, search, state.currentBadge]);


    const itemsPerPage = 12; 
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil(filteredMarkdownContent.length / itemsPerPage);

    const currentItems = filteredMarkdownContent.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handlePageClick = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };


    return (

    <> 

        <TabPage
        state={state}
        setState={setState}
        />

        <div className="mt-[2.5rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {currentItems.map((item, i) => (
                    <React.Fragment key={i}>
                        <GridCard
                        data={item}
                        />
                    </React.Fragment>
                ))}


            </div>

            <div className="mt-4 flex justify-center text-sm font-medium text-gray-500 ">
            <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        breakLabel="..."
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={1}
                        onPageChange={handlePageClick}
                        containerClassName="flex"
                        activeLinkClassName="bg-gray-100"
                        disabledLinkClassName="cursor-not-allowed"
                        pageClassName="page-item"
                        pageLinkClassName="border-l border-t border-b border-gray-300 px-[0.75rem] py-[0.375rem] hover:bg-gray-50"
                        previousClassName=""
                        previousLinkClassName="page-link border-l border-y px-[0.75rem] py-[0.375rem] hover:bg-gray-50"
                        nextClassName="page-item"
                        nextLinkClassName="page-link  border-x border-y px-[0.75rem] py-[0.375rem] hover:bg-gray-50"
                        breakClassName=""
                        breakLinkClassName="px-[0.65rem] py-[0.375rem] border-l border-y hover:bg-gray-50"
                        renderOnZeroPageCount={null}
                    />
                </div>
         
        </div>
    
    </>

    )

}

