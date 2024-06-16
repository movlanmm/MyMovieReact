import React from "react";

export default function Pagenation({ start, setstart, setend }) {
  return (
    <div className="flex gap-2">
      <button
        className={start === 0 ? "page-btn active" : 'page-btn'}
        onClick={(e) => {
          setstart(0);
          setend(6);
          window.scrollTo(0, 0);
        }}
      >
        1
      </button>
      <button
       className={start === 6 ? "page-btn active" : 'page-btn'}
        onClick={() => {
          setstart(6);
          setend(12);
          window.scrollTo(0, 0);
        }}
      >
        2
      </button>
      <button
        className={start === 12 ? "page-btn active" : 'page-btn'}
        onClick={() => {
          setstart(12);
          setend(17);
          window.scrollTo(0, 0);
        }}
      >
        3
      </button>
    </div>
  );
}
