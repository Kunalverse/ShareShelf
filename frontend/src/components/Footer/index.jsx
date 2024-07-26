import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex w-full justify-between p-5 bg-gray-400 mt-2'>
        <div>
            <div className='font-bold'>COMPANY</div>
            <div>About us</div>
            <div>Careers</div>
            <div>Terms</div>
            <div>Privacy</div>
            <div>Help</div>
        </div>
        <div>
            <div className='font-bold'>WORK WITH US</div>
            <div>Authors</div>
            <div>Advertise</div>
            <div>Authors & ads blog</div>
        </div>
        <div>
            <div className='m-1 font-bold'>CONNECT</div>
            <div className='flex'>
            <div className='p-2 bg-green-400 rounded-2xl mx-2 '><FaFacebookF /></div>
            <div className='p-2 bg-green-400 rounded-2xl mx-2'><FaTwitter /></div>
            <div className='p-2 bg-green-400 rounded-2xl mx-2'><FaInstagram /></div>
            <div className='p-2 bg-green-400 rounded-2xl mx-2'><FaLinkedinIn /></div>
            </div>
        </div>
        <div >
        <h1 className="text-5xl italic font-bold text-gray-600 text-center m-auto">
          Share<span className="text-green-500">Shelf</span>
        </h1>
        </div>
    </div>
  )
}

export default Footer