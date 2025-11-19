import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { DataTransfer } from "./_features/_components/genres";
import { FeatureMovies } from "./_features/_components/poster";
import { UpComingData } from "./_features/_components/upcomingData";
import { PopularData } from "./_features/_components/popularData";
import { TopRated } from "./_features/_components/topRated";
import SeeMoreButton from "./_features/_components/SeeMoreButton";
import { Footer } from "./_features/_components/Footer";
import { Default } from "./_features/_components/Default"
import { MovieGrid } from "./_features/_components/MovieGrid";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      {/* HEADER */}
      <header className="h-[64px] flex items-center justify-between px-10 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <img src="/Vector.png" alt="logo icon" />
          <img src="/Movie Z.png" alt="MovieZ" />
        </div>

        <div className="flex flex-1 items-center gap-3 max-w-[600px] mx-8">
          <NavigationMenu className="h-9 bg-white rounded-md border border-[#E4E4E7]">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium">
                Genres
              </NavigationMenuTrigger>
              <NavigationMenuContent className="border border-[#E4E4E7] rounded-lg w-[557px] h-[333px] bg-white px-5 py-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[24px] text-[#09090B] leading-6 font-semibold">
                    Genres
                  </p>
                  <p className="text-[16px] text-[#09090B] leading-6">
                    See lists of movies by genre
                  </p>
                </div>
                <div className="mt-4 w-full border-b border-[#E4E4E7]" />
                <div className="w-full flex flex-wrap gap-4 mt-5">
                  {DataTransfer.map((item, index) =>
                    Default({ key: index, name: item.name })
                  )}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>

          <div className="flex flex-1 items-center gap-2 border rounded px-2 py-1 bg-white">
            <Search className="w-4 h-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search..."
              className="w-full text-sm border-none shadow-none focus-visible:ring-0"
            />
          </div>
        </div>

        <Button className="w-8 h-8 rounded bg-gray-200 p-0">
          <img src="/Vector (2).png" alt="mode" />
        </Button>
      </header>

      {/* HERO / CAROUSEL */}
      <section className="px-10 pt-6">
        <Carousel className="w-full">
          <CarouselContent>
            {FeatureMovies.map((movie) => (
              <CarouselItem key={movie.id}>
                <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/0" />

                  <div className="relative z-10 flex h-full items-center px-10">
                    <div className="max-w-md text-white">
                      <p className="text-sm opacity-80 mb-1">Now Playing</p>

                      <h1 className="text-4xl font-bold mb-3">
                        {movie.title}
                      </h1>

                      <div className="flex items-center gap-2 text-sm mb-4">
                        <span>⭐ {movie.rating} / 10</span>
                      </div>

                      <p className="text-xs leading-5 opacity-90 mb-6">
                        {movie.description}
                      </p>

                      <Button
                        variant="outline"
                        className="bg-white text-black text-sm font-medium px-5 py-2 rounded-full border-none"
                      >
                        Watch Trailer
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* UPCOMING */}
      <section className="px-10 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#09090B]">Upcoming</h2>
          <SeeMoreButton href="/upcoming" />
        </div>

        <MovieGrid data={UpComingData} />
      </section>

      {/* POPULAR */}
      <section className="px-10 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#09090B]">Popular</h2>
          <SeeMoreButton href="/popular" />
        </div>

        <MovieGrid data={PopularData} />
      </section>

      {/* TOP RATED */}
      <section className="px-10 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#09090B]">Top Rated</h2>
          <SeeMoreButton href="/top-rated" />
        </div>

        <MovieGrid data={TopRated} />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
