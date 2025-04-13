import React from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

export default function ImageModal({
  isOpen,
  onRequestClose,
  image,
  customStyles,
}) {
  if (!image) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Large Image"}
          className={styles.modalImage}
        />
      </div>

      <button onClick={onRequestClose} className={styles.modalCloseButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      </button>
    </Modal>
  );
}
