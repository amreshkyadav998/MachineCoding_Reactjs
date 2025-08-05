import React, { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * chars.length);
      pass += chars[rand];
    }
    setPassword(pass);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
      <h2 className="text-xl font-semibold mb-4">🔐 Password Generator</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Length: {length}</label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <button
        onClick={generatePassword}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Generate Password
      </button>

      {password && (
        <div className="mt-4 p-2 border rounded bg-gray-100 font-mono text-sm">
          {password}
        </div>
      )}
    </div>
  );
}
