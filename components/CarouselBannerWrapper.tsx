import CarouselBanner from "@/components/CarouselBanner";
import { getPopularMovies } from "@/lib/getMovies";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getPopularMovies();

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;
