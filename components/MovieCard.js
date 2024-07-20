import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function MovieCard({ data }) {
  return (
    <div className=''>
      <Link href={`/movies/${data.id}`}>
        <div className="p-8">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path || data.poster_path}`}
            width={250}
            height={350}
            alt={data.original_title}
            className="rounded-lg border-4 border-transparent transition-colors duration-300 hover:border-gray-500"
          />
          <p className='mt-2 text-center'>
            {data.original_title}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
