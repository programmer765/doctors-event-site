"usec client"

import Link from "next/link"
import React from "react"

interface NavDropDownProps {
  dropdownItems: Array<string>
}

const NavDropDown : React.FC<NavDropDownProps> = ({ dropdownItems }) => {
  return (
    <div className="w-50 bg-white text-black">
      {
        dropdownItems.map((item, ind) => (
          <Link href="#" key={ind}>
            <div className={`py-2 pl-7 hover:bg-[#932231] hover:text-white ${ind === dropdownItems.length - 1 ? "border-b-0" : "border-b-2"} transition ease-in-out duration-300`}>
              { item }
            </div>
          </Link>

        ))
      }
      {/* <Link href="#">
        <div className="py-3 pl-7 border-b-2 hover:bg-black hover:text-white">
        item 2
        </div>
      </Link>
      <Link href="#">
        <div className="py-2 pl-7 hover:bg-black hover:text-white">
        item 3
        </div>
      </Link> */}
    </div>
  )
}

export default NavDropDown