import { MovieCard } from "./MovieCard";
import { movies } from "@/lib/movies";

type Props = {
  title: string;
  section: "upcoming" | "popular";
};

export const MovieSection = ({ title, section }: Props) => {
  const filtered = movies.filter((m) => m.section === section);

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="text-sm text-muted-foreground hover:underline">
          See more
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};
