import React from "react";
import Pic1 from "./Image/FineGirl.png";
import White from "./Image/whitepaint.png";
import SmallWhite from "./Image/SmallWhitePaint.png";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";
import Timer from "./Event-Timer/Timer";

function TrusUs() {
  return (
    <section className="mt-32">
      <div className="flex items-stretch justify-end -mb-32 ">
        {" "}
        <img src={White} alt="" />
      </div>
      <div className="bg-black px-12 pt-52">
        <section className="flex sm:px-14  flex-wrap xl:flex-nowrap">
          <div className="text-left ">
            <h1 className="text-3xl font-bold mt-16">
              Why our <b className="create"> Creator trust us</b>
            </h1>
            <p className="mt-12 w-11/12 text-2xl leading-9 font-semibold">
              <b className="artica">We are committed</b> to safeguarding the
              cultural heritage of Africa. Through cutting-edge technology, we
              capture the intricate details of artifacts and artworks,
              preserving their essence for generations to come.
            </p>
            <h4 className="w-11/12 mt-14 text-xl">
              ...Artica is one of those "if you know, you know" sort of things
              where, if you actually know, it can essentially be life changing
              for you as an artist...
            </h4>
            <form className="mt-16">
              <h6>- Adeola Motoni</h6>
              <h4>Artist</h4>
              <h4>Nigeria</h4>
            </form>
          </div>
          <div className="w-full">
            <p className="flex items-stretch justify-end">
              <img src={SmallWhite} alt="" />
            </p>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 10 }}
                transition={{ duration: 2 }}
              >
                {" "}
                <img src={Pic1} alt="" />
              </motion.div>
            </AnimatePresence>

            <p className="flex items-stretch justify-end">
              <img src={SmallWhite} alt="" />
            </p>
          </div>
        </section>

        <Timer />

        {/*FOOTER */}
        <Footer />
      </div>
    </section>
  );
}

export default TrusUs;
