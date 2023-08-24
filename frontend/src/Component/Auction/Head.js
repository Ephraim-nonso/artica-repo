import React from "react";
import Artica from "../Image/air.png";
import Owner from "../Image/carbon_user-avatar-filled.png";
import { FaSearch } from "react-icons/fa";
import Timer from "../Event-Timer/Timer";
import ConnectWallet from "../buttons/ConnectWallet";

function Head() {
  return (
    <header className="header">
      <section>
        <section className="border-b-slate-100 pb-5 border-b bg-black px-2 md:px-2 lg:px-12 py-5">
          <div className="flex justify-between">
            <div>
              <p className="bg-black">
                {" "}
                <img src={Artica} alt="" className="rounded-md  text-black" />
              </p>
            </div>

            <div className=" sm:flex sm:justify-between ">
              <div className="p-3 sm:flex gap-3 ">
                <p className="hidden  px-4 md:mt-0  py-2  md:px-7 text-white sm:flex gap-3 rounded-xl border">
                  <FaSearch className="mt-1.5" />{" "}
                  <input
                    type="text"
                    placeholder="Search items, collections & accounts"
                    className="md:w-[300px] bg-transparent outline-none"
                  />
                </p>

                <div className="flex justify-center align-center">
                  <ConnectWallet />
                  <img src={Owner} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 text-lg sm:text-xl font-thin flex justify-between sm:justify-start sm:gap-5">
            <button>Paintings</button>
            <button>Murals</button>
            <button>Mosaic</button>
            <button>NFTs</button>
            <button>Molds</button>
            <button>Physical</button>
          </div>
        </section>
        <section className="border-b mx-10">
          <Timer />
        </section>
      </section>
    </header>
  );
}

export default Head;
