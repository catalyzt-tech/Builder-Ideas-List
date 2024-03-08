'use client'
export default function BtnHeroSection() {
  const handleClickBtn = () => {
    window.scrollTo({
      top: 450,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className="hidden lg:block -48 border px-7 py-3 bg-[#FF0420] text-white rounded-3xl  shadow-md hover:opacity-90 hover:scale-105 transition ease-linear"
      onClick={handleClickBtn}
    >
      <h6 className=" font-semibold">Start Exploring &darr;</h6>
    </button>
  )
}
