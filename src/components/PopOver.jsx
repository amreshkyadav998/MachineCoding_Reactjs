import React, { useState } from "react";

export default function PopOver() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative text-center">
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Click Me
      </button>

      {show && (
        <div className="absolute mt-2 left-1/2 -translate-x-1/2 w-56 p-4 bg-white shadow-lg rounded z-10 border border-gray-200">
          <p className="text-sm text-gray-700">This is a simple pop-over message 🎉</p>
        </div>
      )}
    </div>
  );
}
