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
import EditProfile from "./EditProfile";
import AddCollection from "./AddCollection";
import MyPic from "./MyPic";

function Change(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [coverImage, setCoverImg] = useState(Cover);
  const [profile, setProfile] = useState(Profile);
  const [name, setName] = useState('Kwaku the "fusion" drive');
  const [detail, setDetails] = useState("Talk about youself and experience");
  const [collectImg, setCollectImg] = useState();
  const [item, setItem] = useState("");
  const [price, setPrice] = useState();
  const [des, setDes] = useState("");

  //THE FUNCTIONS
  function ChooseDetails(de) {
    setCoverImg(de);
  }
  function profiled(pro) {
    setProfile(pro);
  }
  function theName(na) {
    setName(na);
  }
  function about(p) {
    setDetails(p);
  }
  function collectionImage(col) {
    setCollectImg(col);
  }
  function anotherItem(col) {
    setItem(col);
  }
  function prIce(col) {
    setPrice(col);
  }
  //END OF THE fUNCTIONS

  const ClosetheEdit = () => setShowEdit(false);
  const ClosetheAdd = () => setShowAdd(false);

  return (
    <section>
      <EditProfile
        visible={showEdit}
        closeIt={ClosetheEdit}
        profiled={profiled}
        ChooseDetails={ChooseDetails}
        theName={theName}
        about={about}
      />
      <AddCollection
        visible={showAdd}
        close={ClosetheAdd}
        collectionImage={collectionImage}
        anotherItem={anotherItem}
        prIce={prIce}
      />
      <section>
        <div>
          <img src={coverImage} alt="" class="w-full h-[40vh]" />

          <section class="-mt-16">
            <div class="flex justify-center">
              <div>
                <img
                  src={profile}
                  alt=""
                  class="w-full h-[20vh] rounded-[70px] sm:w-full"
                />
              </div>
            </div>

            <div class=" text-center justify-center pt-5">
              <h1 class="text-2xl sm:text-3xl">{name}</h1>
              <p class="text-lg font-thin pt-5">{detail}</p>
              <div class="flex gap-10 justify-center mt-6">
                <button
                  class="flex  gap-3 text-base px-3 sm:px-5 sm:text-lg py-3 border rounded-lg"
                  onClick={() => setShowAdd(true)}
                >
                  {" "}
                  <FaPlus /> Add to collection
                </button>
                <button className="edit" onClick={() => setShowEdit(true)}>
                  Edit Profile
                </button>
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
      <MyPic image={collectImg} name={name} item={item} price={price} />
    </section>
  );
}

export default Change;
