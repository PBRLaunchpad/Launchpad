import React from 'react'
import '../style/mail.css'
import Image from 'next/image'
import Image_1 from '../public/home/mail_img_1.png'
import Image_2 from '../public/home/mail_img_2.png'
import Image_3 from '../public/home/mail_img_3.png'

export const Mail = () => {
  return (
    <div className='mail_container'>
        <div className='mail_div'>
            <Image src={Image_1} className='img_1'/>
            <div className='mail_sub_div'>
                <div className='mail_sample_div'>
                  <h1>Sign up for our newsletter and get the latest news and updates</h1>
                  <div className='input_div'>
                      <input type="email" placeholder="Enter your email to get daily updates" />
                      <button>Submit</button>
                  </div>
                </div>
            </div>
            <Image src={Image_2} className='img_2'/>
            <Image src={Image_3} className='img_3'/>
        </div>
    </div>
  )
}
