import React from "react";
import { motion } from "framer-motion";
import FirstSlides from "../FirstSlides";
import { murals, physical, paintings, NFTs } from "../utils/exportArts";

const Slides = ({ slides }) => {
  const items = [
    {
      category: "All",
      item: FirstSlides,
    },
    {
      category: "Paintings",
      item: paintings,
    },
    {
      category: "Murals",
      item: murals,
    },
    {
      category: "Physical",
      item: physical,
    },
    {
      category: "NFTs",
      item: NFTs,
    },
  ];

  return (
    <div>
      <motion.div className="flex">
        {items.map(({ item, category }) => {
          return (
            category === slides && (
              <div className="flex gap-4 list-none pt-8 object-none object-center ">
                {item.map((image, i) => {
                  return <img src={image} width={"25%"} height={"25%"} />;
                })}
              </div>
            )
          );
        })}
      </motion.div>
    </div>
  );
};

export default Slides;
