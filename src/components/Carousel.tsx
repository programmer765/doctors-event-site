"use client"
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'

interface CarouselProps {
    images: StaticImageData[]
}

const Carousel : React.FC<CarouselProps> = ({ images }) => {

  const [ind, setInd] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setInd((prev) => (prev + 1) % images.length)
    }, 10000)
    return () => clearInterval(interval)
  })
  

  return (
    <div className='relative overflow-hidden'>
      <div className='flex transition-transform ease-in-out duration-5000' style={{ transform: `translateX(-${ind * 100}%)` }}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt="carousel" quality={100} style={{ position: 'relative', width: '100%', height: '60vh'}} className='flex-shrink-0'/>
        ))}
      </div>
    </div>
  )
}

export default Carousel