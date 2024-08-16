"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      image: '/images/review-01.png',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    },
    {
      id: 2,
      name: 'Jane Doe',
      image: '/images/review-01.png',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      name: 'John Doe',
      image: '/images/review-02.png',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      name: 'Jane Doe',
      image: '/images/review-03.png',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      name: 'John Doe',
      image: '/images/review-02.png',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      name: 'Jane Doe',
      image: '/images/review-03.png',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={20}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation
      modules={[Navigation, Pagination]}
      className="mySwiper"
      breakpoints={{
        643: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id} className="flex h-[324px]">
          <div className="w-full flex flex-col justify-between gap-10 h-full">
            <p className="text-justify">{review.review}</p>
            <div className="flex flex-col">
              <div className="w-14 h-14">
                <Image
                  width={100}
                  height={100}
                  quality={100}
                  src={review.image}
                  alt={review.name}
                  className="rounded-full object-cover"
                />
              </div>
              <h3>{review.name}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
