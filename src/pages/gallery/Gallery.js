
import './Gallery.css';

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

//Import photos

import sae_photo1 from '../../assets/sae/sae_photo1.JPG';
import sae_photo2 from '../../assets/sae/sae_photo2.jpg';
import sae_photo3 from '../../assets/sae/sae_photo3.jpg';
import sae_photo4 from '../../assets/sae/sae_photo4.jpg';
import sae_photo5 from '../../assets/sae/sae_photo5.jpg';
import sae_photo6 from '../../assets/sae/sae_photo6.jpg';
import sae_photo7 from '../../assets/sae/sae_photo7.jpg';
import sae_photo8 from '../../assets/sae/sae_photo8.JPG';
import sae_photo9 from '../../assets/sae/sae_photo9.jpg';

import team1_photo1 from '../../assets/team1/team1_photo1.JPG';
import team1_photo2 from '../../assets/team1/team1_photo2.JPG';
import team1_photo3 from '../../assets/team1/team1_photo3.jpg';
import team1_photo4 from '../../assets/team1/team1_photo4.JPG';
import team1_photo5 from '../../assets/team1/team1_photo5.jpg';
import team1_photo6 from '../../assets/team1/team1_photo6.jpg';
import team1_photo7 from '../../assets/team1/team1_photo7.jpg';
import team1_photo8 from '../../assets/team1/team1_photo8.JPG';
import team1_photo9 from '../../assets/team1/team1_photo9.JPG';
import team1_photo10 from '../../assets/team1/team1_photo10.JPG';

export default function Gallery() {
    return (
        <div className='sae_gallery gardient__header'>
            <div className="sae_gallery_team">
                <h1>SAE SLIET</h1>
                <div className="sae_gallery_team_photo">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={sae_photo4} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={sae_photo8} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={sae_photo9} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={sae_photo6} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={sae_photo5} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={sae_photo1} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={sae_photo7} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={sae_photo2} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={sae_photo3} alt="No" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="sae_gallery_team">
                <h1>Green Rangers</h1>
                <div className="sae_gallery_team_photo">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={team1_photo1} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo2} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo3} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo4} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo5} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo6} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo7} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo8} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo9} alt="No" /></SwiperSlide>
                        <SwiperSlide><img src={team1_photo10} alt="No" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="sae_gallery_team">
                <h1>Junkyard Warriors</h1>
                <div className="sae_gallery_team_photo">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Coming Soon</SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="sae_gallery_team">
                <h1>Juggernauts</h1>
                <div className="sae_gallery_team_photo">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Coming Soon</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
