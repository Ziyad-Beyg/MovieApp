import Image from "next/image";
import Link from "next/link";
import React from "react";

const Movie = ({id, title, releaseDate, posterPath}: any) => {
    const imagePath = 'https://image.tmdb.org/t/p/original/'
  return (
    <div >
      <Link href={`${id}`}>
        <Image src={imagePath + posterPath} alt={title} width={800} height={800} className="rounded-3xl" />
      </Link>
      <h2 className="font-bold text-center">{title}</h2>
      <h2 className="">{releaseDate}</h2>
    </div>
  );
};

export default Movie;
