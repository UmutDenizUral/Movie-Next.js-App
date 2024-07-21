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

  const [data, setData] = useState({ results: [] });
  const [tvData, setTvData] = useState({ results: [] })

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US', {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => {
      setData(response.data)
    })
  }, [])
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/tv/popular?language=en-US', {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => {
      setTvData(response.data)
    })
  }, [])

  return (
    <div className='bg-slate-700 p-1 h-[1800px]'>
      <Slider className='bg-red-700 p-5 m-5' sliderData={data.results} />
      <div className='mt-2'>
        <h3 className="ml-5 text-white">Popüler Filmler</h3>
        <Carousel carouselData={data} link='movies' />
      </div>
      <div className='mt-2'>
        <h3 className="ml-5 text-white">Popüler Diziler</h3>
        <Carousel carouselData={tvData } link='series' />
      </div>
    </div>
  )
}
