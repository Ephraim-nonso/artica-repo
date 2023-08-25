import React from "react";
import dat from "./Ongoing";
import Bid from "./Bid";
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";

function LastSect() {
  const [showAdd, setShowAdd] = useState(false);
  const [img, setImg] = useState();

  return (
    <div class="mt-10">
      <section>
        <div>
          <p class=" px-12 text-center sm:text-left text-4xl">
            Ongoing <b className="artica boy">Auction</b>
          </p>
        </div>
        <Bid visible={showAdd} imag={img} />
        <div class="flex flex-wrap mt-2 justify-center">
          {dat.map((InIt) => {
            return (
              <div class="group mt-10" onClick={() => setShowAdd(true)}>
                <p>
                  {" "}
                  <img
                    src={InIt.img}
                    alt=""
                    class=" border rounded-md w-10/12 group-hover:rounded-sm"
                    onClick={() => setImg(InIt.img)}
                  />
                </p>
                <div class="  w-10/12 transistion-all duration-200  pt-5 border-t-0 group-hover:border-b-2 group-hover:border group-hover:rounded-sm  group-hover:bg-slate-300 group-hover:text-black">
                  <div class="flex  justify-between scale-90 transistion-all duration-200  group-hover:scale-95">
                    <span>
                      <h1>{`${InIt.topic}`}</h1>
                      <p class="pt-1 text-sm font-thin">{`${InIt.para}`} </p>
                    </span>
                    <span>
                      <FaEllipsisV />
                    </span>
                  </div>
                  <div class="mt-6 text-xl  scale-90  transistion-all duration-200 group-hover:scale-95">
                    <h1>Asking Price : {`${InIt.cost}`}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default LastSect;
