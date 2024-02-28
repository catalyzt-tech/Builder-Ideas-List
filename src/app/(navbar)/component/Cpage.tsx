"use client"
import React, { useEffect, useMemo, useState } from 'react';
import TabPage from './Tab';
import GridCard from './GridCard';
import { CheckBoxStateType, MarkDownData, TabStateType } from './Home';
import ListCard from './ListCard';
import { HomeContextType, useHome } from '../Context';
import ReactPaginate from 'react-paginate';
import Checkbox from '../../component/Checkbox/Checkbox';

interface HomeProps {
    markdownContents:  Omit<MarkDownData, "contentHtml">[];
  }
export default function Cpage({
    markdownContents
}: HomeProps)  {


    const {search}:HomeContextType = useHome?.()!;
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState<TabStateType>({
        index: 0,
        // view have two option
        // g stand for grid
        // l stand for list
        view: "g",
        // badge = type
        currentBadge: "All",
        filter: true,
    })


    const [checkBox, setCheckBox] = useState<CheckBoxStateType>({
        Type: [],
        Effort: [],
        Label: [],
    })
   
    // if search !== "" then filter by item.title
    // if currentBadge !== "All" then filter with item.type
    const filteredMarkdownContent = useMemo(() => {
        return markdownContents.filter(item => {
            const searchCondition = search !== "" ? 
                item.title.toLowerCase().includes(search.toLowerCase()) : 
                true;
        
            // const badgeCondition = state.currentBadge !== "All" ? 
            //     item.type.includes(state.currentBadge) : 
            //     true; 
            
            const typeCondition = checkBox["Type"].length !== 0 ?
            checkBox["Type"].some(elem => item.type.includes(elem)) :
            true;

            const effortCondition = checkBox["Effort"].length !== 0 ?
            checkBox["Effort"].some(elem => item.effort.includes(elem)) :
            true;

            const labelCondition = checkBox["Label"].length !== 0 ?
            checkBox["Label"].some(elem => item.labels.includes(elem)) :
            true;
            
            return searchCondition && typeCondition && effortCondition && labelCondition;
        });
    }, [markdownContents, search, checkBox["Type"], checkBox["Effort"], checkBox["Label"]]);


    const itemsPerPage = 12; 
    const pageCount = useMemo(() => {
        return Math.ceil(filteredMarkdownContent.length / itemsPerPage);
    } ,[filteredMarkdownContent])

    const currentItems = useMemo(() => {
        return filteredMarkdownContent.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    }, [currentPage, filteredMarkdownContent])




    const handlePageClick = (selectedItem: { selected: number }) => {
        setCurrentPage(prev => selectedItem.selected);
    };

    useEffect(() => {
      setCurrentPage(0)
    }, [state.currentBadge])
    



    const filterItem = {
        "Type": ["Project Idea", "Foundation Mission Request", "Delegate Mission Request"],
        "Effort": ["Small", "Medium", "Large"],
        "Label": ["OP Stack", "Attestations", "Chain Infra", "Consumer Apps", "Smart Contracts", "DeFi", "Developer Tooling", "Documentation", "Gaming", "Governance", "NFTs", "Protocol", "Wallets", "RetroPGF"]
    }


    const handleChangeCheckBox = (name: keyof CheckBoxStateType, value: string) => {
        setCheckBox(prev => {
            let temp = { ...prev };
            
            let index = temp[name].findIndex(elem => elem === value);
            
            if (index === -1) {
                temp[name] = [...temp[name], value];
            } else {
                temp[name] = temp[name].filter(elem => elem !== value); 
            }
            
            // console.log(temp);
            return temp;
        });
    };
    
    // console.log(checkBox)

    return (

    <> 

        <TabPage
        state={state}
        setState={setState}
        />

        <div className="mt-[2.5rem] relative">
            {state.view === "g" && loading === false ? 
            <div className="animate-slideleft flex gap-6 ">
                

                {/*  

                █▀▀ █░█ █▀▀ █▀▀ █▄▀ █▄▄ █▀█ ▀▄▀
                █▄▄ █▀█ ██▄ █▄▄ █░█ █▄█ █▄█ █░█
                
                */}

                {state.filter && 
                <div className="flex flex-col gap-4 col-span-1 border min-w-60 h-fit rounded-lg p-2 animate-slideleft sticky top-24">
                    <div className="flex flex-col gap-1  ">
                        <h6 className="text-xs font-medium text-gray-400 mb-2">Type</h6>
                        {filterItem["Type"].map((item, i) => (
                            <Checkbox
                            key={i}
                            label={item}
                            value={item}
                            checked={checkBox["Type"].includes(item)}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Type" as keyof CheckBoxStateType, e.target.value)}
                            />
                        ))}
                    </div>
                    <hr className='h-[0.0625rem] bg-gray-200'/>
                    <div className="flex flex-col gap-1  ">
                        <h6 className="text-xs font-medium text-gray-400 mb-2">Effort</h6>
                        {filterItem["Effort"].map((item, i) => (
                            <Checkbox
                            key={i}
                            label={item}
                            value={item}
                            checked={checkBox["Effort"].includes(item)}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Effort" as keyof CheckBoxStateType, e.target.value)}
                            />
                        ))}
                    </div>
                    <hr className='h-[0.0625rem] bg-gray-200'/>
                    <div className="flex flex-col gap-1  ">
                        <h6 className="text-xs font-medium text-gray-400 mb-2">Label</h6>
                        {filterItem["Label"].map((item, i) => (
                            <Checkbox
                            key={i}
                            label={item}
                            value={item}
                            checked={checkBox["Label"].includes(item)}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeCheckBox("Label" as keyof CheckBoxStateType, e.target.value)} 
                            />
                        ))}
                    </div>
                </div>
                }

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-fit ">
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

            <div className="mt-12 flex justify-end text-sm font-medium text-gray-500 ">
            <ReactPaginate
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

