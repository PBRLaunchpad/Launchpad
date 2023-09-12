import React from 'react'
import '@/style/hero.css'
import Home_img from "../public/home_image.png"
import Side_Style from "../public/side_style.png"
import Tost_Style from "../public/home/tost_style.png"
import { RiArrowRightSLine } from 'react-icons/ri';
import Image from 'next/image'
// import ScrollEffect from 'react-scroll-effects';

export const Hero = () => {
  return (
    <div className='container'>
        <section>
            <div className='cont'>
                <div className='left'>
                    <div className='bg_style'>
                        <Image src={Side_Style} />
                    </div>
                    <div className='content'>
                        <h1>Decentralised launchpad for <span>BLOCKCHAIN</span> Projects.</h1>
                    </div>
                    <div>
                        <p>Empowering decentralized dreams to become reality through our Web3 launchpad.</p>
                        <p>Launching the next era of decentralized applications with our Web3 launchpad.</p>
                    </div>
                    <div className='button_container'>
                        <button className='button_style btn_active'>Explore</button>
                        <button className='button_style'>View Product <RiArrowRightSLine style={{marginLeft:"10px"}} /></button>
                    </div>
                </div>
                <div className='right'>
                    <Image src={Home_img}/>
                </div>
            </div>
            <div className='tost_line'>
                <Image src={Tost_Style}/>
                <div><p>Total Projects Launched</p><h3>1600</h3></div>
                <div><p>Total Projects Launched</p><h3>50</h3></div>
                <div><p>Total Projects Launched</p><h3>50</h3></div>
            </div>
        </section>
    </div>
  )
}
