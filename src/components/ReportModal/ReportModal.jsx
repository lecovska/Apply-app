import React from "react";

const ReportModal = ({ closeModal }) => {
  return (
    <div id="modal-containerReport">
      <div id="content-container">
        <h2>
          Details
        </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ducimus eius, itaque illum modi illo nisi aspernatur totam. Quis soluta possimus mollitia saepe eius? Quasi!</p>
        <button id="closeReportModal" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default ReportModal;
