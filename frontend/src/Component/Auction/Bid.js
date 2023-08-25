import React, { useState } from "react";
import img from "../Image/section3pic3.png";
import people from "../Image/people.png";
import price from "../Image/pricetag.png";
import { FaHeart, FaWindowClose } from "react-icons/fa";

function Bid({ visible, close, imag, ite, myname, priced }) {
  if (!visible) return null;

  return (
    <div>
      <section class="flex justify-center transistion duration-150">
        <div className="overlay"></div>

        <section class="absolute z-20 border px-20 w-[90%] lg:w-[60%] pt-5 pb-20 p-10 bg-white rounded-3xl">
          <div class="text-black">
            <div class="flex justify-between py-5 text-3xl">
              <h1 class="artica great">Make a bid</h1>
              <span>
                <FaWindowClose onClick={close} />
              </span>
            </div>
            <div class="flex justiify-center gap-10 flex-wrap md:flex-nowrap">
              <p class="w-full md:w-[45%]">
                <img src={imag} alt="" class="w-full" />
              </p>
              <div>
                <h1 class="text-3xl">{ite}</h1>
                <p class="text-xl pt-2">
                  {" "}
                  <b>Art</b> by {myname}
                </p>
                <span class="flex justify-between pt-3 pb-3">
                  <span>
                    <h1>Current Price</h1>
                    <p class="text-xl font-semibold">{priced}ETH</p>
                  </span>

                  <span>
                    <h1>Live Price</h1>
                    <p class="text-xl text-[#9747ff] font-semibold">
                      {priced}ETH
                    </p>
                  </span>
                </span>

                <p class="border px-6 rounded-xl">
                  <input
                    type="text"
                    placeholder="0.00"
                    class="py-3 border-r text-xl"
                  />{" "}
                  ETH{" "}
                </p>
                <p class="flex justify-between py-2">
                  <FaHeart />{" "}
                  <button
                    class="rounded-2xl px-14 text-xl py-3 bg-black text-white"
                    onClick={close}
                  >
                    Make a bid
                  </button>
                </p>
              </div>
            </div>

            <div class="flex mt-5 gap-10 bg-gray-200 p-2 rounded-2xl">
              <span class="flex text-lg">
                {" "}
                <img src={people} alt="" /> 4 people
              </span>
              <span class="flex text-lg">
                {" "}
                <img src={price} alt="" /> 7 listen
              </span>
            </div>

            <div class="flex justify-center pt-12">
              <div class="border bg-gray-200 px-5 py-3 rounded-2xl">
                <h1 className="artica des">Description</h1>
                <p class="text-lg"> This piece don't have a description</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Bid;
