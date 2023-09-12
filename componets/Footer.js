import React from 'react'
import '../style/footer.css'
import Image from 'next/image'
import Logo from '@/public/home/logo.png'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='item_container'> 
                <h1>Product</h1>
                <ul>
                    <li>IDO Launchpad</li>
                    <li>NFT Marketplace</li>
                    <li>Yield farming</li>
                    <li>Airdrop</li>
                </ul>
            </div>
            <div className='item_container'>
                <h1>Ubex</h1>
                <ul>
                    <li>Theme Features</li>
                    <li>Robust Coding</li>
                    <li>Lioght Weight</li>
                    <li>Compare to others</li>
                </ul>
            </div>
            <div className='item_container'>
                <h1>About</h1>
                <ul>
                    <li>Our Story</li>
                    <li>Our Team</li>
                    <li>Work With Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='item_container'>
                <h1>Community</h1>
                <ul>
                    <li>Twitter</li>
                    <li>Reddit</li>
                    <li>Telegram</li>
                    <li>Youtube</li>
                </ul>
            </div>
            <div className='item_container'>
                <h1>Legal</h1>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className='footer_buttom'>
            <div>
                <Image src={Logo}/>
            </div>
            <div>@2023 PRB</div>
            <div className='icon_container_'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={30} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
            </div>
        </div>
    </div>
  )
}
