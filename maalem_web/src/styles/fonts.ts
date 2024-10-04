import localFont from 'next/font/local'

export const cabinetGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/CabinetGrotesk-Extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-cabinet-grotesk',
})

export const geistMono = localFont({
  src: '../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  style: 'normal',
})

export const comico = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist',
  weight: '100 900',
  style: 'normal',
})

export const geist = localFont({
  src: '../../public/fonts/GeistVF.woff',
  variable: '--font-geist',
  weight: '100 900',
  style: 'normal',
})
