import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import carousel1 from "../../public/carousel/carousel1.png";
import carousel2 from "../../public/carousel/carousel2.jpg";
import carousel3 from "../../public/carousel/carousel3.webp";
import { StaticImageData } from "next/image";

export default function Home() {

  const images : StaticImageData[] = [
    carousel1,
    carousel2,
    carousel3
  ]

  return (
    <div>
      <Header />
      <div>
        <Carousel images={images} />
      </div>
      <div className="px-6 my-2 py-2">
        <div className="my-5 pb-4">
          <div className="text-[#9b3442] font-semibold font-sans text-3xl">
            Welcome to ANMPICON dummy website!
          </div>
        </div>
        <div className="text-[1.2rem] text-[#2E2E2E] leading-[1.8] tracking-[0.01em] text-justify">
          <p className="mb-4">
            We are delighted to invite you to ANMPICON 2025, the <span className="font-semibold">23rd Annual Conference of the Association of Nuclear Medicine Physicians of India</span> (ANMPI), where the theme for this year is <span className="font-semibold">“Advancing Nuclear Medicine: Precision and Innovation.”</span> This event promises to be a pioneering platform for medical professionals, researchers, and technologists to come together, explore the latest breakthroughs, and discuss the future of Nuclear Medicine with a focus on precision healthcare and innovative solutions.
          </p>

          <p className="mb-4">
            As Nuclear Medicine continues to revolutionize patient care, precision medicine plays a crucial role in providing individualized diagnostics and therapies. This year’s conference will delve into the cutting-edge advancements in molecular imaging, radiopharmaceuticals, targeted therapies, and theranostics, offering insights into the transformation of personalized treatment approaches. Topics will cover the application of positron emission tomography (PET), single-photon emission computed tomography (SPECT), radioimmunotherapy, and the growing impact of artificial intelligence (AI) in Nuclear Medicine.
          </p>

          <p className="mb-4">
            Throughout ANMPICON 2025, we will explore the integration of innovative technologies such as next-generation radiotracers, advanced imaging techniques, and novel treatment protocols that improve diagnostic accuracy and therapeutic efficacy. Special sessions will also focus on clinical translation, quality assurance, and regulatory challenges to ensure safe and effective implementation of new technologies into clinical practice.
          </p>

          <p className="mb-4">
            This year’s conference will also emphasize collaboration between clinicians, physicists, and technologists, fostering a multidisciplinary approach to advancing the field. With distinguished speakers, interactive workshops, and hands-on sessions, ANMPICON 2025 aims to empower participants with the tools and knowledge needed to lead the way in precision Nuclear Medicine.
          </p>

          <p className="mb-4">
            We look forward to your participation in this exciting event as we come together to advance the future of Nuclear Medicine through precision, innovation, and collaboration.
          </p>

          <p className="mb-4">
            Stay tuned for more updates on speakers, sessions, and registration details. Let’s make ANMPICON 2025 a landmark event in the journey of Nuclear Medicine!
          </p>

          <p className="mb-4">
            Warm regards,
          </p>

        </div>
      </div>
    </div>
  );
}
