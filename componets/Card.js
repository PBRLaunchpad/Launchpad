import React from 'react'
import '@/style/card.css'
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa'
export const Card = () => {
    const card_ele =()=>{
        let a = []
        for(let i=0;i<12;++i){
            a.push(<div className='card_container'>
            <div className='img_container'>
                <img src='https://blog.thirdweb.com/content/images/2023/01/The-Complete-Guide-to-Crypto-Cryptocurrency-Wallets-in-Web3-and-Blockchain-Space-thirdweb.png'/>
            </div>
            <div className='card_content'>
                <img src='https://watcher.guru/news/wp-content/uploads/2023/03/ad75b7b113ac422080d6ce73d379de6e-800x450.jpg.webp'/>
                <h4>heading</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='card_total'>
                    <p>Total Raised :</p>
                    <p style={{color:"#de5db6",fontWeight:"bold"}}>$12,0000</p>
                </div>
                <div className='card_total'>
                    <p>Participant :</p>
                    <p>12</p>
                </div>
            </div>
        </div>)
        }
        return (a)
    }
  return (
    <div className='card'>
        <div className='card_right'>
            <p>Invest in promising</p>
            <h1 style={{marginTop: "-2px"}}>
                UBEX Projects
            </h1>
            <button>View All</button>
        </div>
        <div className='card_left'>
            <div className='card_top'>
                <div className='card_to_btns'>
                    <button className='active_btn' data="Upcoming">Upcoming</button>
                    <button className='sbtn' data="Past Projects">Past Projects</button>
                </div>
                <div className='lr_btn'>
                    <button><FaAngleLeft/></button>
                    <button className='lr_active'><FaAngleRight/></button>
                </div>
            </div>
            <div className='collections'>
                <div className='scroller'>
                    {card_ele()}
                </div>
            </div>

        </div>
    </div>
  )
}
