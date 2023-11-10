import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import MovieCard from './MovieCard';


import { MovieCardType } from '@/types/types';
import MovieCard from './MovieCard';

const MovieCarousel = () => {

    const Movies: MovieCardType[] = [
        {
            title: "Jawan",
            imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICA2MzFLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330424-lfjdrkckjb-portrait.jpg",
            _id: "1",
            rating: 8.5,
            type: "Action/Thriller"
        },
        {
            title: "Leo",
            imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICA0OTcuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351731-qfdstntmet-portrait.jpg",
            _id: "2",
            rating: 8.3,
            type: "Action/Thriller"
        },
        {
            title: "Bhagavanth Kesari",
            imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMzBLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355551-swtqqeuvkq-portrait.jpg",
            _id: "3",
            rating: 8.7,
            type: "Action/Thriller"
        },
        {
            title: "MAD",
            imageUrl: "data:image/jpeg;base64,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",
            _id: "4",
            rating: 8.5,
            type: "Comedy/drama"
        },
        {
            title: "Skanda",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/skanda-et00355947-1689228415.jpg",
            _id: "5",
            rating: 7.2,
            type: "Action/Drama"
        },
        {
            title: "Japan",
            imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/japan-et00370522-1695382803.jpg",
            _id: "6",
            rating: 8.5,
            type: "Action/Comedy"
        }
    ];
    return (
        <div className='sliderout'>
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    '@1.50': {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    Movies.map((Movie) => {
                        return (
                            <SwiperSlide>
                                <MovieCard {...Movie} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default MovieCarousel