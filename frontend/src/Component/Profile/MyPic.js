import React from "react";
import dat from "../Auction/Ongoing";
import { FaAngleDown, FaEllipsisV } from "react-icons/fa";

function MyPic() {
  return (
    <div className="border-t mt-4">
      <section className="flex-wrap md:flex-nowrap  flex gap-10 pb-10 pt-10">
        <div className="p-4">
          <section className="border pr-4 pl-4 pt-4 pb-7 rounded-lg w-[250px]">
            <div>
              <p className="font-thin text-xl pt-2">
                <b className="text-xl ">Collection</b> 56{" "}
              </p>
              <p className="font-thin text-xl pt-2">
                <b className="text-xl ">Auctioned</b> 10{" "}
              </p>
              <p className="font-thin text-xl pt-2">
                <b className="text-xl ">Bids</b> 153{" "}
              </p>
              <p className="font-thin text-xl pt-2">
                <b className="text-xl ">Listed</b> 54{" "}
              </p>
              <p className="font-thin text-xl pt-2">
                <b className="text-xl ">Upcoming Events</b> 2{" "}
              </p>
              <p className="font-thin text-xl pt-2">
                <b className="text-xl ">Offers Received</b> 4{" "}
              </p>
            </div>
          </section>
        </div>

        <section className="p-5">
          <div className="flex text-3xl pb-10">
            <h1>Listed</h1>
            <FaAngleDown />{" "}
          </div>
          <section className="flex flex-wrap justify-center rounded-2xl pl-5 pb-10 border border-gray-500">
            {dat.map((InIt, i) => {
              return (
                <div key={i} className="group mt-10">
                  <p>
                    {" "}
                    <img
                      src={InIt.img}
                      alt=""
                      className=" border rounded-md w-10/12 group-hover:rounded-sm"
                    />
                  </p>
                  <div className="  w-10/12 transistion-all duration-200  pt-5 border-t-0 group-hover:border-b-2 group-hover:border group-hover:rounded-sm  group-hover:bg-slate-300 group-hover:text-black">
                    <div className="flex  justify-between scale-90 transistion-all duration-200  group-hover:scale-95">
                      <span>
                        <h1>{`${InIt.topic}`}</h1>
                        <p className="pt-1 text-sm font-thin">
                          {`${InIt.para}`}{" "}
                        </p>
                      </span>
                      <span>
                        <FaEllipsisV />
                      </span>
                    </div>
                    <div className="mt-6 text-lg  scale-90  transistion-all duration-200 group-hover:scale-95">
                      <h1>Asking Price : {`${InIt.cost}`}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </div>
  );
}

export default MyPic;
