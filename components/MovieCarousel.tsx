import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title?: String;
  movies: Movie[];
  isVerticle?: boolean;
};

function MovieCarousel({ title, movies, isVerticle }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
          isVerticle && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVerticle
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVerticle &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold mb-2">{movie.title} ({movie.release_date?.split("-")[0]})</p>
                  <hr className="mb-3"/>
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default MovieCarousel;
