import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../app/globals.css';
import { Pagination, Navigation } from 'swiper/modules';
import MovieCard from './MovieCard';

const Carousel = ({ carouselData  }) => {
  return (
    <div >
    <Swiper
      spaceBetween={10}
      loop={true}
      navigation
      modules={[Pagination, Navigation]}
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
          slidesPerView:3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
    >
      {carouselData.results.map((item) => (
        <SwiperSlide key={item.id} className='flex flex-col items-center text-white space-x-8 '>
         <MovieCard data={item}/>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Carousel;
