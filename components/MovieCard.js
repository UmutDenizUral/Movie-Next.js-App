import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function MovieCard({ data }) {
  return (
    <div className='m-1 '>
      <Link href={`/movies/${data.id}`}>
        <div className='relative  w-[250px] h-[300px] transition-transform duration-300 transform hover:scale-115 hover:z-10 hover:shadow-lg'>
          <div className='absolute z-10  top-2  right-3'>icon</div>
          <Image
            className='rounded-lg border-4 border-transparent transition-colors duration-300 hover:border-gray-500  object-cover'
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path || data.poster_path}`}
            fill
            alt={data.original_title}
          />
          <div className='absolute rounded bottom-0 w-full flex bg-black bg-opacity-50 p-1 text-white'>
            <h4 className=' text-left '>{data.original_title || data.original_name}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
