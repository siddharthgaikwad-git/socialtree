"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PRESET_AVATARS = [
  "/profile/avatar (1).png",
  "/profile/avatar (2).png",
  "/profile/avatar (3).png",
  "/profile/avatar (4).png",
  "/profile/avatar (5).png",
  "/profile/avatar (6).png",
  "/profile/avatar (7).png",
  "/profile/avatar (8).png",
  "/profile/avatar (9).png",
  "/profile/avatar (10).png",
  "/profile/avatar (11).png",
  "/profile/avatar (12).png",
  "/profile/avatar (13).png",
  "/profile/avatar (14).png",
  "/profile/avatar (15).png",
  "/profile/avatar (16).png",
  "/profile/avatar (17).png",
  "/profile/avatar (18).png",
  "/profile/avatar (19).png",
  "/profile/avatar (20).png",
  "/profile/avatar (21).png",
  "/profile/avatar (22).png",
  "/profile/avatar (23).png",
  "/profile/avatar (24).png",
  "/profile/avatar (25).png",
  "/profile/avatar (26).png",
  "/profile/avatar (27).png",
  "/profile/avatar (28).png",
  "/profile/avatar (29).png",
  "/profile/avatar (30).png",
];

const Generate = () => {
  const searchParams = useSearchParams();

  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle") || "");
  const [avatar, setAvatar] = useState(PRESET_AVATARS[0]);

  // Update a specific link row
  const handleChange = (index, link, linktext) => {
    setlinks((initiallinks) =>
      initiallinks.map((item, i) => {
        if (i === index) {
          return { link, linktext };
        } else {
          return item;
        }
      }),
    );
  };

  // Add a new empty input row
  const addExtraRow = () => {
    setlinks([...links, { link: "", linktext: "" }]);
  };

  // Submit data to backend API
  const submitData = async () => {
    const cleanHandle = handle.trim().toLowerCase();

    // 1. Handle validation
    if (!cleanHandle) {
      toast.error("Please enter a handle");
      return;
    }

    // 2. Empty links validation
    const validLinks = links.filter(
      (item) => item.link.trim() !== "" && item.linktext.trim() !== "",
    );

    if (validLinks.length === 0) {
      toast.error("Please add at least one valid link with text and URL!");
      return;
    }

    try {
      const response = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          handle: cleanHandle,
          links: validLinks,
          avatar: avatar,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Saved successfully!");
        setlinks([{ link: "", linktext: "" }]);
        sethandle("");
      } else {
        toast.error(result.message || "Failed to save");
      }
    } catch (error) {
      toast.error("Network error occurred");
    }
  };

  return (
    <div className="bg-emerald-700 min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* ================= LEFT / FORM ================= */}
      <div className="col1 bg-pink-100 flex justify-center items-center flex-col p-5 sm:p-8">
        {/* Logo Heading */}
        <div className="flex items-center gap-3 mb-4">
          <h1 className="font-bold text-3xl sm:text-4xl">Create your</h1>

          <Link href="/" className="inline-flex items-center">
            <img
              className="h-8 sm:h-10 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              src="/stlogo.png"
              alt="stlogo"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-5 my-4 w-full max-w-md">
          {/* Step 1 */}
          <h2 className="font-semibold text-xl sm:text-2xl">
            Step 1: Claim your handle
          </h2>

          <input
            value={handle || ""}
            onChange={(e) => sethandle(e.target.value.toLowerCase())}
            type="text"
            placeholder="Choose a handle (e.g. lenovo)"
            className="bg-white px-4 py-3 rounded-2xl focus:outline-pink-500 w-full"
          />

          {/* Step 2 */}
          <h2 className="font-semibold text-xl sm:text-2xl">
            Step 2: Add links
          </h2>

          {Array.isArray(links) &&
            links.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-2 w-full"
              >
                <input
                  value={item.linktext}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  type="text"
                  placeholder="Enter link text (e.g. Instagram)"
                  className="w-full sm:w-1/2 bg-white px-4 py-3 rounded-2xl focus:outline-pink-500"
                />

                <input
                  value={item.link}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linktext)
                  }
                  type="text"
                  placeholder="Enter URL (https://...)"
                  className="w-full sm:w-1/2 bg-white px-4 py-3 rounded-2xl focus:outline-pink-500"
                />
              </div>
            ))}

          <button
            type="button"
            onClick={addExtraRow}
            className="p-3 text-sm text-pink-700 font-semibold bg-pink-200 hover:bg-pink-300 rounded-2xl cursor-pointer transition-colors"
          >
            + Add Another Link Row
          </button>

          {/* Step 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-xl sm:text-2xl">
              Step 3: Choose a Profile Picture
            </h2>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 bg-white p-4 rounded-2xl max-h-36 overflow-y-auto">
              {PRESET_AVATARS.map((picUrl, index) => (
                <div
                  key={index}
                  onClick={() => setAvatar(picUrl)}
                  className={`relative w-14 h-14 rounded-full overflow-hidden cursor-pointer border-2 transition-all flex items-center justify-center ${avatar === picUrl
                      ? "border-pink-500 ring-2 ring-pink-400 scale-105"
                      : "border-gray-200 hover:border-pink-300"
                    }`}
                >
                  <img
                    src={picUrl}
                    alt={`Avatar ${index + 1}`}
                    className="w-full h-full object-cover object-center scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/6 px-4 py-3.5 shadow-lg shadow-black/10 backdrop-blur-xl">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-red-600 ring-1 ring-amber-300/20">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.5m0 3h.01M10.3 3.9 2.8 17a2 2 0 0 0 1.75 3h14.9a2 2 0 0 0 1.75-3l-7.5-13.1a2 2 0 0 0-3.4 0Z"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-red-500">
                Choose your handle carefully
              </p>

              <p className="mt-0.5 text-sm  leading-relaxed text-red-500">
                Your handle is permanent once your SocialTree is created.
              </p>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-center mt-4">
            <div className="relative group w-full flex justify-center">
              <button
                type="button"
                onClick={submitData}
                className="relative inline-block w-full p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-[1.02] active:scale-95"
              >
                <span className="absolute inset-0 rounded-xl bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 p-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Save &amp; Finalize
                    </span>

                    <svg
                      className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </span>
              </button>
            </div>

            <ToastContainer />
          </div>
        </div>
      </div>

      {/* ================= RIGHT / PREVIEW ================= */}
      <div className="col2 flex flex-col items-center justify-center text-white p-5 sm:p-8 py-12 lg:py-8">
        <h3 className="text-2xl font-bold mb-4">Live Preview</h3>

        {/* Avatar */}
        <img
          src={avatar || "/profile/avatar (1).png"}
          alt="Selected Avatar"
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white mb-2 object-cover shadow-lg bg-white"
        />

        {/* Handle */}
        <p className="text-lg sm:text-xl font-semibold mb-6">
          @{handle.toLowerCase() || "yourhandle"}
        </p>

        {/* Live Links Preview */}
        <div className="links w-full max-w-md flex flex-col gap-3.5">
          {links &&
            links.map((linkItem, index) => {
              if (!linkItem.linktext && !linkItem.link) return null;

              return (
                <div
                  key={index}
                  className="group relative inline-block w-full p-px font-semibold text-white rounded-2xl shadow-xl shadow-black/40"
                >
                  <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 opacity-60" />

                  <span className="relative z-10 block w-full px-5 sm:px-6 py-3 rounded-2xl bg-green-950 backdrop-blur-xl border border-white/10">
                    <div className="flex items-center justify-between gap-3">
                      <span className="tracking-wide text-sm sm:text-base font-medium text-white break-all">
                        {linkItem.linktext || "Link text..."}
                      </span>

                      <svg
                        className="w-5 h-5 text-gray-400 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Generate;