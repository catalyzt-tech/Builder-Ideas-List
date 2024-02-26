"use client"
import React, { useState } from 'react';
import TabPage from './Tab';
import GridCard from './GridCard';
import { MarkDownData, TabStateType } from './Home';
import ListCard from './ListCard';

interface HomeProps {
    markdownContents:  Omit<MarkDownData, "contentHtml">[];
  }
export default function Cpage({
    markdownContents
}: HomeProps)  {


    const [state, setState] = useState<TabStateType>({
        index: 0,
        // view have two option
        // g stand for grid
        // l stand for list
        view: "g",
        // badge = type
        currentBadge: "All",
    })


    const filteredMarkdownContent = markdownContents.filter(item => {
        if(state.currentBadge !== "All"){
            return item.type.includes(state.currentBadge);
        }
        else {
            return item
        }
    });
    

    return (

    <> 

        <TabPage
        state={state}
        setState={setState}
        />

        <div className="mt-[2.5rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

                {filteredMarkdownContent.map((item, i) => (
                    <React.Fragment key={i}>
                        <GridCard
                        data={item}
                        />
                    </React.Fragment>
                ))}


            </div>
            {/* <div className="w-full">
                <ListCard/>
            </div> */}
        </div>
    
    </>

    )

}

