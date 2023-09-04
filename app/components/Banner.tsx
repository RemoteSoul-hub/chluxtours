'use client'

import Container from "./Container";
import { MdKeyboardArrowDown } from "react-icons/md";

const Banner = () => {
  return (
    <div className="relative bg-banner bg-cover bg-center bg-no-repeat w-full h-[80vh] flex items-center justify-start">
      <style jsx>{`
        .bg-banner:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 20%; 
          background: linear-gradient(transparent, #272727);
          pointer-events: none;
        }
      `}</style>
      <Container className="ml-0">
        <div className="flex flex-col gap-y-10 py-14 px-12 md:justify-center lg:justify-start items-center bg-ternary/80 border-[1px] border-b-white border-r-white border-l-primary border-t-primary">
          <h1 className="text-h1 text-primary md:text-center lg:text-left">Conduisez Avec Un Service Haut De Gamme</h1>
          <h2 className="text-h2 text-white md:text-center lg:text-left">TITRE H2</h2>
        </div>
        <div className="absolute bottom-10 left-[48%]  text-2xl border-[2px] text-white border-white animate-bounce p-3 rounded-full cursor-pointer">
            <MdKeyboardArrowDown />
        </div>
      </Container>
      <div className="arrow"></div>
    </div>
  );
};

export default Banner;
