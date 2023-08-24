import React from "react";
import { Link } from "react-router-dom";
import owner from "./Image/solar_pallete-2-outline.png";

function Revpopup({ visible, onClose }) {
  if (!visible) return null;
  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <section className="z-20 border flex w-[70%] sm:w-[50%] absolute mt-2 justify-center gap-10 flex-wrap sm:flex-nowrap  sm:px-5 py-3 rounded-xl bg-white">
        <Link to="/profile">
          {" "}
          <div className="group text-center border px-14 py-3 rounded-xl bg-white text-black hover:bg-black hover:text-white">
            <button>
              <img src={owner} alt="" />
            </button>
            <span>
              {" "}
              <h1 className="mt-10 text-lg font-bold">Join as a creator</h1>
              {/* <p className="mt-2 text-base">Create Your Profile</p> */}
              <p className="mt-2 text-red text-red-700 text-xs ">
                Already have an account?{" "}
                <span className="text-sky-400">View profile</span>
              </p>
            </span>
          </div>{" "}
        </Link>
        <div className="text-center border px-14 py-3 rounded-xl bg-white text-black  hover:bg-black hover:text-white">
          <button>
            <img src={owner} alt="" />
          </button>
          <span>
            {" "}
            <h1 className="mt-10 text-lg font-bold">Join as a patron</h1>
            {/* <p className="mt-2 text-base">Create Your Profile</p> */}
          </span>
        </div>
      </section>
    </div>
  );
}

export default Revpopup;
