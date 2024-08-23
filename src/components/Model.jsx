import React from 'react';

function Model({ imgSrc, title, desc, onClose }) {
  return (
    <div className="modal  fade show d-block" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <img style={{height:"50vh", width:"100%"}} src={imgSrc} className="img-fluid" alt={title} />
            <p>{desc}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn btn-danger"
              onClick={onClose}
            >
              Close
            </button>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
