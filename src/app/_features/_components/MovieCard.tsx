import Image from "next/image";
import { Movie } from "@/lib/movies";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="w-[160px] cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          width={160}
          height={240}
          className="w-full h-[240px] object-cover"
        />
      </div>

      <div className="mt-2 flex flex-col gap-1">
        <p className="text-sm font-semibold line-clamp-1">
          {movie.title}
        </p>
        <span className="text-xs text-muted-foreground">
          ★ {movie.rating.toFixed(1)} • {movie.year}
        </span>
      </div>
    </div>
  );
};
