import React from "react";
import Aution from "./Aution";
import One from "./Image/Component 4.png";
import Two from "./Image/Component 5.png";
import Three from "./Image/Component 6.png";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div>
      <section className="sec">
        <div className="flex justify-center sm:gap-2 flex-wrap sm:flex-nowrap">
          <div className="group mt-4  sm:w-2/6">
            <img src={One} alt="" className="w-full" />
            <div className="flex justify-between -mt-14 px-4  duration-300  transition-all opacity-0  group-hover:opacity-100 ">
              <span>
                <h1 className="text-2xl font-thin">Ox heritage</h1>{" "}
                <p>This piece was ispired by .....</p>
              </span>
              <span>
                {" "}
                <p>Last bid</p> <p className="text-xl font-thin">0.007 ETH</p>{" "}
              </span>
            </div>
          </div>

          <div className="group mt-4  sm:w-2/6">
            <img src={Two} alt="" className="w-full" />
            <div className="flex justify-between -mt-14 px-4  duration-300  transition-all opacity-0 group-hover:opacity-100 ">
              <span>
                <h1 className="text-2xl font-thin">Inferiority Complex</h1>{" "}
                <p>This piece was ispired by .....</p>
              </span>
              <span>
                {" "}
                <p>Last bid</p> <p className="text-xl font-thin">0.007 ETH</p>{" "}
              </span>
            </div>
          </div>
          <div className="group mt-4 sm:w-2/6">
            <img src={Three} alt="" className="w-full" />
            <div className="flex justify-between -mt-14 px-4  duration-300  transition-all opacity-0 group-hover:opacity-100 ">
              <span>
                <h1 className="text-2xl font-thin">Afro-Influx</h1>{" "}
                <p>This piece was ispired by .....</p>
              </span>
              <span>
                {" "}
                <p>Last bid</p> <p className="text-xl font-thin">0.007 ETH</p>{" "}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="global see">
        <summary className="flex gap-10 items-center ">
          <hr
            style={{
              width: "10%",
              color: "white",
              fontWeight: "900",
              marginTop: "2%",
            }}
          />

          <motion.div>
            <motion.p
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 5 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl text-center font-bold"
            >
              Africa pioneers the realm of digital tourism, offering you a
              passport to explore Africa's wonders remotely
            </motion.p>
          </motion.div>
          <hr
            style={{
              width: "10%",
              color: "white",
              fontWeight: "900",
              marginTop: "-2%",
            }}
          />
        </summary>
      </section>
      <Aution />
    </div>
  );
}

export default Intro;
