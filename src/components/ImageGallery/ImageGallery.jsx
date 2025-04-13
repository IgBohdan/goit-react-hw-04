import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
export default function ImageGallery({ images, onImageClick }) {
  if (images.length === 0) {
    return <p>No images found for your search term.</p>;
  }
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}
