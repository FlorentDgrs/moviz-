import React from "react";

const MovieDetails = ({ params }: { params: { movieId: string } }) => {
  return <div className="text-white-1">MovieDetails for {params.movieId}</div>;
};

export default MovieDetails;
