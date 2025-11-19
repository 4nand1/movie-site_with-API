// src/app/_features/_components/MovieGrid.tsx
type MovieItem = {
  id: number;
  img: string;
  title: string;
  rating: number;
};

export function MovieGrid({ data }: { data: MovieItem[] }) {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm"
        >
          <div className="h-56 bg-gray-300">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-3">
            <p className="text-[11px] text-gray-500 mb-1">
              ⭐ {item.rating} / 10
            </p>
            <p className="text-sm font-medium text-[#09090B]">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
