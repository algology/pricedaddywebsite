import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";
import heroImage from "../public/hero.png";
import kofiImage from "../public/kofi.png";

export default function Home() {
  return (
    <main className="w-full h-auto">
      <header className="w-full">
        <section className="w-full max-w-7xl mx-auto py-10 flex flex-row justify-between items-center px-5 sm:px-2">
          <svg
            width="98"
            height="33"
            viewBox="0 0 98 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content */}
          </svg>
        </section>
      </header>
      <div className="relative">
        <div className="absolute z-[0] top-0 w-full h-full">
          <div className="w-full h-full hidden sm:block">
            <div className="scale-[0.5] rotate-12 absolute left-[5%]">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </div>
            <div className="scale-[0.4] rotate-[45deg] absolute top-[20%] left-[15%]">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </div>
            <div className="scale-[0.3] rotate-[45deg] absolute top-[10%] left-[90%]">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </div>
            <div className="scale-[0.4] rotate-[45deg] absolute top-[40%] left-[30%]">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </div>
            <div className="scale-[0.3] rotate-[-45deg] absolute top-[55%] left-[60%]">
              <svg
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </div>
            <div className="scale-[1] absolute top-[35%] left-[10%]">
              <div className="w-3 h-3 bg-[#E9AAFF] rounded-full"></div>
            </div>
            <div className="scale-[1] absolute top-[35%] left-[70%]">
              <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
            </div>
          </div>
        </div>
        <section className="w-full max-w-4xl mx-auto z-[10] relative">
          <div className="sm:mt-[150px] mt-[60px] grid place-items-center gap-4 sm:gap-10 sm:px-5 px-2">
            <h1 className="md:text-[116px] sm:text-[80px] text-[42px] font-[700] text-black sm:leading-[100%] leading-[120%] text-center">
              Reveal price information on any real estate listing.
            </h1>
            <div className="text-center max-w-md">
              <p className="md:text-[20px] text-[16px] leading-[150%] max-w-xl text-[#666666]">
                PriceDaddy! uncovers price information on any realestate.com.au
                property listing.
              </p>
            </div>
            <div className="grid place-items-center gap-5">
              <Link
                href="https://chromewebstore.google.com/detail/price-daddy/aaafhonbegjjedhpomjjjpodjaakdbfc"
                target="_blank"
              >
                <button className="max-w-auto bg-white hover:bg-[#fafafa] md:text-[22px] text-[16px] font-semibold border rounded-full border-[#000] border-opacity-10 py-[30px] px-[50px] sm:py-[38px] sm:px-[68px]">
                  Download for Chrome
                </button>
              </Link>
            </div>
          </div>
        </section>
        <div className="mt-10">
          <section className="w-full max-w-7xl mx-auto overflow-hidden">
            <div className="w-full grid place-items-center">
              <Image
                loading="lazy"
                decoding="async"
                src={heroImage}
                alt="Hero Image"
                width={1239}
                height={853}
              />
            </div>
          </section>
        </div>
      </div>

      <section className="w-full max-w-7xl mx-auto py-10 px-5 sm:px-2">
        <div className="flex gap-5 justify-between items-center">
          <h1 className="md:text-[80px] sm:text-[64px] text-[36px] font-[700] text-black sm:leading-[100%] leading-[120%] max-w-3xl">
            Days on market, page views and cost per square meter for every
            listing.
          </h1>
          <Image
            src={logo}
            alt="Logo"
            width={1239}
            height={853}
            className="dark:rotate-0 transition-all antialiased"
          />
        </div>
        <div className="flex flex-row gap-1 mt-4 justify-center">
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8533 0L19.5248 11.2998H31.4062L21.794 18.2835L25.4655 29.5834L15.8533 22.5997L6.24106 29.5834L9.9126 18.2835L0.300386 11.2998H12.1817L15.8533 0Z"
              fill="black"
            ></path>
          </svg>
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8533 0L19.5248 11.2998H31.4062L21.794 18.2835L25.4655 29.5834L15.8533 22.5997L6.24106 29.5834L9.9126 18.2835L0.300386 11.2998H12.1817L15.8533 0Z"
              fill="black"
            ></path>
          </svg>
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8533 0L19.5248 11.2998H31.4062L21.794 18.2835L25.4655 29.5834L15.8533 22.5997L6.24106 29.5834L9.9126 18.2835L0.300386 11.2998H12.1817L15.8533 0Z"
              fill="black"
            ></path>
          </svg>
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8533 0L19.5248 11.2998H31.4062L21.794 18.2835L25.4655 29.5834L15.8533 22.5997L6.24106 29.5834L9.9126 18.2835L0.300386 11.2998H12.1817L15.8533 0Z"
              fill="black"
            ></path>
          </svg>
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8533 0L19.5248 11.2998H31.4062L21.794 18.2835L25.4655 29.5834L15.8533 22.5997L6.24106 29.5834L9.9126 18.2835L0.300386 11.2998H12.1817L15.8533 0Z"
              fill="black"
            ></path>
          </svg>
        </div>
        <div className="flex justify-center">
          <p>5 star review on Google</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="md:text-[20px] text-[16px] leading-[150%] max-w-xl text-[#666666] py-6">
            With the power of AI, just kidding there&apos;s no AI.
          </p>
        </div>
      </section>

      <footer className="w-full h-[70px] border-t border-black border-opacity-20 py-5 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row gap-4 justify-between items-center">
            <div className="flex flex-row gap-4">
              <p className="text-sm">Made with spite in Adelaide</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <a href="mailto:pricedaddyapp@gmail.com" className="text-sm">
                Get in touch
              </a>
              <a
                href="https://ko-fi.com/pricedaddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Image
                  src={kofiImage}
                  alt="Ko-fi"
                  width={40}
                  height={27.6} // Maintaining aspect ratio
                />
                <span>Support</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
