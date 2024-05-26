"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/90 bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center py-4 max-w-7xl">
        <div className="flex items-center">
          <Link href="/" className="flex items-center logo-animation">
            <button className="hover:bg-transparent">
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="dark:rotate-0 transition-all antialiased"
              />
            </button>
            <span className="ml-2 font-bold lg:text-3xl text-lg px-2">
              PriceDaddy!
            </span>
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div>
          <Link href="https://chromewebstore.google.com/detail/price-daddy/aaafhonbegjjedhpomjjjpodjaakdbfc">
            <button className="max-w-auto bg-black text-white text-[16px] font-medium border rounded-full sm:py-[20px] sm:px-[68px] py-[5px] px-[30px]">
              Get it
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
