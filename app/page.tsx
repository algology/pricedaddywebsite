import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import heroImage from "@/public/hero.png";
import daysOnMarket from "../public/daysOnMarketImage.png";
import costpersqmImage from "../public/costpersqmImage.png";
import viewsImage from "../public/viewsImage.png";
import walkScoreImage from "../public/walkscore.png";
import transitScoreImage from "../public/transitscore.png";

export default function Home() {
  return (
    <main className="w-full h-auto">
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
            <div className="scale-[2] absolute top-[35%] left-[10%]">
              <div className="w-3 h-3 bg-[#E9AAFF] rounded-full"></div>
            </div>
            <div className="scale-[1] absolute top-[15%] left-[70%]">
              <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
            </div>
            <div className="scale-[1] absolute top-[15%] left-[90%]">
              <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
            </div>
            <div className="scale-[0.75] absolute top-[15%] left-[10%]">
              <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
            </div>
            <div className="scale-[0.5] absolute top-[20%] left-[10%]">
              <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
            </div>
            <div className="scale-[1] absolute top-[5%] left-[90%]">
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
            <div className="flex place-items-center gap-5">
              <Link
                href="https://chromewebstore.google.com/detail/price-daddy/aaafhonbegjjedhpomjjjpodjaakdbfc"
                target="_blank"
              >
                <button className="max-w-auto bg-white hover:bg-[#fafafa] md:text-[22px] text-[16px] font-semibold border rounded-full border-[#000] border-opacity-10 py-[20px] px-[40px] sm:py-[28px] sm:px-[68px] flex items-center justify-center">
                  Download for Chrome
                </button>
              </Link>
              <Link
                href="https://addons.mozilla.org/en-US/firefox/addon/pricedaddyapp/"
                target="_blank"
              >
                <button className="max-w-auto bg-white hover:bg-[#fafafa] md:text-[22px] text-[16px] font-semibold border rounded-full border-[#000] border-opacity-10 py-[20px] px-[40px] sm:py-[28px] sm:px-[68px] flex items-center justify-center relative">
                  <span>Download for Firefox</span>
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

      <div className="bg-[#F9F9F9]">
        <section className="w-full max-w-7xl mx-auto sm:py-36 py-20 px-5 sm:px-2">
          <div className="flex flex-col sm:gap-10 gap-5 pb-10">
            <h1 className="md:text-[80px] sm:text-[64px] text-[36px] font-[700] text-black sm:leading-[100%] leading-[120%] max-w-3xl">
              With the power of AI, just kidding there&apos;s no AI.
            </h1>
            <p className="md:text-[20px] text-[16px] leading-[150%] max-w-xl text-[#666666]">
              PriceDaddy! provides detailed price information to help you make
              informed decisions when buying or selling a property. In addition
              to price guides find out:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-10">
            <div className="w-full h-auto rounded-2xl flex flex-col justify-between gap-5 p-10 bg-white shadow-lg">
              <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                  <Image
                    src={daysOnMarket}
                    alt="Days on Market"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
              <div>
                <p className="text-black md:text-[20px] text-[18px] font-bold leading-[150%]">
                  Days on Market
                </p>
                <p className="text-[#666666] md:text-[16px] text-[14px] leading-[150%]">
                  See how long a property has been listed on the market.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-2xl flex flex-col justify-between gap-5 p-10 bg-white shadow-lg">
              <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                  <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                    <Image
                      src={viewsImage}
                      alt="Page views image"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-black md:text-[20px] text-[18px] font-bold leading-[150%]">
                  Page Views
                </p>
                <p className="text-[#666666] md:text-[16px] text-[14px] leading-[150%]">
                  Discover how much attention a listing is receiving.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-2xl flex flex-col justify-between gap-5 p-10 bg-white shadow-lg">
              <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                  <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                    <Image
                      src={costpersqmImage}
                      alt="cost per sqm image"
                      width={160}
                      height={160}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-black md:text-[20px] text-[18px] font-bold leading-[150%]">
                  Cost per Square Metre
                </p>
                <p className="text-[#666666] md:text-[16px] text-[14px] leading-[150%]">
                  Compare the price per square metre across different
                  properties.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-black md:text-[24px] text-[20px] font-bold leading-[150%] text-center p-10">
            Features coming soon!
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <div className="w-full h-auto rounded-2xl flex flex-col justify-between gap-5 p-10 bg-white shadow-lg">
              <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                <Image
                  src={walkScoreImage}
                  alt="Walk Score"
                  width={160}
                  height={160}
                />
              </div>
              <div>
                <p className="text-black md:text-[20px] text-[18px] font-bold leading-[150%]">
                  Walk Score
                </p>
                <p className="text-[#666666] md:text-[16px] text-[14px] leading-[150%]">
                  See the walkability score of a property.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-2xl flex flex-col justify-between gap-5 p-10 bg-white shadow-lg">
              <div className="w-full sm:h-[200px] h-[150px] grid place-items-center">
                <Image
                  src={transitScoreImage}
                  alt="Transit Score"
                  width={160}
                  height={160}
                />
              </div>
              <div>
                <p className="text-black md:text-[20px] text-[18px] font-bold leading-[150%]">
                  Transit Score
                </p>
                <p className="text-[#666666] md:text-[16px] text-[14px] leading-[150%]">
                  Find out the transit score of a property.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#F9F9F9] py-12">
        <section className="w-full max-w-7xl mx-auto px-5 sm:px-2">
          <div className="pb-10 w-auto">
            <div className="block">
              <div className="sm:p-10 p-5 w-full rounded-full bg-white flex flex-row gap-3 justify-center">
                <Image src={logo} alt="Logo" width={45} height={45} />
                <Image src={logo} alt="Logo" width={45} height={45} />
                <Image src={logo} alt="Logo" width={45} height={45} />
                <Image src={logo} alt="Logo" width={45} height={45} />
                <Image src={logo} alt="Logo" width={45} height={45} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 py-20">
            <div className="flex sm:flex-row sm:gap-0 flex-col gap-5 justify-between items-baseline">
              <h1 className="md:text-[80px] sm:text-[64px] text-[36px] font-[700] text-black sm:leading-[100%] leading-[120%] max-w-3xl">
                A few more nice things people say about PriceDaddy!
              </h1>
              <div className="flex flex-col gap-3 justify-center">
                <div className="flex flex-row gap-1 justify-center">
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
                <p>Over 1000 Users, 5 star review on Google</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="w-full h-auto text-[#666666] box-shadow bg-[#fff] rounded-2xl sm:p-10 p-5 md:text-[24px] sm:text-[20px] text-[16px] leading-[150%] flex flex-col gap-4">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9589 17.6654C10.9589 18.7021 10.5961 19.5704 9.87034 20.2702C9.1446 20.97 8.23744 21.3199 7.14884 21.3199C6.11208 21.3199 5.23083 20.9182 4.5051 20.1147C3.77937 19.3112 3.4165 18.3004 3.4165 17.0822C3.4165 16.2009 3.6109 15.229 3.99968 14.1663C4.41439 13.1036 4.94573 12.028 5.5937 10.9394C6.26759 9.85077 7.01925 8.77513 7.84865 7.71246C8.70398 6.62386 9.55931 5.61302 10.4146 4.67993L11.4644 5.53526C10.298 6.90897 9.32604 8.29563 8.54847 9.69526C7.7709 11.0949 7.30435 12.4686 7.14884 13.8164C8.1856 13.8941 9.07981 14.2829 9.83146 14.9827C10.5831 15.6825 10.9589 16.5768 10.9589 17.6654ZM22.1171 17.6654C22.1171 18.7021 21.7542 19.5704 21.0285 20.2702C20.3027 20.97 19.3956 21.3199 18.307 21.3199C17.2702 21.3199 16.389 20.9182 15.6632 20.1147C14.9375 19.3112 14.5746 18.3004 14.5746 17.0822C14.5746 16.2009 14.769 15.229 15.1578 14.1663C15.5725 13.1036 16.1039 12.028 16.7518 10.9394C17.4257 9.85077 18.1774 8.77513 19.0068 7.71246C19.8621 6.62386 20.7174 5.61302 21.5728 4.67993L22.5836 5.53526C21.4173 6.90897 20.4453 8.29563 19.6677 9.69526C18.9161 11.0949 18.4625 12.4686 18.307 13.8164C19.3437 13.8941 20.2379 14.2829 20.9896 14.9827C21.7412 15.6825 22.1171 16.5768 22.1171 17.6654Z"
                    fill="#333333"
                  ></path>
                </svg>
                <p>
                  PriceDaddy! has been a game-changer for me when searching for
                  properties. The extra price information is incredibly
                  valuable.
                </p>
              </div>
              <div className="w-full h-auto text-[#666666] box-shadow bg-[#fff] rounded-2xl sm:p-10 p-5 md:text-[24px] sm:text-[20px] text-[16px] leading-[150%] flex flex-col gap-4">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9589 17.6654C10.9589 18.7021 10.5961 19.5704 9.87034 20.2702C9.1446 20.97 8.23744 21.3199 7.14884 21.3199C6.11208 21.3199 5.23083 20.9182 4.5051 20.1147C3.77937 19.3112 3.4165 18.3004 3.4165 17.0822C3.4165 16.2009 3.6109 15.229 3.99968 14.1663C4.41439 13.1036 4.94573 12.028 5.5937 10.9394C6.26759 9.85077 7.01925 8.77513 7.84865 7.71246C8.70398 6.62386 9.55931 5.61302 10.4146 4.67993L11.4644 5.53526C10.298 6.90897 9.32604 8.29563 8.54847 9.69526C7.7709 11.0949 7.30435 12.4686 7.14884 13.8164C8.1856 13.8941 9.07981 14.2829 9.83146 14.9827C10.5831 15.6825 10.9589 16.5768 10.9589 17.6654ZM22.1171 17.6654C22.1171 18.7021 21.7542 19.5704 21.0285 20.2702C20.3027 20.97 19.3956 21.3199 18.307 21.3199C17.2702 21.3199 16.389 20.9182 15.6632 20.1147C14.9375 19.3112 14.5746 18.3004 14.5746 17.0822C14.5746 16.2009 14.769 15.229 15.1578 14.1663C15.5725 13.1036 16.1039 12.028 16.7518 10.9394C17.4257 9.85077 18.1774 8.77513 19.0068 7.71246C19.8621 6.62386 20.7174 5.61302 21.5728 4.67993L22.5836 5.53526C21.4173 6.90897 20.4453 8.29563 19.6677 9.69526C18.9161 11.0949 18.4625 12.4686 18.307 13.8164C19.3437 13.8941 20.2379 14.2829 20.9896 14.9827C21.7412 15.6825 22.1171 16.5768 22.1171 17.6654Z"
                    fill="#333333"
                  ></path>
                </svg>
                <p>
                  I love how easy PriceDaddy! makes it to compare prices and see
                  how long a property has been on the market. It&apos;s a
                  must-have tool!
                </p>
              </div>
              <div className="w-full h-auto text-[#666666] box-shadow bg-[#fff] rounded-2xl sm:p-10 p-5 md:text-[24px] sm:text-[20px] text-[16px] leading-[150%] flex flex-col gap-4">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9589 17.6654C10.9589 18.7021 10.5961 19.5704 9.87034 20.2702C9.1446 20.97 8.23744 21.3199 7.14884 21.3199C6.11208 21.3199 5.23083 20.9182 4.5051 20.1147C3.77937 19.3112 3.4165 18.3004 3.4165 17.0822C3.4165 16.2009 3.6109 15.229 3.99968 14.1663C4.41439 13.1036 4.94573 12.028 5.5937 10.9394C6.26759 9.85077 7.01925 8.77513 7.84865 7.71246C8.70398 6.62386 9.55931 5.61302 10.4146 4.67993L11.4644 5.53526C10.298 6.90897 9.32604 8.29563 8.54847 9.69526C7.7709 11.0949 7.30435 12.4686 7.14884 13.8164C8.1856 13.8941 9.07981 14.2829 9.83146 14.9827C10.5831 15.6825 10.9589 16.5768 10.9589 17.6654ZM22.1171 17.6654C22.1171 18.7021 21.7542 19.5704 21.0285 20.2702C20.3027 20.97 19.3956 21.3199 18.307 21.3199C17.2702 21.3199 16.389 20.9182 15.6632 20.1147C14.9375 19.3112 14.5746 18.3004 14.5746 17.0822C14.5746 16.2009 14.769 15.229 15.1578 14.1663C15.5725 13.1036 16.1039 12.028 16.7518 10.9394C17.4257 9.85077 18.1774 8.77513 19.0068 7.71246C19.8621 6.62386 20.7174 5.61302 21.5728 4.67993L22.5836 5.53526C21.4173 6.90897 20.4453 8.29563 19.6677 9.69526C18.9161 11.0949 18.4625 12.4686 18.307 13.8164C19.3437 13.8941 20.2379 14.2829 20.9896 14.9827C21.7412 15.6825 22.1171 16.5768 22.1171 17.6654Z"
                    fill="#333333"
                  ></path>
                </svg>
                <p>
                  As a real estate investor, PriceDaddy! has become an essential
                  part of my toolkit. It saves me so much time and helps me make
                  informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative w-full max-w-7xl mx-auto px-5 sm:px-2 justify-center py-20">
        <h1 className="md:text-[116px] sm:text-[80px] text-[42px] font-[700] text-black sm:leading-[100%] leading-[120%] text-center pt-20">
          Beat the sugar daddies. Get PriceDaddy!
        </h1>
        <div className="w-full grid place-items-center p-12">
          <Link
            href="https://chromewebstore.google.com/detail/price-daddy/aaafhonbegjjedhpomjjjpodjaakdbfc"
            target="_blank"
          >
            <button className="max-w-auto bg-white hover:bg-[#fafafa] md:text-[22px] text-[16px] font-semibold border rounded-full border-[#000] border-opacity-10 py-[30px] px-[50px] sm:py-[38px] sm:px-[68px]">
              Get PriceDaddy! now
            </button>
          </Link>
        </div>

        <div className="scale-[2] absolute top-[15%] left-[15%]">
          <div className="w-3 h-3 bg-[#E9AAFF] rounded-full"></div>
        </div>
        <div className="scale-[1] absolute top-[12%] left-[70%]">
          <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
        </div>
        <div className="scale-[1] absolute top-[10%] left-[80%]">
          <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
        </div>
        <div className="scale-[0.75] absolute top-[5%] left-[5%]">
          <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
        </div>
        <div className="scale-[0.5] absolute top-[15%] left-[10%]">
          <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
        </div>
        <div className="scale-[1] absolute top-[5%] left-[90%]">
          <div className="w-3 h-3 bg-[#68AEFF] rounded-full"></div>
        </div>
      </section>

      <div className="flex justify-center">
        <Image
          src={logo}
          alt="Logo"
          width={620}
          height={427}
          className="dark:rotate-0 transition-all antialiased"
        />
      </div>
      <footer className="w-full h-[70px] border-t border-black border-opacity-20 py-5 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row gap-10 justify-center items-center">
            <div className="flex flex-row gap-4">
              <p className="text-sm">Made with spite in Adelaide</p>
            </div>
            <div className="flex flex-row gap-10 items-center">
              <a href="mailto:pricedaddyapp@gmail.com" className="text-sm">
                Get in touch
              </a>
              {/* Insert the new Ko-fi widget script here */}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<script type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>kofiwidget2.init('Support this', '#ff914dff', 'I3I1YBHSG');kofiwidget2.draw();</script>",
                }}
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
