"use client"

import Link from "next/link"
import { RiArrowDropDownLine } from "react-icons/ri";
import NavDropDown from "./NavDropDown";
import { useState } from "react";

const Navbar = () => {

  const travelAndAccomodation : Array<string> = ["Venue", "Accomodations", "Nearby Attractions"]
  const aboutUs : string[] = ["About AMPI", "Organizing Committee", "ANMPI EC"]

  const [isTravelHover, setIsTravelHover] = useState(false)
  const [isAboutUsHover, setIsAboutUsHover] = useState(false)

  return (
    <div className="px-28 bg-[#932231]">
        <nav className="flex space-x-6 justify-center text-white text-lg">
          <div className="flex space-x-6 py-5 font-medium justify-center">
            <Link href="/" className="px-1">Home</Link>
            <div className="relative" onMouseOver={() => setIsAboutUsHover(true)} onMouseOut={() => setIsAboutUsHover(false)}>
              <div className="flex cursor-pointer">
                About Us
                <div className="px-1 relative top-0.5 text-2xl">
                  <RiArrowDropDownLine />
                </div>
              </div>
              <div className={`${isAboutUsHover ? "visible" : "invisible"} z-10 absolute top-11`}>
                <NavDropDown dropdownItems={aboutUs} />
              </div>
            </div>
            <Link href="#abstract" className="">Abstract</Link>
            <Link href="#registration" className="">Registration</Link>
            <div className="relative" onMouseOver={() => setIsTravelHover(true)} onMouseOut={() => setIsTravelHover(false)}>
              <div className="flex cursor-pointer">
                Travel / Accommodation
                <div className="px-1 relative top-0.5 text-2xl">
                  <RiArrowDropDownLine />
                </div>
              </div>
              <div className={`${isTravelHover ? "visible" : "invisible"} z-10 absolute top-11`}>
                <NavDropDown dropdownItems={travelAndAccomodation} />
              </div>
            </div>
          </div>
          <div className="border-2 border-solid rounded-md p-3.5 my-1 bg-[#333369] font-bold cursor-pointer">
            <Link href="#contact" className="">Register Now</Link>
          </div>
        </nav>
    </div>
  )
}

export default Navbar