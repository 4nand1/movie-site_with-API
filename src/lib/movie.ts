// src/lib/movies.ts
export type Movie = {
  id: number;
  title: string;
  year: string;
  rating: number;
  posterUrl: string;
  genre: string;
  section: "upcoming" | "popular";
};

export const movies: Movie[] = [
  {
    id: 1,
    title: "Dear Santa",
    year: "2024",
    rating: 4.5,
    posterUrl: "/posters/dear-santa.jpg",
    genre: "Comedy",
    section: "upcoming",
  },
  {
    id: 2,
    title: "Y2K",
    year: "2024",
    rating: 4.2,
    posterUrl: "/posters/y2k.jpg",
    genre: "Sci-Fi",
    section: "upcoming",
  },
  // ... бусад upcoming
  {
    id: 10,
    title: "The Shawshank Redemption",
    year: "1994",
    rating: 4.9,
    posterUrl: "/posters/shawshank.jpg",
    genre: "Drama",
    section: "popular",
  },
  // ... бусад popular
];
