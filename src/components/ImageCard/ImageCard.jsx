import React from "react";
import s from "./ImageCard.module.css";
export default function ImageCard({ image, onClick }) {
  return (
    <div className={s.imageCard}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        onClick={onClick}
        className={s.image}
      />
    </div>
  );
}
