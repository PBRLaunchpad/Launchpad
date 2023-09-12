"use client";

import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/home/logo.png'
import '@/style/menu.css'
import { FaHome, FaTimes, FaPoll, FaChartLine, FaBriefcase, FaQuestionCircle, FaWallet } from 'react-icons/fa';

export const Menu = () => {
    let menu_controller = 0;
    let icon = 0;
  return (
    <div>
        <div className='side_menu' id="side_menu">
            <div className='close'  onClick={()=>{
                        if(menu_controller%2 == 0){
                            let obj = document.getElementById("side_menu");
                            obj.style.transform="translateX(0px)"
                        }else{
                            let obj = document.getElementById("side_menu");
                            obj.style.transform="scaleY(0.1) translateY(-356px)"
                            obj.style.transform="translateX(-356px)"
                            let btn = document.getElementById("menu_btn");
                            btn.src = "https://simg.nicepng.com/png/small/14-147111_menu-button-png-menu-button-icon-png.png";
                        }
                        menu_controller++;
                    }}>
                <FaTimes />
            </div>
            <div className='profile'>
                <img src='https://pbs.twimg.com/media/FDDQ2STUcAM1YtM.jpg'/>
                <div className='profile_details'>
                    <p>Address</p>
                    <p>Balance</p>
                </div>
            </div>
            <hr/>
            <div className='links'>
                <Link href='/' className='active_menu'><FaHome /> Home</Link>
                <Link href='/pools'><FaPoll /> Pools</Link>
                <Link href='/staking'><FaChartLine /> Staking</Link>
                <Link href='/careers'><FaBriefcase /> Careers</Link>
                <Link href='/faq'><FaQuestionCircle /> FAQs</Link>
                <hr/>
                <Link className='wallet' href='/faq'><FaWallet /> Connect wallet</Link>
            </div>
        </div>
        <nav className='menu'>
            <div>
                <Image src={Logo}/>
            </div>
                <div className='center_menu' id="center_menu">
                    <Link href='/' className='active_menu' >Home</Link>
                    <Link href='/pools' >Pools</Link>
                    <Link href='/staking' >Staking</Link>
                    <Link href='/careers' >Careers</Link>
                    <Link href='/faq' >FAQs</Link>
                </div>
                <div>
                    <button className='menu_btn sky-500' onClick={()=>{
                        let btn = document.getElementById("menu_btn");
                        if(menu_controller%2 == 0){
                            btn.src = "https://png.pngitem.com/pimgs/s/30-302597_menu-menu-png-icon-transparent-png.png";
                            let obj = document.getElementById("side_menu");
                            obj.style.transform="translateX(0px)"
                        }else{
                            let obj = document.getElementById("side_menu");
                            btn.src = "https://simg.nicepng.com/png/small/14-147111_menu-button-png-menu-button-icon-png.png";
                            obj.style.transform="scaleY(0.1) translateY(-356px)"
                            obj.style.transform="translateX(-356px)"
                        }
                        menu_controller++;
                        console.log(icon,"icon");
                    }}><img id="menu_btn"  style={{width:"32px"}} src="https://simg.nicepng.com/png/small/14-147111_menu-button-png-menu-button-icon-png.png"/></button>
                    <button className='wallet1 active_btn' data="Connect wallet"><span></span>Connect wallet</button>
                </div>
        </nav>
    </div>
  )
}
