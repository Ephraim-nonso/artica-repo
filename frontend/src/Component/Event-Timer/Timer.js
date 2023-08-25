import React, { useState } from "react";
import { useContractWrite, usePrepareContractWrite, useAccount } from "wagmi";
import { ArticaTicketContract } from "../utils/contracts/contracts";
import ArticaTicket from "../utils/ABI/ArticaTicket.json";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // setTimer function
  const setTimer = () => {
    var countDownDate = new Date("Sep 2, 2023 16:37:52").getTime();
    setInterval(() => {
      var now = new Date().getTime();
      var timeleft = countDownDate - now;

      // Calculating the days, hours, minutes and seconds left
      setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
    }, 1000);
  };

  setTimer();

  const { address } = useAccount();
  // console.log(address);

  const notify = () => {
    return !!address
      ? isError
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

  const { isLoading, write, isError } = useContractWrite(config);

  return (
    <div>
      {/*RSVP */}
      <section className="mt-24">
        <h1 className="text-3xl ">
          RSVP "IVF '23" <b className="artica"> Auction</b>
        </h1>
        <p className="pt-4">
          Mint your ticket below to RSVP The "IVF '23" Auction
        </p>

        <section className="mt-8">
          <div className="bLast">
            <div className="last">
              <div>
                <h1 className="text-2xl  sm:text-3xl font-thin sm:mt-10">
                  IVF '23 : The Agbero artform
                </h1>
                <div>
                  <samp className="flex gap-2 leading-5 pt-4">
                    <form className="border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl">
                      <h1 className="text-base  sm:text-xl">{days}</h1>
                      <p>days</p>
                    </form>
                    <form className="border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl">
                      <h1 className="text-base  sm:text-xl">{hours}</h1>
                      <p>hours</p>
                    </form>
                    <form className="border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl">
                      <h1 className="text-base  sm:text-xl">{minutes}</h1>
                      <p>minutes</p>
                    </form>
                    <form className="border bg-slate-300 text-black  py-1 px-2 md:px-4 text-center rounded-xl">
                      <h1 className="text-base  sm:text-xl">{seconds}</h1>
                      <p>seconds</p>
                    </form>
                  </samp>
                </div>
              </div>

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
                      "Mint Ticket"
                    )}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Timer;
