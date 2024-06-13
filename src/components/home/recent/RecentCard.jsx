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

  const handleWhatsAppClick = (name, category, image) => {
    const message = `I'm interested in ${name} (${category}). Please provide more information. Here is the image: ${image}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+94717777668&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // If a limit is provided, slice the list to show only the limited number of items
  const displayList = limit ? list.slice(0, limit) : list;

  return (
    <>
      <div className='content grid4 mtop recent'>
        {displayList.map((val, index) => {
          const { cover, category, name } = val;
          return (
            <div className='box shadow' key={index}>
              <div className='img' onClick={() => openModal(cover)}>
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
                <br />
                <button onClick={() => handleWhatsAppClick(name, category, cover)} className="whatsapp-button button">
                   <svg className="whatsapp-icon" viewBox="0 0 448 512">
                      <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
                  </svg>
                        WhatsApp
                     <div className="arrow">›</div>
                  </button>


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