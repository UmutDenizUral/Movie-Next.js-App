import React from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import ActorCard from '@/components/ActorCard';

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: process.env.API_KEY,
      },
    });

    const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
      params: {
        api_key: process.env.API_KEY,
      },
    });

    const similarMoviesResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
        page: 1,
      },
    });

    const videosResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
      },
    });

    return {
      props: {
        movie: movieResponse.data,
        cast: castResponse.data.cast,
        similarMovies: similarMoviesResponse.data.results,
        videos: videosResponse.data.results, // Fragman verilerini buraya ekleyin
      },
    };
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return {
      props: { movie: null, cast: [], similarMovies: [], videos: [] },
    };
  }
}


const MovieDetails = ({ movie, cast, similarMovies, videos }) => {
  if (!movie) return <div>Film bulunamadı.</div>;
  const trailer = videos.find(video => video.type === 'Trailer'); // Fragmanı bul


  return (
    <div className='bg-slate-700'>
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              width={500}
              height={'100%'}
              alt={movie.original_title}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-3/4 md:pl-10">
            <h1 className="text-4xl font-bold mb-4">{movie.original_title}</h1>
            <p className="text-lg mb-6">{movie.overview}</p>
            <div className="mb-6">
              <span className="font-bold">Türler: </span>
              {movie.genres.map((genre) => genre.name).join(', ')}
            </div>
            <div className="mb-6">
              <span className="font-bold">Çıkış Tarihi: </span>
              {movie.release_date}
            </div>
            <div className="mb-6">
              <span className="font-bold">Ortalama Oy: </span>
              {movie.vote_average}
            </div>

          </div>
        </div>
        <div className='h-[550px]'>
          {trailer && (
            <div className="mt-10 h-[500px]">
              <h2 className="text-3xl font-bold mb-6">Fragman</h2>
              <div className="h-full w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={movie.original_title}
                  frameBorder="1"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div> 
           
          )}
        </div>


        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">Oyuncu Kadrosu</h2>
          <Swiper
            spaceBetween={10}
            loop={true}
            navigation
            modules={[Navigation]}
            className=" "
            breakpoints={{
              200: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              390: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 10,
                spaceBetween: 20,
              },
            }}
          >
            {cast.map(actor => (
              <SwiperSlide key={actor.id} >
                <ActorCard data={actor} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">Benzer Filmler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarMovies.map((similarMovie) => (
              <div key={similarMovie.id} className="relative">
                <Link href={`/movies/${similarMovie.id}`}>
                  <div className="relative w-full h-64 overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105 hover:z-10 hover:shadow-lg">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`}
                      alt={similarMovie.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-2 text-white">
                      <h4 className="text-left">{similarMovie.title}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
