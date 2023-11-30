import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  // console.log(res.result)
  // return res.result.map((movie: any) => { movie: movie.id });
  return res.results.map((movie: any) => ({
    movie: movie.id.toString(),
  }))
}

const Movie = async ({ params }: any) => {
  const { movie } = params;
  const data =
    await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}
  `);
  const res = await data.json();
  const imagePath = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="space-y-3">
      <h1 className="font-bold text-3xl">{res.title}</h1>
      <h2>{res.release_date}</h2>
      <button className="bg-green-700 px-4 py-2 rounded-md font-semibold text-sm">
        RELEASED
      </button>
      <h2>{res.popularity}k views</h2>
      <div>
        <h1>DESCRIPTION:</h1>
        <p>{res.overview}</p>
      </div>
      <Image
        src={imagePath + res.backdrop_path}
        alt={res.title}
        priority
        width={1200}
        height={1200}
        className="rounded-3xl mx-auto my-4"
      />
    </div>
  );
};

export default Movie;
