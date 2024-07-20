import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../app/globals.css';
import { Pagination, Navigation } from 'swiper/modules';

const Carousel = ({ data }) => {
  return (
    <div className=' border container-xl mx-8 shadow-2xl flex flex-nowrap gap-4 m-8 p-2 overflow-x-auto'>
    <Swiper
      spaceBetween={5}
      loop={true}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper border"
      breakpoints={{
        200: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView:3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
      }}
    >
      {data.results.map((item) => (
        <SwiperSlide key={item.id} className='flex flex-col items-center text-white'>
          <img
            className='rounded-lg object-cover'
            style={{ width: 250, height: 350, objectFit: 'cover' }}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.original_title}
          />
          <p className='mt-2 text-center '>
            {item.original_title}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Carousel;
