import MovieCarousel from "@/components/MovieCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      {/* <h1>lets build diseny</h1> */}

      {/* CarouselBanner */}

      <div>
        <MovieCarousel movies={upcomingMovies} title='Upcoming' isVerticle/>
        <MovieCarousel movies={topRatedMovies} title='Top Rated' />
        <MovieCarousel movies={popularMovies} title='Popular' />
      </div>
    </main>
  );
}
