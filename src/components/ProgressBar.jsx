import React, { useState, useEffect } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-center text-lg font-bold mb-2">Progress: {progress}%</h2>
      <div className="w-full bg-gray-300 rounded-full h-6">
        <div
          className="bg-green-500 h-6 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
