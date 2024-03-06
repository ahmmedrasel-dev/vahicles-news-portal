import { Roboto_Slab, Poppins, Abril_Fatface} from 'next/font/google'
 
export const roboto = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export const abril = Abril_Fatface({
  subsets: ['latin'],
  display: 'swap',
  weight : ['400'],
  variable: '--font-abril-logo',
})
 
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight : ['400', '500', '700'],
  variable: '--font-poppins'
})