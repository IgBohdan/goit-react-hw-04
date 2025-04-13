import React from "react";
import s from "./ErrorMessage.module.css";
export default function ErrorMessage({ message }) {
  return (
    <div className={s.errorContainer}>
      <p className={s.error}>{message}</p>;
    </div>
  );
}
