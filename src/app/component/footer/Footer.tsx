import Heart from "@/public/icon/Heart"
import Lightning from "@/public/icon/Lightning"
import GitHubIcon from "@/public/icon/github-mark"

const Footer = ({color="bg-white"}:{
    color?: string
}) => {



    return (
            <footer
                id="footer"
                className={`w-full py-8  text-sm font-normal ${color}`}>
                <div className="flex items-center justify-center gap-x-4">
                    <h6 className="text-sm text-gray-700">
                        © 2024 Optimism
                    </h6>
                    <a href="https://github.com/catalyzt-team/Builder-Ideas-List">
                        <GitHubIcon />
                    </a>

                    <p className="flex gap-x-2 justify-center items-center text-gray-500">
                        Made With <Heart />
                        By
                        <a
                            href="https://github.com/catalyzt-team"
                            className="text-[#865CBB] hover:underline flex justify-center items-center"
                        >
                            <Lightning />
                            Catalyzt
                        </a>
                    </p>
                </div>
            </footer>
    )
}

export default Footer