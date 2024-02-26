import React from 'react';
import TabPage from './Tab';
import Card from './Card';
import { MarkDownData } from './Home';

interface HomeProps {
    markdownContents:  Omit<MarkDownData, "contentHtml">[];
  }
export default function Cpage({
    markdownContents
}: HomeProps)  {


    return (

    <> 

        <TabPage/>

        <div className="mt-[2.5rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {markdownContents.map((item, i) => (
                <React.Fragment key={i}>
                <Card
                data={item}
                />
            </React.Fragment>
            ))}
            </div>
        </div>
    
    </>

    )

}

