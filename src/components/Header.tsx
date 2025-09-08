"use client"

import Image from "next/image"
import banner from "../../public/banner.jpg"
import Navbar from "./Navbar"

const  Header = () => {
    return (
        <div>
					<header className="">
						<div className="flex flex-col">
							<Image
							src={banner}
							alt="banner"
							// width={180}
							// height={180} 
							// fill
							sizes="100vw"
							style={{
								width: "100%",
								height: "auto"
							}}
							/>
						</div>
						<div>
							<Navbar />
						</div>
					</header>
				</div>
    )
}

export default Header