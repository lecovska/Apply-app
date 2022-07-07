import React from "react";

const ReportModal = ({ closeModal }) => {
  return (
    <div id="modal-containerReport">
      <div id="content-container">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          consectetur explicabo labore natus fugit officia ab ducimus,
          exercitationem sunt maxime doloremque. Tempora ducimus nostrum
          commodi?
        </h2>
        <button className="closeReportModal" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default ReportModal;
