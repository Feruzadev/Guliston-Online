
import { IoSearchSharp } from "react-icons/io5";
import HeaderLogo from "../img/5a470330-3eae-44b7-acab-15d7dfa32a75.png"
import { Button } from "@material-tailwind/react";
import { CiMail } from "react-icons/ci";

export default function Header() {
    return (
        <div>
            <div className="Container">
              <div className="header-wrapper flex items-center justify-between">
                    <img
                        className="header-logo w-[160px] sm:w-[160px] md:w-[240px] lg:w-[330px] max-w-full"
                        src={HeaderLogo}
                        alt="headerlogo"
                    />
                    <div className="search-wrapper relative w-[500px] flex items-center justify-center gap-[50px] ">
                        <IoSearchSharp className="icon-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl " />
                        <input
                            type="text"

                            className="search-input w-full border border-black rounded-lg pl-10 pr-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button className="button-mail h-auto object-cover bg-gradient-to-br from-[#87D2F8] to-[#1cdf4a] py-[10px] text-[14px] text-white " >
                            <CiMail className="cimail text-[22px]" />
                        </Button>

                    </div>

                </div>
            </div>
        </div>
    )
}