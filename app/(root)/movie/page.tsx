import MovieCard from "@/components/MovieCard";

const API_KEY = process.env.API_KEY;

export default async function Movie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failes to fetch data");
  }
  const results = data.results;
  // console.log(results);

  return (
    <div className="w-full">
      <MovieCard results={results} />
    </div>
  );
}
