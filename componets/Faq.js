import React from 'react'
import Style_1 from '../public/home/style_1.png'
import Image from 'next/image'
import '@/style/faq.css'
import { FaPlus } from 'react-icons/fa';

export const Faq = () => {
    const generate_faq = () => {
        let faq=[]
        for(let i=0;i<8;i++){
            faq.push(
                <div className='faq_items'>
                    <div className='faq_items1'><b>Q: What is the purpose of this website?</b><FaPlus /></div>
                    <hr/>
                </div>
            )
        }
        return faq;
    }
  return (
    <div className='faq'>
        <div className='head_tag'>
            <Image src={Style_1}/>
            <h1>Frequently Asked Questions</h1>
        </div>
        <div className='faq_content'>
                {generate_faq()}
        </div>
    </div>
  )
}
