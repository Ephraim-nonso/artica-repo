import React, { useState } from "react";
import Intro from "./Intro";
import Link from "./Image/ink-clip-art-ink-brush-.png";
import Paint from "./Image/paint-photography-desktop-wallpaper-black-and-white-splattered-spray.png";
import IntroPic from "./Image/Mask group.png";
import Explore from "./Explore";
import TrusUs from "./TrusUs";
import Revpopup from "./Revpopup";
import { motion } from "framer-motion";
import ConnectWallet from "./buttons/ConnectWallet";
import Search from "./inputs/Search";
import BrandLogo from "./brand/BrandLogo";

function Hero() {
  const [showRev, setShowRev] = useState(false);

  const ClosetheRev = () => setShowRev(false);

  const animation = {
    initial: { opacity: 0, y: 200, x: 30 },
    animate: { opacity: 1, x: 30, y: 5 },
  };
  return (
    <section>
      <header className="header">
        <section className="global">
          {/*Logo and Connect */}
          <section className="flex  justify-between  md:px-2 lg:px-12">
            <BrandLogo />

            <div className=" sm:flex sm:justify-between ">
              <div className="p-3 sm:flex gap-3 ">
                <Search />

                <ConnectWallet />
              </div>
            </div>
          </section>

          <section className="sect">
            <motion.div
              variants={animation}
              initial="initial"
              animate="animate"
              transition={{ duration: 1 }}
            >
              <div className="-ml-12 sm:ml-0">
                <img
                  src={IntroPic}
                  alt="mask"
                  className="w-[350px] sm:w-[600px]"
                />
                <p className="text-[18px] sm:text-[25px] mt-6 font-thin">
                  In the heart of every artifact lies a story waiting to be
                  told.
                </p>
                <p className="mt-7">
                  <button
                    onClick={() => setShowRev(true)}
                    className="border rounded-xl px-3 py-1 sm:px-5 sm:py-2 sm:rounded-2xl text-base bg-white text-black transition-all duration-300 hover:bg-transparent hover:text-white"
                  >
                    Join the Revolution
                  </button>
                </p>
              </div>
            </motion.div>
            <Revpopup onClose={ClosetheRev} visible={showRev} />
          </section>
        </section>

        <Intro />
      </header>
      <div className="flex pl-5 pt-[-60px]">
        <img src={Paint} alt="" className="-mt-12 -ml-10 " />
        <img src={Link} alt="" className="-mt-2 -ml-6 w-[250px] sm:w-full" />
      </div>

      <Explore />
      <TrusUs />
    </section>
  );
}

export default Hero;
