import React, { useState } from "react";
import Modal from "react-modal";
import { list } from "../../data/Data";
import "./recent.css"; 

const RecentCard = ({ limit }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage("");
  };

  // If a limit is provided, slice the list to show only the limited number of items
  const displayList = limit ? list.slice(0, limit) : list;

  return (
    <>
      <div className='content grid4 mtop recent'>
        {displayList.map((val, index) => {
          const { cover, category, name } = val;
          return (
            <div className='box shadow' key={index} onClick={() => openModal(cover)}>
              <div className='img'>
                <img src={cover} alt={name} />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span
                    style={{
                      background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-btn">Close</button>
        <img src={currentImage} alt="Full Screen" className="full-screen-image" />
      </Modal>
    </>
  );
};

export default RecentCard;
