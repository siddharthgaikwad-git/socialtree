"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const Explore = () => {
  const [searchHandle, setSearchHandle] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchHandle.trim()) return;

    // redirect to user handle
    router.push(`/${searchHandle.trim()}`);
  };

  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-[#0d0d1a] text-white flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-lg text-center flex flex-col items-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Explore Socialtrees
          </h1>
          <p className="text-gray-400 mb-8 text-sm md:text-base">
            Enter any user's handle to find their profile and links
          </p>

          {/* Search Input Box */}
          <form
            onSubmit={handleSearch}
            className="w-full relative flex items-center"
          >
            <span className="absolute left-4 text-gray-500 font-semibold text-lg">
              @
            </span>
            <input
              type="text"
              value={searchHandle}
              onChange={(e) => setSearchHandle(e.target.value)}
              placeholder="enter username (eg. lenovo)"
              className="w-full pl-10 pr-32 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-all shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 bg-linear-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-black font-semibold rounded-xl transition-all active:scale-95 shadow-md cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Quick Suggestions / Popular Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400">
            <span>Popular:</span>
            {["lenovo", "apple", "instagram", "creator"].map((tag) => (
              <button
                key={tag}
                onClick={() => router.push(`/${tag}`)}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all"
              >
                @{tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Explore;
