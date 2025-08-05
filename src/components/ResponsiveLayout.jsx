import React from "react";

export default function ResponsiveLayout() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 rounded-md text-center">
        <h1 className="text-2xl md:text-3xl font-bold">🌐 Responsive Layout</h1>
      </header>

      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-md text-center mt-10 py-10 px-6">
        <h2 className="text-2xl font-semibold mb-2">Welcome to the Web</h2>
        <p className="text-gray-600 text-sm">
          This is a clean, mobile-first responsive layout built using Tailwind CSS and React.
        </p>
      </section>

      {/* Cards */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-2">⚡ Fast</h3>
          <p className="text-gray-600 text-sm">Optimized for performance and speed.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-2">📱 Responsive</h3>
          <p className="text-gray-600 text-sm">Works on all devices — mobile, tablet, desktop.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="text-xl font-semibold mb-2">🎨 Simple</h3>
          <p className="text-gray-600 text-sm">Clean design using Tailwind’s utility classes.</p>
        </div>
      </section>
    </div>
  );
}
