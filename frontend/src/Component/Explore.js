import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Artica from "./Image/Explore Artica.png";
import SecondSlide from "./SecondSlide";
import Slides from "./display/Slides";

function Explore() {
  const [selected, setSelected] = useState(0);
  const [slides, setSlides] = useState("All");

  const change = (slides) => {
    setSlides(slides);
    console.log(slides);
  };

  useEffect(() => {}, []);

  const categories = ["All", "Paintings", "Murals", "NFTs", "Physical"];

  const display = categories.map((item, i) => {
    return (
      <button
        onClick={() => {
          setSelected(i);
          change(item);
        }}
        className={
          selected == i ? "px-5 py-2 bg-black text-white rounded-lg" : null
        }
      >
        {item}
      </button>
    );
  });

  return (
    <div className="global">
      <div className="text-black mt-10">
        <section>
          <div>
            <p>
              <img src={Artica} alt="" />
            </p>
          </div>

          <div className="pt-3 text-xl flex gap-5">{display}</div>

          <Slides slides={slides} />

          <div className="mt-20">
            <summary className="flex justify-between">
              <h1 className="text-3xl font-bold">Highest Art Bid</h1>
              <a href="#" className="text-xl underline">
                See more
              </a>
            </summary>

            <motion.div>
              <motion.div className="flex gap-5 pt-8">
                {SecondSlide.map((img, i) => {
                  return (
                    <motion.div>
                      <img src={img} alt="" key={i} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Explore;
