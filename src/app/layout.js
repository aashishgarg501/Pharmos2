import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pharmos',
  description: 'An Express Medicine Delivery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <head>
     <link rel="stylesheet" href="https://your-cdn-link-for-simplon-norm"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha384-df9cOy4e65FFOWqAKaaFSta7R/O5P1g7kjfbbsDEqn9vq4sF4FdrJlrH+3clnca"
       crossorigin="anonymous"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></Script>
   </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
