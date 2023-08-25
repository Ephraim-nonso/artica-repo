import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

function AddCollection({
  visible,
  close,
  collectionImage,
  prIce,
  anotherItem,
}) {
  const [collectPics, setCollectPics] = useState();
  const [collectItem, setCollectItem] = useState("");
  const [collectPrice, setCollectPrice] = useState("");
  const [des, setdes] = useState("");

  const handleSave = () => {
    collectionImage(collectPics);
    anotherItem(collectItem);
    prIce(collectPrice);
    close();
  };

  const handleCollectionPic = (e) => {
    setCollectPics(URL.createObjectURL(e.target.files[0]));
  };

  if (!visible) return null;

  return (
    <section class="flex justify-center transistion duration-150">
      <div className="overlay" onClick={close}></div>

      <section class="absolute z-20 border w-[90%] lg:w-[60%] pt-5 pb-20 p-10 bg-white rounded-3xl">
        <div class="text-black">
          <div class="flex justify-between py-5 text-3xl">
            <h1 class="artica great">Add new item</h1>
            <span onClick={close}>
              <FaWindowClose />
            </span>
          </div>
          <div>
            <h1 class="text-2xl font-bold  py-2">Upload image, Video or 3D</h1>
            <p class="pb-7">
              File type supported : JPG, PGN, GIF, SVG, MP4, WEBM, MP3 ...Max
              size : 100MB
            </p>
            <p class="w-[50%] sm:w-[40%] bg-gray-500">
              {" "}
              <label htmlFor="upload-button">
                <img
                  src={collectPics}
                  alt=""
                  class="border bg-gray-400  h-[40vh]"
                />
              </label>
            </p>
            <p>
              <input
                type="file"
                id="upload-button"
                multiple={false}
                onChange={handleCollectionPic}
                class=" hidden"
              />{" "}
            </p>
          </div>

          <div>
            <div class="pt-8">
              <p class="text-xl text-black pb-2">Item Name</p>
              <p class=" w-[300px] sm:w-full border py-2 p-6 rounded-xl">
                {" "}
                <input
                  type="text"
                  placeholder="Name of art piece"
                  onChange={(e) => setCollectItem(e.target.value)}
                  class="w-[180px] sm:w-[500px] bg-transparent text-black outline-none "
                />
              </p>
            </div>

            <div class="pt-8">
              <p class="text-xl text-black">Description</p>
              <p class="text-black font-thin pt-2 pb-2">
                Provide a detailed decription of your skillset for patrons and
                other creators to experience your story with you
              </p>
              <textarea
                rows="2"
                class="sm:w-[100%] outline-none border rounded-xl text-black p-5"
                onChange={(e) => setdes(e.target.value)}
              ></textarea>
            </div>

            <div class="pt-8">
              <p class="text-xl text-black pb-2">Category</p>
              <select
                name="select"
                id="select"
                class="w-[300px] sm:w-full border py-2 p-6 rounded-xl outline-none"
              >
                <option value="">Category</option>
                <option value="">Painting</option>
                <option value="">Murals</option>
                <option value="">NFTs</option>
                <option value="">Physical</option>
              </select>

              {/* <p class='w-[300px] sm:w-full border py-2 p-6 rounded-xl'> <input type="" placeholder='Choose category' class='w-[180px]  sm:w-[500px] bg-transparent text-black outline-none ' /></p>  */}
            </div>

            <div class="pt-8">
              <p class="text-xl text-black pb-2">Supply</p>
              <p class="w-[300px] sm:w-full border py-2 p-6 rounded-xl">
                {" "}
                <input
                  type="text"
                  placeholder="Price in ETH"
                  onChange={(e) => setCollectPrice(e.target.value)}
                  class="w-[180px] sm:w-[500px] bg-transparent text-black outline-none "
                />
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-end pt-20">
          <button
            class="px-8 py-3 bg-black text-white rounded-xl"
            onClick={handleSave}
          >
            Add item
          </button>
        </div>
      </section>
    </section>
  );
}

export default AddCollection;
