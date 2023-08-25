import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const WrapperModal = ({ children }) => {
  const { modalIsOpen } = children;

  console.log(modalIsOpen);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // open={openModal}
        aria={{
          labelledby: "heading",
          describedby: "full_description",
        }}
      >
        {children}
        {/* <h1 id="heading">Alert</h1>
        <div id="full_description">
          <p>Description goes here.</p>
        </div> */}
      </Modal>
    </div>
  );
};

export default WrapperModal;
