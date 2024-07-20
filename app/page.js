'use client'
import './globals.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from '@/components/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Carousel from '@/components/Carousel';

export default function Page() {
  const API_KEY = '445cc05f969b880a5fb966d592366db0';

  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US', {
      params: {
        api_key: API_KEY
      }
    }).then(response => {
      setData(response.data)
    })
  }, [])

  return (
    <div className='bg-slate-700 p-4'>
      <Slider images={data.results} />
      <div>
        <h3 className="text-white">Popüler Filmler</h3>
      </div>
      <div>
        <Carousel data={data}/>
      </div>
      
    </div>
  )
}
