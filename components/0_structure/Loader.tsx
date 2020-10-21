import React from "react";
import "../../assets/structure/loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loading">
        <svg viewBox="0 0 456.7 39.9">
          <path
            fill="none"
            stroke="currentColor"
            stroke-width="12"
            stroke-miterlimit="10"
            d="M4.2 33.2c.1-.1 7-6.9 15.9-13.8C27.7 13.7 38.7 6 47.5 6c7.5 0 14 6.6 20.3 12.9l.4.4c6.8 6.9 14.6 14.6 24.6 14.6 9.9 0 17.7-7.8 24.5-14.6l.5-.5C124 12.5 130.5 6 137.9 6c7.5 0 13.9 6.5 20.2 12.9l.4.4c6.8 6.9 14.6 14.6 24.5 14.6 10 0 17.8-7.8 24.6-14.6l.5-.5C214.4 12.5 220.9 6 228.4 6s14 6.5 20.2 12.9l.4.4c6.8 6.9 14.5 14.6 24.5 14.6 9.9 0 17.7-7.8 24.5-14.6l.3-.3c6.3-6.4 12.9-13 20.5-13 7.5 0 14.1 6.6 20.4 13l.3.3c6.8 6.9 14.6 14.6 24.5 14.6s17.6-7.8 24.5-14.6l.2-.2C395.1 12.6 401.6 6 409.2 6c8.7 0 19.8 7.7 27.3 13.4 8.9 6.8 15.9 13.7 16 13.8"
          />
        </svg>
        <p>Chargement en cours&nbsp;...</p>
      </div>
    </div>
  );
};

export default Loader;
