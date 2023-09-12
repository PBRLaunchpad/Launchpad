import React from 'react'
import '@/style/features.css'
import Image from 'next/image'
import Style_1 from '../public/home/style_1.png'
import Style_2 from '../public/home/style_2.png'
import Side_Style from "../public/side_style.png"

export const Features = () => {
    const generate_card = () =>{
        let arr = []
        for(let i=0;i<4;i++){
            arr.push(<div className='fcard'>
            <h2>Gold Lottery</h2>
            <p>Tier 1</p>
            <ul>
                <li><strong>$50,000</strong></li>
                <li>3x Prizes</li>
                <li>Winners are randomly selected by the system.</li>
                <li>No minimum bets or maximum limits. </li>
                <li>You can withdraw your winnings at any time after you have won a prize!</li>
            </ul>
            <button>Stake Now</button>
        </div>)
        }
        return arr;
    }
  return (
    <div>
        <div className='head_h1'>
            <Image src={Style_1} className='head_img1' />
            <h1>Here's our Top Features</h1>
            <div className='light'></div>
            <div className='style_1'>
                <Image src={Style_2}/>
            </div>
        </div>
        <div className='fcollections'>
            <Image src={Side_Style} className='image_style' />
            <div className='scroller_div'>
                <div className='cards_ele'>
                    {generate_card()}
                </div>
            </div>
        </div>
    </div>
  )
}
