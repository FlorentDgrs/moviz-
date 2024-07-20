import Image from "next/image";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieCardProps {
  results: Movie[];
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

const MovieCard: React.FC<MovieCardProps> = ({ results }) => {
  const movie = results.map((result) => (
    <div className="w-60 flex-shrink-0 flex flex-col m-4" key={result.id}>
      <div className="w-60">
        <Image
          alt="poster"
          width={200}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
          className="rounded-t-md"
        />
      </div>
      <div className="text-white-1 text-sm font-bold mt-2 text-start">
        {result.original_title}
      </div>
      <div className="w-60mt-1 text-xs text-white-2 text-start">
        {truncateText(result.overview, 180)}
      </div>
    </div>
  ));

  return <div className="flex flex-wrap justify-center mx-4 my-4">{movie}</div>;
};

export default MovieCard;
