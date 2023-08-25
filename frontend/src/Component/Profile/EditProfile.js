import React, { useState } from "react";
import ChooseCover from "../Image/cover Imgclick.png";
import ChooseProile from "../Image/bxs_camerasmall.png";
import { FaWindowClose } from "react-icons/fa";

function EditProfile({
  visible,
  closeIt,
  ChooseDetails,
  theName,
  about,
  profiled,
}) {
  const [profileImg, setProfileImg] = useState();
  const [coverImg, setCoverImg] = useState();
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const handleSave = () => {
    ChooseDetails(coverImg);
    theName(name);
    about(details);
    profiled(profileImg);
    closeIt();
  };

  const handleProfilePic = (e) => {
    setProfileImg(URL.createObjectURL(e.target.files[0]));
  };
  const handleCoverPic = (e) => {
    setCoverImg(URL.createObjectURL(e.target.files[0]));
  };

  if (!visible) return null;
  return (
    <section class="flex justify-center transistion duration-150">
      <div className="overlay" onClick={closeIt}></div>

      <section class="absolute z-20 border w-[90%] lg:w-[60%] pt-5 pb-20 p-10 bg-white rounded-3xl">
        <div class="text-black">
          <div class="flex justify-between py-5 text-3xl">
            <h1 class="artica great">Edit Profile</h1>
            <span>
              <FaWindowClose onClick={closeIt} />
            </span>
          </div>
          <div>
            <img src={coverImg} alt="" class="w-full h-[20vh] rounded-2xl" />
            <div class="-mt-[15%]">
              <p class="flex justify-center">
                {" "}
                <label htmlFor="uploadCover-button">
                  <img src={ChooseCover} alt="" class="w-[60%]" />
                </label>
              </p>
              <p>
                <input
                  type="file"
                  id="uploadCover-button"
                  multiple={false}
                  onChange={handleCoverPic}
                  class=" hidden"
                />{" "}
              </p>
              <p class="-mt-8 pl-5">
                {" "}
                <label htmlFor="upload-button">
                  <img
                    src={profileImg}
                    alt=""
                    class="w-[30%] h-[20vh] rounded-[70px] sm:w-[20%]"
                  />{" "}
                  <p>
                    <img
                      src={ChooseProile}
                      alt=""
                      class=" -mt-16 sm:-mt-24 pl-12 w-[15%] sm:w-[15%]"
                    />
                  </p>{" "}
                </label>{" "}
              </p>
              <p>
                <input
                  type="file"
                  id="upload-button"
                  multiple={false}
                  onChange={handleProfilePic}
                  class=" hidden"
                />{" "}
              </p>
            </div>
          </div>

          <form class="mt-2 flex justify-center sm:justify-left p-16">
            <div>
              <div class="pt-8">
                <p class="text-xl text-black pb-2">Artist Name</p>
                <p class=" w-[300px] sm:w-full border py-2 p-6 rounded-xl">
                  {" "}
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Kwaku the "fusion" drive'
                    class="w-[180px] sm:w-[500px] bg-transparent text-black outline-none "
                  />
                </p>
              </div>

              <div class="pt-8">
                <p class="text-xl text-black">Your description</p>
                <p class="text-black font-thin pt-2 pb-2">
                  Provide a detailed decription of your skillset for patrons and
                  other creators to experience your story with you
                </p>
                <textarea
                  rows="2"
                  class="sm:w-[100%] outline-none border rounded-xl text-black p-5"
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>

              <div class="pt-8">
                <p class="text-xl text-black pb-2">Your Website</p>
                <p class="w-[300px] sm:w-full border py-2 p-6 rounded-xl">
                  {" "}
                  <input
                    type="text"
                    placeholder="Add link to your website"
                    class="w-[180px]  sm:w-[500px] bg-transparent text-black outline-none "
                  />
                </p>
              </div>

              <div class="pt-8">
                <p class="text-xl text-black pb-2">Your Instagram</p>
                <p class="w-[300px] sm:w-full border py-2 p-6 rounded-xl">
                  {" "}
                  <input
                    type="text"
                    placeholder="Add link to your Instagram"
                    class="w-[180px] sm:w-[500px] bg-transparent text-black outline-none "
                  />
                </p>
              </div>

              <div class="pt-8">
                <p class="text-xl text-black pb-2">Your Twitter</p>
                <p class="w-[300px] sm:w-full border py-2 p-6 rounded-xl">
                  {" "}
                  <input
                    type="text"
                    placeholder="Add link to your Twitter"
                    class="w-[180px] sm:w-[500px] bg-transparent text-black outline-none "
                  />
                </p>
              </div>
            </div>
          </form>
        </div>
        <div class="flex justify-end">
          <button
            class="px-8 py-3 bg-black text-white rounded-xl"
            onClick={handleSave}
          >
            Edit Profile
          </button>
        </div>
      </section>
    </section>
  );
}

export default EditProfile;
