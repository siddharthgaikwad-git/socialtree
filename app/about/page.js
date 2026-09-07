"use client";

import React from "react";
import Navbar from "../components/Navbar";

const steps = [
  {
    number: "01",
    title: "Choose a handle",
    description: "Pick the username you want people to use to find your page.",
  },
  {
    number: "02",
    title: "Add your links",
    description:
      "Add your Instagram, YouTube, GitHub, portfolio or any link you want to share.",
  },
  {
    number: "03",
    title: "Choose your avatar",
    description:
      "Pick a profile picture and give your SocialTree a little personality.",
  },
  {
    number: "04",
    title: "Share it",
    description:
      "Your page is ready. Share your SocialTree wherever you want.",
  },
];

const principles = [
  {
    icon: "01",
    title: "No Login",
    description:
      "You don't need to create an account just to make a simple link page.",
  },
  {
    icon: "02",
    title: "Keep It Simple",
    description:
      "No complicated dashboard. Just the things you actually need.",
  },
  {
    icon: "03",
    title: "Make It Yours",
    description:
      "Your handle, your links, your avatar and your own little corner of the web.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#020b21] text-white">
      <Navbar />

      {/* --------------------------------------------------
          BACKGROUND (Constrained in its own overflow container)
      -------------------------------------------------- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute left-[15%] top-[-10%] h-75 w-75 rounded-full bg-teal-500/20 blur-[120px] sm:h-125 sm:w-125 sm:blur-[140px]" />
        <div className="absolute right-[-10%] top-[30%] h-75 w-75 rounded-full bg-purple-600/20 blur-[120px] sm:h-125 sm:w-125 sm:blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-75 w-75 rounded-full bg-blue-600/20 blur-[120px] sm:h-112 sm:w-md sm:blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[3rem_3rem] mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_65%,transparent_100%) sm:bg-size-[4rem_4rem]" />
      </div>

      <div className="relative z-10">
        {/* --------------------------------------------------
            HERO
        -------------------------------------------------- */}
        <section className="mx-auto flex max-w-6xl items-center px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="grid w-full items-center gap-14 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            
            {/* Hero Image */}
            <div className="flex justify-center md:justify-start pt-16 sm:pt-8">
              <img
                className="h-auto w-full max-w-70 rounded-3xl object-contain sm:max-w-110 md:max-w-full"
                src="aboutme.png"
                alt="About SocialTree"
              />
            </div>

            {/* Hero Content */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-5xl md:text-6xl animate-[fadeUp_.9s_ease-out]">
                A simple place for{" "}
                <span className="block bg-linear-to-r from-teal-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  everything you share.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8 md:mx-0 animate-[fadeUp_1.1s_ease-out]">
                SocialTree is a simple link-sharing platform built to bring your
                important links together in one place — without making you jump
                through hoops first.
              </p>

              <div className="mt-8 flex justify-center md:justify-start">
                <a
                  href="/generate"
                  className="group relative overflow-hidden rounded-xl bg-white px-6 py-3.5 text-center font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(45,212,191,.2)]"
                >
                  <span className="relative z-10">Create your SocialTree</span>
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-teal-300 via-cyan-300 to-purple-400 transition-transform duration-500 group-hover:translate-x-0" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* --------------------------------------------------
            THE REAL STORY
        -------------------------------------------------- */}
        <section
          id="story"
          className="border-y border-white/6 bg-white/1.5"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
              
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] pt-2 sm:pt-0 text-teal-400">
                  The idea
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                  Why did I build
                  <span className="block text-white/30">SocialTree?</span>
                </h2>
              </div>

              <div className="space-y-6 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                <p>The idea behind SocialTree is pretty simple.</p>
                <p>
                  I liked the concept of having multiple links in one place,
                  but I wanted to build something of my own — with my own
                  design, my own experience and my own approach.
                </p>
                <p>
                  Instead of making people create an account just to share a few
                  links, I wanted the process to be as straightforward as
                  possible.
                </p>

                <div className="my-8 h-px w-full bg-linear-to-r from-teal-400/40 via-purple-400/20 to-transparent" />

                <p className="text-white/90">
                  Choose a handle.
                  <br />
                  Add your links.
                  <br />
                  Pick an avatar.
                  <br />
                  Share your page.
                </p>

                <p>That&apos;s basically the idea behind SocialTree.</p>
              </div>

            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            NO LOGIN SECTION
        -------------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 rounded-4xl bg-teal-400/10 blur-[60px] sm:blur-[80px]" />
              <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/2.5 p-5 sm:p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
                
                <div className="mb-6 flex items-center gap-2 border-b border-white/6 pb-4 sm:mb-8 sm:pb-5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                  <div className="ml-2 truncate rounded-lg bg-white/4 px-3 py-1.5 text-[11px] text-white/25 sm:ml-4 sm:text-xs">
                    socialtree.app/yourhandle
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-teal-400/30 to-purple-500/30 ring-1 ring-white/10 sm:h-20 sm:w-20">
                    <span className="text-2xl sm:text-3xl">✦</span>
                  </div>
                  <div className="mt-4 h-4 w-28 rounded-full bg-white/10" />

                  <div className="mt-6 w-full space-y-3 sm:mt-7">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="h-11 rounded-xl border border-white/10 bg-white/[0.035] transition-all duration-300 hover:border-teal-400/30 hover:bg-white/6 sm:h-12"
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
                Keep it simple
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                No login.
                <span className="block text-white/30">No unnecessary steps.</span>
              </h2>
              <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                One of the things I wanted most was to keep SocialTree easy.
                You shouldn&apos;t need to create an account, remember another
                password or learn another complicated dashboard just to make
                a page with your links.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-teal-300">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-400/20 bg-teal-400/10">
                  ✓
                </span>
                <span>Create it and share it.</span>
              </div>
            </div>

          </div>
        </section>

        {/* --------------------------------------------------
            HOW IT WORKS
        -------------------------------------------------- */}
        <section className="border-y border-white/6 bg-white/[0.012]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
            <div className="mb-12 text-center sm:mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                How it works
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Four simple steps.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-white/40 sm:text-base">
                No complicated setup. Just create your page and start sharing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/2.5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/20 hover:bg-white/5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-teal-400/80">
                        {step.number}
                      </span>
                      {index !== steps.length - 1 && (
                        <span className="hidden text-white/20 lg:block">→</span>
                      )}
                    </div>
                    <h3 className="mt-8 text-lg font-semibold sm:mt-10">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-6 h-px w-0 bg-linear-to-r from-teal-400 to-purple-500 transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            PRINCIPLES
        -------------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
          <div className="mb-12 max-w-xl sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
              What matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Built with a few
              <span className="block text-white/30">simple principles.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/2.5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/4.5 sm:rounded-3xl sm:p-8"
              >
                <span className="text-sm font-semibold text-teal-400">
                  {item.icon}
                </span>
                <h3 className="mt-8 text-xl font-semibold sm:mt-12 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/45 sm:leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------
            FINAL STATEMENT
        -------------------------------------------------- */}
        <section className="relative overflow-hidden border-y border-white/6">
          <div className="absolute inset-0 bg-linear-to-br from-teal-500/4 via-transparent to-purple-500/6" />
          <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 md:py-32">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-lg text-teal-300 sm:h-14 sm:w-14 sm:text-xl">
              ✦
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Simple idea.
              <span className="block bg-linear-to-r from-teal-300 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Built my way.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              SocialTree isn&apos;t trying to make link sharing complicated.
              Sometimes, a simple idea is all you need.
            </p>
          </div>
        </section>

        {/* --------------------------------------------------
            CTA
        -------------------------------------------------- */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-28">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-14 text-center shadow-2xl shadow-black/30 sm:rounded-4xl sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute left-1/2 -top-24 h-75 w-75 -translate-x-1/2 rounded-full bg-teal-400/10 blur-[100px]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
                Ready?
              </p>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Create your SocialTree.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
                Choose your handle, add your links and you&apos;re ready to share.
              </p>
              <a
                href="/generate"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(45,212,191,.15)] sm:py-4"
              >
                Get started
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------
            FOOTER
        -------------------------------------------------- */}
        <footer className="border-t border-white/6 bg-black">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-4 sm:text-left">
           <div>❤️‍🩹</div>
            <p className="text-sm text-white/70">Simple. Personal. Yours.</p>
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} SocialTree
            </p>
          </div>
        </footer>
      </div>

      {/* --------------------------------------------------
          ANIMATIONS
      -------------------------------------------------- */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}