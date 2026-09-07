import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  // 1. Get the handle from the URL
  const resolvedParams = await params;
  const rawHandle = resolvedParams?.handle
    ? decodeURIComponent(resolvedParams.handle).trim()
    : "";

  if (!rawHandle) {
    return notFound();
  }

  // 2. Database connection
  const client = await clientPromise;
  const db = client.db("socialtree");
  const collection = db.collection("links");

  // 3. Database perform a case‑insensitive Regex search.
  const item = await collection.findOne({
    handle: { $regex: new RegExp(`^${rawHandle}$`, "i") },
  });

  // if not available
  if (!item) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen bg-emerald-900 justify-center items-start py-10 font-bold text-cyan-50">
      <div className="avatar flex flex-col justify-center items-center w-full max-w-md px-4">
        {/* Avatar */}
        <img
          className="rounded-full h-28 w-28 object-cover shadow-lg mb-2"
          src={item.avatar || "/profile/avatar (1).png"}
          alt={item.handle}
        />

        {/* Handle */}
        <span className="font-bold my-2 text-xl">@{item.handle}</span>

        {/* Links */}
        <div className="links w-full flex flex-col gap-3.5 mt-2">
          {item.links &&
            item.links.map((linkItem, index) => (
              <a
                key={index}
                href={linkItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block w-full p-px font-semibold text-white 
                           rounded-2xl shadow-xl shadow-black/40 
                           transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Neon Gradient Border on Hover */}
                <span
                  className="absolute inset-0 rounded-2xl bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 
                             opacity-40 transition-opacity duration-500 group-hover:opacity-100 group-hover:blur-sm"
                />

                <span
                  className="absolute inset-0 rounded-2xl bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 
                             opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Button Core Surface */}
                <span className="relative z-10 block w-full px-6 py-3 rounded-2xl bg-green-950 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="tracking-wide text-base font-medium text-white transition-all duration-300 group-hover:translate-x-1">
                      {linkItem.linktext}
                    </span>

                    <svg
                      className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
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
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
