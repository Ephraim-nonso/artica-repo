import React from 'react'
// import Img1 from '../Image/Auctionimg1.png'
// import Img2 from '../Image/Auctionig2.png'
import data from './img'
import { FaEye, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Auction() {
  return (
    <div>
        <section class='bg-black  px-12 py-20'>
            <div>
                <h1 class='text-3xl sm:text-4xl font-bold'>Live <span className='artica boy low'>Auction happening now </span></h1>
            </div>
            <section class='mt-10'>
                <div className='scroll' >
              {data.map( dat  => {
                return(
                    <div class='flex gap-4 mr-48'>
                    <div class='w-80'> <img src={dat.img} alt="" class=''/></div> 
                        <div class='border rounded-md px-10 py-4'>
                           <p class='text-2xl font-bold'>{`${dat.topic}`}</p>
                           <p class='flex gap-5 pt-2'>Art by<b>0x3b24...rd7a</b></p>
                            <div class='flex pt-6 gap-10'> <p class='flex'><FaEye /> 2300</p> <p class='flex'><FaHeart />1, 009</p></div>
                            <div class='flex justify-between pt-5 gap-10'>
                                <span>
                                    <p class='font-thin'>Current price</p>
                                    <h1 class='text-2xl'>{`${dat.cur}`}ETH</h1>
                                </span>
                                <span>
                                    <p class='font-thin'>Current price</p>
                                    <h1 class='text-2xl'>{`${dat.latest}`}ETH</h1>
                                </span>
                            </div>
                            <div class='flex justify-between pt-4'> <motion.p initial={{scale: 2}} whileTap={{scale: 4, color: "#850101",}}
                            transition={{duration: 0.5}}>
                            <FaHeart class='mt-2'/> 
                                </motion.p> <button class='px-5 py-2 rounded-xl bg-white text-black hover:bg-gradient-to-r from-[#9747ff] to-[#ff0000]'>Make a bid</button></div>
                        
                        </div>
                    </div>) })}

                </div>
            </section>
        </section>
    </div>
  )
}

export default Auction