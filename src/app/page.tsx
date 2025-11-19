"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


const mockMovies = [
  { id: 1, title: "Dune: Part Two", year: 2024, type: "Movie" },
  { id: 2, title: "Oppenheimer", year: 2023, type: "Movie" },
  { id: 3, title: "Barbie", year: 2023, type: "Movie" },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    type: "Movie",
  },
  { id: 5, title: "John Wick: Chapter 4", year: 2023, type: "Movie" },
  { id: 6, title: "The Batman", year: 2022, type: "Movie" },
  { id: 7, title: "Guardians of the Galaxy Vol. 3", year: 2023, type: "Movie" },
  { id: 8, title: "Avatar: The Way of Water", year: 2022, type: "Movie" },
  { id: 9, title: "Wonka", year: 2023, type: "Movie" },
  { id: 10, title: "Inside Out 2", year: 2024, type: "Movie" },
  {
    id: 11,
    title: "Mission: Impossible – Dead Reckoning",
    year: 2023,
    type: "Movie",
  },
  { id: 12, title: "Interstellar", year: 2014, type: "Movie" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#020617] flex flex-col">
      {/* HEADER */}
      <header className="h-[72px] bg-white border-b border-slate-200 flex items-center justify-between px-10">
        {/* logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#4338CA]" />
          <span className="font-semibold text-lg tracking-wide text-slate-900">
            Movie Z
          </span>
        </div>

        {/* nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
          <button className="hover:text-slate-900">Home</button>
          <button className="hover:text-slate-900">Movies</button>
          <button className="hover:text-slate-900">TV Shows</button>
          <button className="hover:text-slate-900">My List</button>
        </nav>

        {/* search + avatar */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
            <input
              className="bg-transparent outline-none text-xs text-slate-600 w-40"
              placeholder="Search movies, TV shows..."
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-300" />
        </div>
      </header>

      {/* CONTENT */}
      <section className="flex-1 px-10 py-6 flex flex-col gap-6">
        {/* HERO + GRID ROW */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* HERO LEFT */}
          <div className="lg:w-[360px] w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200 flex flex-col">
            <div className="relative h-[220px] bg-gradient-to-r from-[#4338CA] via-[#6366F1] to-[#EC4899]">
              {/* poster image placeholder */}
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center" />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

              {/* text */}
              <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/70 mb-1">
                  Featured today
                </p>
                <h1 className="text-2xl font-bold leading-snug mb-1">
                  The Witcher: Wild Hunt
                </h1>
                <p className="text-[11px] text-white/80 line-clamp-2 mb-3">
                  A monster hunter struggles to find his place in a world where
                  people often prove more wicked than beasts.
                </p>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-1.5 rounded-full bg-white text-[11px] font-semibold text-slate-900">
                    Watch now
                  </button>
                  <button className="px-4 py-1.5 rounded-full border border-white/60 text-[11px] font-semibold text-white/90">
                    Add to list
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3 bg-white">
              <span className="text-[11px] text-slate-500">
                IMDB 8.7 • Action • 2024 • 2h 16m
              </span>
              <button className="text-[11px] font-medium text-[#4338CA]">
                + Follow
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: TABS + GRID */}
          <div className="flex-1 flex flex-col">
            {/* tabs row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2 text-xs">
                <button className="px-4 py-1.5 rounded-full bg-[#4338CA] text-white font-medium">
                  Popular
                </button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">
                  Upcoming
                </button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">
                  Top rated
                </button>
                <button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50">
                  Now playing
                </button>
              </div>

              <button className="text-[11px] text-[#4338CA] hover:underline">
                See all
              </button>
            </div>

            {/* movie grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {mockMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  {/* poster placeholder */}
                  <div className="h-40 bg-slate-200" />
                  <div className="p-3 flex flex-col gap-1">
                    <p className="text-[11px] text-slate-500">
                      {movie.type} • {movie.year}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
                      {movie.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* доор өөр секц нэмэх бол эндээс үргэлжлүүлнэ */}
      </section>

      {/* FOOTER */}
      <footer className="h-16 bg-[#4338CA] flex items-center justify-center mt-4">
        <p className="text-[11px] text-white/80 tracking-wide">
          © 2024 Movie Z. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
