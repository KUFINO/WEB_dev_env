import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "../styles/globals.css";
import { cabinetGrotesk, cabinetGroteskBlack, comico } from '../styles/fonts.ts'

export const metadata: Metadata = {
  title: "Kufino",
  description: "Connect people with professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cabinetGrotesk.variable} ${cabinetGroteskBlack.variable} ${comico.variable}`}>
      <body className="antialiased font-main">
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
