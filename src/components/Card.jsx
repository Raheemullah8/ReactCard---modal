import React, { useState } from "react";
import CardData from "./CardData";
import Model from "./Model"; // Ensure the filename matches

function Card() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ imgSrc: '', title: '', desc: '' });

  const handleShowModal = (imgSrc, title, desc) => {
    setModalData({ imgSrc, title, desc });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="py-4 py-lg-5 container">
        <div className="row justify-content-center align-items-center">
          {CardData.Card.map((item, index) => (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img
                  style={{ width: '100%' }}
                  src={item.imgSrc}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.Desc}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShowModal(item.imgSrc, item.title, item.Desc)}
                  >
                    Click me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && (
        <Model
          imgSrc={modalData.imgSrc}
          title={modalData.title}
          desc={modalData.desc}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default Card;
