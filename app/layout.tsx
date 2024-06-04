import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>
          PriceDaddy - Detailed Property Information for Australian House Buyers
        </title>
        <meta
          name="description"
          content="PriceDaddy! helps Australian house buyers get more detailed property information on realestate.com.au listings. Get insights on NBN connection, price guides, walkability scores, transit scores, days on market, and popularity of listings."
        />
      </Head>
      <html lang="en">
        <head>
          <title>
            PriceDaddy - Detailed Property Information for Australian House
            Buyers
          </title>
          <meta
            name="description"
            content="PriceDaddy! helps Australian house buyers get more detailed property information on realestate.com.au listings. Get insights on NBN connection, price guides, walkability scores, transit scores, days on market, and popularity of listings."
          />
        </head>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
