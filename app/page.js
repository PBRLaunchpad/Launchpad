import Image from 'next/image' 
import { Menu } from '@/componets/Menu'
import { Hero } from '@/componets/Hero'
import { Card } from '@/componets/Card'
import { Features } from '@/componets/Features'
import { Faq } from '@/componets/Faq'
import { Apply } from '@/componets/Apply'
import { Mail } from '@/componets/Mail'
import { Footer } from '@/componets/Footer'

// import { Features } from '@/componets/Faq'
import "./globals.css"



export default function Home() {
  return (
    <>
      <Menu />
      <Hero/>
      <Card/>
      <Features/>
      <Faq/>
      <Apply/>
      <Mail/>
      <Footer/>
    </>
  )
}
