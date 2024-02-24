import React, { useState } from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "./Slider";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // setTimer function
  const setTimer = () => {
    var countDownDate = new Date("Sep 2, 2024 16:37:52").getTime();
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
        <Slider   
        days= {days}
        minutes= {minutes}
        hours = {hours}
        seconds= {seconds}
        />
        </section>
        <ToastContainer />
      </section>
    </div>
  );
};

export default Timer;
