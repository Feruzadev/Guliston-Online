import HeaderLogo from "../img/5a470330-3eae-44b7-acab-15d7dfa32a75.png";
import { Button } from "@material-tailwind/react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md shadow-md rounded-3xl ">
            <div className="Container">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between ">
                    {/* Logo */}
                    <img
                        src={HeaderLogo}
                        alt="headerlogo"
                        className="w-32 md:w-40 object-contain"
                    />

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <Button color="blue" className="shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            Login
                        </Button>
                        <Button color="blue" className="shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            Sign Up
                        </Button>
                    </div>

                </div>
            </div>

        </header>
    );
}