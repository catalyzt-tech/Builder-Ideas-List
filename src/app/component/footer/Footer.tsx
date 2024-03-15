import Heart from '@/public/icon/Heart'
import Lightning from '@/public/icon/Lightning'
<<<<<<< HEAD
import GitHubIcon from '@/public/icon/github-mark'
=======
>>>>>>> 062f37a6d9587af47e7d8adc7fd7953799733a07

interface FooterProps {
  color?: string
}
const Footer = ({ color = 'bg-white' }: FooterProps) => {
  return (
    <footer id="footer" className={`w-full py-8 text-xs font-normal ${color}`}>
      <div className="flex flex-row items-center justify-center gap-x-2 text-gray-700">
        <h6 className=" ">© 2024 Optimism</h6>
        <div>|</div>
<<<<<<< HEAD
        <div className="flex justify-center items-center">
=======
        <div className="flex justify-center items-center  ">
>>>>>>> 062f37a6d9587af47e7d8adc7fd7953799733a07
          <span>Made With</span>
          <span className="mx-1">
            <Heart />
          </span>
          <span>By</span>

          <a
            href="https://github.com/catalyzt-team"
            className="text-[#865CBB] hover:underline flex gap-1 items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Lightning />
            </div>
            <div>Catalyzt</div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
