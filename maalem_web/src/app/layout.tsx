import type { Metadata } from "next";
import { Theme } from '@radix-ui/themes';
import localFont from "next/font/local";
import '../styles/globals.css';



const Cabinet = localFont({
  src: "./fonts/CabinetGrotesk-Regular.woff2",
  variable: "--font-Cabinet-sans",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Maalem",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Cabinet.variable}  antialiased`}
      >
        <Theme>

        {children}
        </Theme>

      </body>
    </html>
  );
}
