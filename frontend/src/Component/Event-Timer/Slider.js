import { AnimatePresence, motion, wrap } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import pic1 from '../Image/ivf1.png'
import pic2 from '../Image/ivf2.png'
import pic3 from '../Image/ivf3.png'
import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi";
import { ArticaTicketContract } from "../utils/contracts/contracts";
import ArticaTicket from "../utils/ABI/ArticaTicket.json";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Slider({days, minutes, seconds, hours}) {


  //THE ANIMATION
    const [image, setImage] = useState(0)

    const [imageArray, setImageArray] = useState([
      {
        image: pic1,
        title: "  IVF '23 : The Agbero artform",
        min: minutes,
        day: days,
        sec: seconds,
        hours: hours,
        button: "Mint ticket"
      }, 
      {
        image: pic2,
        title: "IVF '24 : Infinite thoughts",
        min: minutes,
        day: days,
        sec: seconds,
        hours: hours,
        button: "Mint ticket"
      },
      {
        image: pic3,
        title: "IVF '25 : Deep rooted NFT",
        min: minutes,
        day: days,
        sec: seconds,
        hours: hours,
        button: "Mint ticket"
      }
    ])

    useEffect(() => {
        const Interval = setInterval(() => {
          setImage((prevIndex) => (prevIndex + 1) % imageArray.length )
        }, 11000);
    
        return() => clearInterval(Interval)
      }, [imageArray.length])
    
     
    
      const CurrentImage = imageArray[image]



      // THE MINT TICKET BUTTON
      const { address } = useAccount();
      // console.log(address);
    
      const notify = () => {
        return !!address
          ? !!error
            ? toast("Failed!")
            : null
          : toast("Please connect wallet...");
      };
    
      // mint ticket func
      const { config } = usePrepareContractWrite({
        address: ArticaTicketContract,
        abi: ArticaTicket,
        functionName: "mint",
      });
    
      const { isLoading, write, isError, error } = useContractWrite(config);





  return (
    <div className='bLast'>
    <AnimatePresence initial={false}> 

    <motion.div  style={
        {
           "backgroundImage" : `url(${CurrentImage.image})`,
          " width": "100%",
          "height": "35vh",
           "background-size": "cover",
           "padding": "40px",
           "display": "flex",
           transition: "ease 10000ms",
           "justify-content": "space-between"
        }
    } 
 >
        <motion.div>
        <AnimatePresence>
        <motion.h1
        initial={{ y:40, opacity: 0 }} whileInView={{ y:0, opacity: 1 }} exit={{opacity: 0}}  transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 2 }}
        className="text-2xl font-extrabold  sm:text-3xl sm:mt-10 ease-out">
          {CurrentImage.title}
        </motion.h1>
        </AnimatePresence>


        <div>
        <samp className="flex gap-2 leading-5 pt-4">
        <form className="border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl">
          <h1 className="text-base font-bold  sm:text-xl">{days}</h1>
          <p>days</p>
        </form>
        <form className="border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl">
          <h1 className="text-base font-bold  sm:text-xl">{hours}</h1>
          <p>hours</p>
        </form>
        <form className="border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl">
          <h1 className="text-base font-bold sm:text-xl">{minutes}</h1>
          <p>mins</p>
        </form>
        <form className="border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl">
          <h1 className="text-base font-bold  sm:text-xl">{seconds}</h1>
          <p>secs</p>
        </form>
      </samp> 
        </div>
    </motion.div>





    <div className="mt-32 sm:mt-24">
    <span>
      <button
        // disabled={!write}
        onClick={() => {
          notify?.();
          write?.();
        }}
        className="bg-slate-300 cursor-pointer  text-base text-black  px-5 py-2 md:px-7 md:py-3 rounded-2xl hover:text-white hover:bg-gradient-to-r from-[#9747ff] to-[#ff0000]"
      >
        {isLoading ? (
          <ColorRing
            visible={true}
            height="30"
            width="30"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={[
              "#e15b64",
              "#f47e60",
              "#f8b26a",
              "#abbd81",
              "#849b87",
            ]}
          />
        ) : (
         `${CurrentImage.button}`
        )}
      </button>
    </span>
  </div>


    </motion.div>
    </AnimatePresence>
      
    </div>
  )
}

export default Slider