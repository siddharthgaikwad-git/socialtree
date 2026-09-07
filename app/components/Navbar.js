"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav
      className="
        fixed top-6 left-1/2 z-50 -translate-x-1/2
        w-[92vw] max-w-6xl
        rounded-full
        border border-white/10
        bg-white/[0.07]
        px-3 py-2
        shadow-[0_8px_40px_rgba(0,0,0,0.25)]
        backdrop-blur-2xl
      "
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="
            flex shrink-0 items-center
            rounded-full
            px-3 py-1
            transition-all duration-300
            hover:bg-white/5
          "
        >
          <img
            src="/stlogo.png"
            className="h-12 w-auto object-contain brightness-0 invert"
            alt="SocialTree"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <ul className="hidden items-center gap-1 md:flex">
          <li>
            <Link
              href="/generate"
              className="
                group relative rounded-full
                px-5 py-2.5
                text-sm font-medium text-white/70
                transition-all duration-300
                hover:bg-white/8 hover:text-white
              "
            >
              Create Link

              <span
                className="
                  absolute bottom-1 left-1/2
                  h-0.5 w-0
                  -translate-x-1/2
                  rounded-full
                  bg-linear-to-r from-teal-400 to-blue-500
                  transition-all duration-300
                  group-hover:w-6
                "
              />
            </Link>
          </li>

          <li>
            <Link
              href="/explore"
              className="
                group relative rounded-full
                px-5 py-2.5
                text-sm font-medium text-white/70
                transition-all duration-300
                hover:bg-white/8 hover:text-white
              "
            >
              Explore Profiles

              <span
                className="
                  absolute bottom-1 left-1/2
                  h-0.5 w-0
                  -translate-x-1/2
                  rounded-full
                  bg-linear-to-r from-blue-500 to-purple-500
                  transition-all duration-300
                  group-hover:w-6
                "
              />
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="
                group relative rounded-full
                px-5 py-2.5
                text-sm font-medium text-white/70
                transition-all duration-300
                hover:bg-white/8 hover:text-white
              "
            >
              About Us

              <span
                className="
                  absolute bottom-1 left-1/2
                  h-0.5 w-0
                  -translate-x-1/2
                  rounded-full
                  bg-linear-to-r from-purple-500 to-pink-500
                  transition-all duration-300
                  group-hover:w-6
                "
              />
            </Link>
          </li>
        </ul>

        {/* ================= DESKTOP CTA ================= */}
        <Link
          href="/generate"
          className="
            hidden items-center gap-2
            rounded-full
            bg-white
            px-5 py-2.5
            text-sm font-semibold text-gray-950
            shadow-lg shadow-white/10
            transition-all duration-300
            hover:-translate-y-0.5
            hover:shadow-xl hover:shadow-white/20
            active:scale-95
            sm:flex
          "
        >
          Create yours

          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>

        {/* ================= MOBILE NAVIGATION ================= */}
        <div className="flex items-center gap-1 md:hidden">
          {/* CREATE */}
          <Link
            href="/generate"
            className={`
              flex min-w-13 flex-col items-center justify-center
              rounded-2xl px-2 py-1.5
              transition-all duration-300
              ${
                isActive("/generate")
                  ? "bg-white/10 text-white shadow-inner shadow-white/5"
                  : "text-white/55 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M12 5v14M5 12h14"
              />
            </svg>

            <span className="mt-0.5 text-[10px] font-medium">Create</span>
          </Link>

          {/* EXPLORE */}
          <Link
            href="/explore"
            className={`
              flex min-w-13 flex-col items-center justify-center
              rounded-2xl px-2 py-1.5
              transition-all duration-300
              ${
                isActive("/explore")
                  ? "bg-white/10 text-white shadow-inner shadow-white/5"
                  : "text-white/55 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                strokeWidth="1.8"
              />

              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                d="m16 16 4 4"
              />
            </svg>

            <span className="mt-0.5 text-[10px] font-medium">Explore</span>
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            className={`
              flex min-w-13 flex-col items-center justify-center
              rounded-2xl px-2 py-1.5
              transition-all duration-300
              ${
                isActive("/about")
                  ? "bg-white/10 text-white shadow-inner shadow-white/5"
                  : "text-white/55 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                strokeWidth="1.8"
              />

              <path
                strokeWidth="1.8"
                strokeLinecap="round"
                d="M12 10.5v5"
              />

              <path
                strokeWidth="2.2"
                strokeLinecap="round"
                d="M12 7.5h.01"
              />
            </svg>

            <span className="mt-0.5 text-[10px] font-medium">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;