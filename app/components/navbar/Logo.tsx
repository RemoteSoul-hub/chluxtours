'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <>
    <Image
      onClick={() => router.push('/')}
      className=" hidden lg:block cursor-pointer" 
      src="/images/logo.png" 
      height="120" 
      width="240" 
      alt="Logo" 
    />
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block lg:hidden cursor-pointer" 
      src="/images/logo.png" 
      height="80" 
      width="160" 
      alt="Logo" 
    />
    </>
   );
}
 
export default Logo;
