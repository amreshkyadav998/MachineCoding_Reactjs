import React, { useState } from "react";

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  const Star = ({ selected, onClick }) => (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        color: selected ? "gold" : "gray",
        fontSize: "2rem",
        marginRight: "5px",
      }}
    >
      ★
    </span>
  );

  return (
    <div>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selected={i < selectedStars}
          onClick={() => setSelectedStars(i + 1)}
        />
      ))}
      <p style={{ marginTop: "10px" }}>
        You rated this {selectedStars} out of {totalStars} stars
      </p>
    </div>
  );
}
