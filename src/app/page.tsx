import Movie from "@/Component/Movie";

export default async function Home() {
  const data =
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}
  `);
  const res = await data.json();
  // console.log(res);
  return (
    <main className="">
      <div className="grid grid-cols-fluid gap-12">
        {res.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </main>
  );
}
