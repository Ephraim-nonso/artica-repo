import React, { useState } from "react";
import Cover from "../Image/RectangleProfile.png";
import Profile from "../Image/Ellipse.png";
import {
  FaEllipsisV,
  FaInstagram,
  FaPlus,
  FaTwitter,
  FaUpload,
} from "react-icons/fa";
import WrapperModal from "../modals/WrapperModal";
import { useAccount } from "wagmi";
import { addressShortner } from "../utils/addressShortner";

function Change() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { address } = useAccount;

  console.log(address);
  const openModal = () => {
    setModalIsOpen(true);
  };
  return (
    <section>
      <section>
        <div>
          <img src={Cover} alt="" class="w-full" />

          <section class="-mt-16">
            <div class="flex justify-center">
              <div>
                <img src={Profile} alt="" />
              </div>
            </div>
            <div class=" text-center justify-center pt-5">
              <h1 class="text-2xl sm:text-3xl">Kwakwu "The fusion" Divine</h1>
              <p class="text-lg font-thin text-white">
                {addressShortner(JSON.stringify(address))}
              </p>
              <div class="flex gap-10 justify-center mt-6">
                <button class="flex  gap-3 text-base px-3 sm:px-5 sm:text-lg py-3 border rounded-lg">
                  {" "}
                  <FaPlus /> Add to collection
                </button>
                <button onClick={openModal} className="edit">
                  Edit Profile
                </button>
                <WrapperModal modalIsOpen={modalIsOpen}>
                  Edit Modal
                </WrapperModal>
              </div>
            </div>
          </section>

          <div class="flex justify-end gap-5 mt-6">
            <FaInstagram class="text-2xl" />
            <FaTwitter class="text-2xl" />
            <FaUpload class="text-2xl" />
            <FaEllipsisV class="text-2xl" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Change;
