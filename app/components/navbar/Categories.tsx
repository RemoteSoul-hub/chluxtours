'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoCar, IoCarSport } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Economy',
    icon: IoCar,
    description: 'Affordable and fuel-efficient cars!',
  },
  {
    label: 'Luxury',
    icon: IoCarSport,
    description: 'Experience the ultimate in luxury and comfort!',
  },
  {
    label: 'SUV',
    icon: IoCarSport,
    description: 'Spacious and versatile SUVs for all your needs!',
  },
  {
    label: 'Convertible',
    icon: IoCarSport,
    description: 'Enjoy the wind in your hair with a convertible!',
  },
  {
    label: 'Electric',
    icon: IoCarSport,
    description: 'Environmentally friendly electric vehicles!',
  },
  {
    label: '4x4 Off-Road',
    icon: IoCarSport,
    description: 'Explore off-road adventures with our 4x4 vehicles!',
  },
  {
    label: 'Family',
    icon: IoCarSport,
    description: 'Comfortable and spacious cars for families!',
  },
  {
    label: 'Sports',
    icon: IoCarSport,
    description: 'High-performance sports cars for thrill-seekers!',
  },
  {
    label: 'Compact',
    icon: IoCarSport,
    description: 'Compact cars perfect for city driving!',
  },
  {
    label: 'Vintage',
    icon: IoCarSport,
    description: 'Classic and vintage cars for a nostalgic ride!',
  },
  {
    label: 'Van & Minivan',
    icon: IoCarSport,
    description: 'Roomy vans and minivans for group travel!',
  },
  {
    label: 'Truck & Pickup',
    icon: IoCarSport,
    description: 'Heavy-duty trucks and pickups for your hauling needs!',
  },
  {
    label: 'Airport Shuttle',
    icon: IoCarSport,
    description: 'Convenient airport shuttle services!',
  },
  {
    label: 'Camper & RV',
    icon: IoCarSport,
    description: 'Explore the open road with our camper and RV rentals!',
  },
  {
    label: 'Premium',
    icon: IoCarSport,
    description: 'High-end premium cars for a first-class experience!',
  }
]


const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;