"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/90 bg-background/40 backdrop-blur supports-\[backdrop-filter\]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4 max-w-7xl">
        <div className="flex items-center">
          <Link href="/" className="flex items-center logo-animation">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
            >
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
                className="dark:rotate-0 transition-all antialiased"
              />
            </Button>
            <span className="hidden ml-2 font-bold sm:inline-block">
              PriceDaddy!
            </span>
          </Link>
        </div>
        <div className="flex-grow"></div>
      </div>
    </header>
  );
};

export default Header;
