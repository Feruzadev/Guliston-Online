import HeaderLogo from "../img/5a470330-3eae-44b7-acab-15d7dfa32a75.png";
import { Button } from "@material-tailwind/react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={HeaderLogo}
          alt="headerlogo"
          className="w-24 sm:w-32 md:w-40 object-contain"
        />

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-4">
          <Button
            size="sm"
            color="blue"
            className="px-3 py-2 text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300"
          >
            Login
          </Button>
          <Button
            size="sm"
            color="blue"
            className="px-3 py-2 text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300"
          >
            Sign Up
          </Button>
        </div>

      </div>
    </header>
  );
}