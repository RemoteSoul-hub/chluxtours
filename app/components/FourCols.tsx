import Container from "./Container";
import { BsHouseCheckFill, BsAlarm, BsBatteryFull, Bs1Circle } from 'react-icons/bs';
import { FC } from "react";

interface Feature {
  title: string;
  description: string;
  Icon: FC; 
}

const features: Feature[] = [
  {
    title: "Livraison et récupération 7j/7",
    description: "Nous livrons et récupérons votre véhicule, à l’heure et à l’adresse de votre choix, 7j/7 de 8h à 23h. Livraison express en 2H à Paris.",
    Icon: BsHouseCheckFill,
  },
  {
    title: "Some other feature",
    description: "Notre Service Client est à votre disposition 7j/7 de 8h à 20h, même les jours fériés",
    Icon: BsAlarm,
  },
  {
    title: "Yet another feature",
    description: "Modifiez votre réservation à tout moment, directement dans votre compte. Même pour une location en cours.",
    Icon: BsBatteryFull,
  },
  {
    title: "AAAAND another feature",
    description: "Annulez gratuitement votre location jusqu'à 24h avant le début de la location.",
    Icon: Bs1Circle,
  },
];

const FourCols: FC = () => {
  return (
      <div className="mb-8 grid lg:grid-cols-4 max-lg:grid-cols-1 bg-white gap-x-12  border-[2px] border-primary rounded-sm px-6 py-3">
        {features.map((feature, index) => (
          <div key={index} className="grid max-lg:grid-cols-1 mx-auto text-center lg:gap-y-2 max-lg:mb-8 gap-y-0 mb-4 py-6 lg:py-4">
            <div className="mx-auto max-lg:max-w-2/3 lg:max-w-1/4 lg:p-4 lg:pb-2 text-3xl text-primary text-center">
              <feature.Icon />
            </div>
            <div className="relative my-auto basis-5/6 max-w-5/6 text-center lg:basis-full lg:max-w-full">
              <h3 className="text-h3 font-bold text-base mb-4">{feature.title}</h3>
              <p className="text-p leading-6 lg:h-[100px]">{feature.description}</p>
              <hr className="w-48 h-0.5 mx-auto  bg-primary/50 border-0 rounded mt-6 " />
            </div>
          </div>
        ))}
      </div>
  );
}

export default FourCols;
