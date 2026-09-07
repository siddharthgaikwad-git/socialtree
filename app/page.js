"use client";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [text, setText] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  const avatars = [
    "/profile/avatar (1).png",
    "/profile/avatar (2).png",
    "/profile/avatar (3).png",
    "/profile/avatar (4).png",
    "/profile/avatar (5).png",
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* --------------------------------------------
          HERO SECTION
      -------------------------------------------- */}

      <section className="grid min-h-screen grid-cols-1 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-800 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center justify-center px-6 pb-12 pt-32 text-center sm:px-10 md:items-start md:px-10 md:pb-0 md:pt-[25vh] md:text-left lg:mx-4 lg:px-10">
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            The only link your bio will ever need.
          </h1>

          <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-gray-200 sm:text-lg md:text-xl">
            Showcase your latest projects, videos, shops, and social channels
            in one seamless hub. Built by creators to make your online presence
            look effortless and convert visitors into followers.
          </p>

          {/* INPUT + BUTTON */}
          <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="socialtr.ee/"
              className="w-full rounded-lg bg-white px-4 py-4 outline-[#e8a323] sm:w-64"
            />

            <button
              onClick={createTree}
              className="
                w-full
                cursor-pointer
                rounded-full
                bg-linear-to-br
                from-pink-500
                to-orange-400
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-pink-500/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:from-pink-600
                hover:to-orange-500
                hover:shadow-xl
                hover:shadow-pink-500/30
                focus:outline-none
                focus:ring-4
                focus:ring-pink-200
                dark:focus:ring-pink-800
                sm:w-auto
                sm:px-10
                md:px-14
              "
            >
              Get started for free
            </button>
          </div>
        </div>

        {/* --------------------------------------------
            RIGHT SIDE - AUTOMATIC PROFILE CAROUSEL
        -------------------------------------------- */}

        <div className="relative flex h-160 items-center justify-center overflow-hidden md:h-screen">
          {/* Ambient Glow */}
          <div
            className="
              absolute
              h-87
              w-87
              rounded-full
              bg-fuchsia-500/20
              blur-[100px]
              sm:h-105
              sm:w-105
              sm:blur-[130px]
              lg:h-125
              lg:w-125
            "
          />

          <div
            className="
              absolute
              -right-10
              -top-10
              h-55
              w-55
              rounded-full
              bg-indigo-500/20
              blur-[90px]
              sm:h-75
              sm:w-75
              sm:blur-[110px]
            "
          />

          <div
            className="
              absolute
              -bottom-10
              -left-10
              h-55
              w-55
              rounded-full
              bg-cyan-400/10
              blur-[90px]
              sm:h-75
              sm:w-75
              sm:blur-[110px]
            "
          />

          {/* Carousel Container */}
          <div className="relative h-130 w-full max-w-xl sm:h-150">
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              {avatars.map((image, index) => {
                const position = (index - currentSlide + 5) % 5;

                return (
                  <div
                    key={image}
                    className={`
                      absolute
                      transition-all
                      duration-1200
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${
                        position === 0
                          ? "z-30 translate-y-0 scale-100 rotate-0 opacity-100"
                          : position === 1
                            ? "z-20 translate-x-20 translate-y-10 scale-[0.82] rotate-[4deg] opacity-50 blur-[1px] sm:translate-x-28 sm:scale-[0.88]"
                            : position === 4
                              ? "z-20 -translate-x-20 translate-y-10 scale-[0.82] rotate-[-4deg] opacity-50 blur-[1px] sm:-translate-x-28 sm:scale-[0.88]"
                              : "pointer-events-none z-10 translate-y-24 scale-75 opacity-0"
                      }
                    `}
                  >
                    {/* Center Glow */}
                    <div
                      className={`
                        absolute
                        -inset-5
                        rounded-[2.5rem]
                        bg-linear-to-br
                        from-cyan-400/20
                        via-purple-500/20
                        to-pink-500/20
                        blur-2xl
                        transition-opacity
                        duration-1000
                        ${position === 0 ? "opacity-100" : "opacity-0"}
                      `}
                    />

                    {/* Card */}
                    <div
                      className="
                        relative
                        h-97
                        w-62
                        rounded-4xl
                        bg-linear-to-br
                        from-white/50
                        via-white/20
                        to-white/5
                        p-px
                        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                        sm:h-105
                        sm:w-65
                        sm:rounded-[2.2rem]
                      "
                    >
                      <div
                        className="
                          relative
                          flex
                          h-full
                          w-full
                          flex-col
                          items-center
                          rounded-4xl
                          bg-white/95
                          px-4
                          py-6
                          backdrop-blur-xl
                          sm:rounded-[2.2rem]
                          sm:px-5
                          sm:py-8
                        "
                      >
                        {/* Avatar Ring */}
                        <div
                          className="
                            relative
                            rounded-full
                            bg-linear-to-br
                            from-cyan-400
                            via-purple-500
                            to-pink-500
                            p-0.75
                            shadow-lg
                            shadow-purple-500/20
                          "
                        >
                          <img
                            src={image}
                            alt={`SocialTree profile ${index + 1}`}
                            className="
                              h-20
                              w-20
                              rounded-full
                              border-4
                              border-white
                              object-cover
                              sm:h-24
                              sm:w-24
                              md:h-28
                              md:w-28
                            "
                          />
                        </div>

                        {/* Profile */}
                        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:mt-5 sm:text-xl">
                          @socialtree
                        </h3>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          Connect • Share • Grow
                        </p>

                        {/* Links */}
                        <div className="mt-5 w-full space-y-2 sm:mt-7 sm:space-y-2.5">
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              bg-gray-950
                              px-3
                              py-2.5
                              text-xs
                              font-medium
                              text-white
                              sm:px-4
                              sm:py-3
                              sm:text-sm
                            "
                          >
                            <span>Instagram</span>
                            <span>↗</span>
                          </div>

                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              bg-gray-100
                              px-3
                              py-2.5
                              text-xs
                              font-medium
                              text-gray-800
                              sm:px-4
                              sm:py-3
                              sm:text-sm
                            "
                          >
                            <span>GitHub</span>
                            <span>↗</span>
                          </div>

                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              bg-gray-100
                              px-3
                              py-2.5
                              text-xs
                              font-medium
                              text-gray-800
                              sm:px-4
                              sm:py-3
                              sm:text-sm
                            "
                          >
                            <span>YouTube</span>
                            <span>↗</span>
                          </div>
                        </div>

                        {/* Tiny Branding */}
                        <div
                          className="
                            absolute
                            bottom-1
                            text-[9px]
                            uppercase
                            tracking-[0.2em]
                            text-gray-400
                            sm:text-[10px]
                          "
                        >
                          💖 socialtree 💖
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------
          ABOUT SECTION
      -------------------------------------------- */}

      <section
        className="
          grid
          min-h-screen
          grid-cols-1
          items-center
          gap-10
          bg-[#3a33ca]
          px-6
          py-20
          sm:px-10
          md:grid-cols-2
          md:gap-16
          md:px-12
          md:pt-[20vh]
        "
      >
        {/* Image */}
        <div className="flex justify-center">
          <img
            className="h-auto w-full max-w-70 sm:max-w-87 md:w-95"
            src="/about.png"
            alt="About SocialTree"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h1
            className="
              max-w-4xl
              text-4xl
              font-extrabold
              tracking-tight
              text-pink-400
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Connect your entire world in one link.
          </h1>

          <p
            className="
              mt-6
              max-w-xl
              text-base
              font-medium
              leading-relaxed
              text-white
              sm:text-lg
              md:text-xl
            "
          >
            Bring your socials, projects, stores, and content together.
            Customize your Socialtree in seconds to match your brand and boost
            your clicks.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <button
              className="
                w-full
                max-w-xs
                cursor-pointer
                rounded-full
                bg-linear-to-br
                from-blue-500
                to-violet-400
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                shadow-pink-500/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:from-blue-600
                hover:to-violet-500
                hover:shadow-xl
                hover:shadow-pink-500/30
                focus:outline-none
                focus:ring-4
                focus:ring-pink-200
                dark:focus:ring-pink-800
                sm:w-auto
                sm:px-14
              "
            >
              Claim your Socialtree
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}