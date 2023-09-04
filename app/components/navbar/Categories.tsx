'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { IoCar, IoCarSport, IoCarOutline, IoCarSharp } from 'react-icons/io5';
import { MdElectricCar } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Sedan',
    icon: IoCar,
    description: 'Classic comfort and efficiency',
  },
  {
    label: 'SUV',
    icon: IoCarSport,
    description: 'Roomy and versatile',
  },
  {
    label: 'Convertible',
    icon: IoCarOutline,
    description: 'Enjoy open-air driving',
  },
  {
    label: 'Sports',
    icon: IoCarSharp,
    description: 'High performance and style',
  },
  {
    label: 'Electric',
    icon: MdElectricCar,
    description: 'Eco-friendly and efficient',
  },
  {
    label: 'Hybrid',
    icon: IoCar,
    description: 'Best of both worlds',
  },
  {
    label: 'Minivan',
    icon: IoCarSport,
    description: 'Family-friendly and spacious',
  },
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