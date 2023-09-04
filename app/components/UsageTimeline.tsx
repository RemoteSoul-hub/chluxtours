'use client';

import Image from 'next/image';
import Container from './Container';
import { BsClockHistory } from 'react-icons/bs'


const UsageTimeline = () => {
  return (
    <Container className=" pb-9 md:pb-[5.25rem] ">
      <div className=" flex flex-wrap -ml-4 -mr-4">
        <h3 className='text-h1 font-bold text-primary relative px-4 w-full basis-full max-w-full text-center text-[2.5rem] leading-[2.5rem] mx-0 mt-8 mb-16 md:mt-24 md:mb-20'>
          LOUEZ L'ESPRIT LEGER
        </h3>
      </div>
      <div className='card-container lg:gap-y-8'>
        <div className="flex flex-col lg:flex-row justify-center items-center pb-20 lg:pb-12">
          <div className='relative flex flex-col md:flex-row items-center mb-12 flex-1'>
             <Image src={'/images/timeline-item.png'} alt="" width={616} height={408} />
             <div className='text-8xl text-primary transform -translate-x-12 bg-[#0d0d0d] rounded-full p-3 lg:block hidden'>
                <BsClockHistory/>
             </div>
          </div>
          <div className="flex-1 ml-0 lg:ml-12 px-6">
          <h3 className="text-h3 text-primary font-bold mb-3 leading-[30px] md:-mt-6 md:self-end max-xl:leading-[28px]">
            Gagnez du temps
          </h3>
          <p className=" text-p font-medium text-justify md:self-start text-white">
          Fini les comptoirs et les heures d’attente. 7 jours sur 7 de 8h à 23h, notre équipe de Carsitters® livre votre véhicule, à l’heure et à l’adresse de votre choix.
          </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse justify-center items-center pb-20 lg:pb-12">
          <div className='relative flex flex-col md:flex-row items-center mb-12 flex-1'>
             <Image src={'/images/timeline-item.png'} alt="" width={616} height={408} />
             <div className='text-8xl text-primary transform -translate-x-12 bg-[#0d0d0d] rounded-full p-3 lg:block hidden'>
                <BsClockHistory/>
             </div>
          </div>
          <div className="flex-1 ml-0 lg:ml-12 px-6">
          <h3 className="text-h3 text-primary font-bold mb-3 leading-[30px] md:-mt-6 md:self-end max-xl:leading-[28px]">
            Gagnez du temps
          </h3>
          <p className=" text-p font-medium text-justify md:self-start text-white">
          Fini les comptoirs et les heures d’attente. 7 jours sur 7 de 8h à 23h, notre équipe de Carsitters® livre votre véhicule, à l’heure et à l’adresse de votre choix.
          </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center pb-20 lg:pb-12">
          <div className='relative flex flex-col md:flex-row items-center mb-12 flex-1'>
             <Image src={'/images/timeline-item.png'} alt="" width={616} height={408} />
             <div className='text-8xl text-primary transform -translate-x-12 bg-[#0d0d0d] rounded-full p-3 lg:block hidden'>
                <BsClockHistory/>
             </div>
          </div>
          <div className="flex-1 ml-0 lg:ml-12 px-6">
          <h3 className="text-h3 text-primary font-bold mb-3 leading-[30px] md:-mt-6 md:self-end max-xl:leading-[28px]">
            Gagnez du temps
          </h3>
          <p className=" text-p font-medium text-justify md:self-start text-white">
          Fini les comptoirs et les heures d’attente. 7 jours sur 7 de 8h à 23h, notre équipe de Carsitters® livre votre véhicule, à l’heure et à l’adresse de votre choix.
          </p>
          </div>
        </div>
      </div>
      <div className="cta-button">
      <div 
          // onClick={}
          className="
            hover:bg-theme-white
            text-xl
            w-[240px]
            font-semibold 
            py-6 
            px-4 
            rounded-full 
            bg-primary 
            hover:text-primary
            border-[1px]
            hover:border-primary
            transition 
            cursor-pointer
            mx-auto
            text-center
          "
        >
          Book Now
        </div>
      </div>
    </Container>
  )
}

export default UsageTimeline
