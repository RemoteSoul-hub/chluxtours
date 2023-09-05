"use client";
import React, { useState, useEffect } from 'react';
import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  const [showCategories, setShowCategories] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      // Show Categories when scrolling up or at the top of the page
      setShowCategories(currentScrollPosition < 150);

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);
  return ( 
    <div className="fixed w-full bg-ternary z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
          border-primary
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
    </div>
    {/* <div className={`slide-up-down ${!showCategories ? 'hidden' : ''}`}> */}
        <Categories />
      {/* </div> */}
  </div>
  );
}


export default Navbar;