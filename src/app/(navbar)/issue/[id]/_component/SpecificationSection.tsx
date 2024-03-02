import { MarkDownData } from "../../../(home)/component/Home"
import "./temp.css"
export default function SpecificationSection({
    content,
    specificationRef
}:{
    content: MarkDownData
    specificationRef : React.MutableRefObject<HTMLElement | null>;

})  {

return (

     <section
        ref={specificationRef}
        id="Specification"
        className=" bg-white p-6 lg:rounded-md lg:shadow-md items-center w-auto  lg:mb-6"
        >
            <h6 className="text-2xl text-gray-900 font-bold my-4">
            Specification
          </h6>
          <hr className="hidden lg:block my-6  border-t border-gray-300" />
          <div 
          className="render break-words text-gray-500 list-none"
          dangerouslySetInnerHTML={{__html: content.contentHtml}} />
      </section>

    )

}
