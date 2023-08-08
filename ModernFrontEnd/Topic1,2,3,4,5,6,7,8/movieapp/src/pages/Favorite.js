import MovieCard from "feature/home/components/MovieCard";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";

const FavoritePage = () => {
  const { state } = useGlobalState();

  return (
    <div className="d-flex gap-4 flex-wrap py-5">
      {state.favorite?.map((movie, index) => (
        <MovieCard key={"movie" + index} {...movie} />
      ))}
    </div>
  );
};

export default FavoritePage;
