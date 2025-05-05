import Image from "next/image";
import {MovieCard} from "../components/MovieCard.js"
export default function Home() {
  return (
    <section className="flex flex-col">
      <h1 className="mt-3 text-center text-purple-500 font-sans text-7xl"> Movie List </h1>
      <div className="flex justify-center p-10 gap-5">
        <MovieCard 
             movieName= "Oppenheimer"
             moviePoster="https://m.media-amazon.com/images/I/81218n6JFgL.jpg"
             movieRelease= "21 July 2023"
             />
         <MovieCard
            moviePoster="https://image.tmdb.org/t/p/original/wWJbBo5yjw22AIjE8isBFoiBI3S.jpg"
            movieName="The Godfather"
            movieRelease="24 March 1972"
        />
        <MovieCard
            moviePoster="https://cdn.kinocheck.com/i/m2s0jjjwgk.jpg"
            movieName="Parasite"
            movieRelease="30 May 2019 " />
      </div>
    </section>
  );
}
