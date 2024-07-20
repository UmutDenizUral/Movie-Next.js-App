import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../app/globals.css';
import { Pagination, Navigation } from 'swiper/modules';

const Slider = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      className="mySwiper rounded"
    >
      <div>{console.log(images)}</div>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content p-8">
            <Image
              src={`https://image.tmdb.org/t/p/w500${image.poster_path}`}
              fill
              alt='yok'
              className="rounded-lg border-4 border-transparent transition-colors duration-300 hover:border-gray-500"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
