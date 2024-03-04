"use client"
export default function BtnSection() {


    function handleClickBtn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
          window.scrollTo({
            top: 450,
            behavior: "smooth",
          });
    }

    return (
        <button
        className="hidden lg:block -48 border px-4 py-2 bg-primaryRed text-white rounded-md hover:bg-primaryRed/90 shadow-md"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClickBtn(e)}
        >
            <h6 className="font-semibold">Start Exploring</h6>
        </button>
    )

}