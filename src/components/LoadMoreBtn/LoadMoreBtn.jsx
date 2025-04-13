import React from "react";
import s from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={s.loadMoreBtn}>
      <button type="button" onClick={onClick} className={s.button}>
        Load more
      </button>
    </div>
  );
}
