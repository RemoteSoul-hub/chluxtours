import { Playfair_Display } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';

import ToasterProvider from '@/app/providers/ToasterProvider';

import '../globals.css'
import ClientOnly from '../components/ClientOnly';
import getCurrentUser from '../actions/getCurrentUser';
import Banner from '../components/Banner';
import Footer from '../components/footer/Footer'

export const metadata = {
  title: 'CH Luxtours',
  description: 'Chluxtours - Réservation de véhicules',
}

const font = Playfair_Display({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {/* <div className="pt-40">
           <Banner />
        </div> */}
        <div className="pb-20 bg-gradient-to-b from-ternary from-10% to-black to-90%">
          {children}
        </div>
        <ClientOnly>
          <Footer/>
        </ClientOnly>
      </body>
    </html>
  )
}
