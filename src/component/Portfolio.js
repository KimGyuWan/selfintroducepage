import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ControllBtn } from './style/Commonui';
import 'swiper/css';
import './portfolio.scss'

function Portfolio(props) {
  const mainswiperRef = useRef(null)

  const data = [
    {
      cls: "slide1",
      src: "./img1.jpg",
      alt: "슬라이드사진1",
      firp: "프로젝트 1",
      h3: "자소서페이지",
      secp: "#Dynamic #Static"
    },
    {
      cls: "slide1",
      src: "./img1.jpg",
      alt: "슬라이드사진1",
      firp: "프로젝트 1",
      h3: "자소서페이지",
      secp: "#Dynamic #Static"
    },
    {
      cls: "slide2",
      src: "./img1.jpg",
      alt: "슬라이드사진1",
      firp: "프로젝트 2",
      h3: "포트캔커피",
      secp: "#React #Nodejs #Restful API"
    },
    {
      cls: "slide2",
      src: "./img1.jpg",
      alt: "슬라이드사진1",
      firp: "프로젝트 2",
      h3: "포트캔커피 Figma",
      secp: "#React #Nodejs #Restful API"
    },
    {
      cls: "slide3",
      src: "./img1.jpg",
      alt: "슬라이드사진1",
      firp: "프로젝트 3",
      h3: "하림펫푸드",
      secp: "#TeamProject"
    },
    {
      cls: "slide3",
      src: "./img1.jpg",
      alt: "슬라이드사진1",
      firp: "프로젝트 3",
      h3: "하림펫푸드 Figma",
      secp: "#TeamProject"
    },
  ]

  return (
    <section id={props.idname} className='ml-3 mr-lg-3 d-lg-flex'>
      <div className='col-lg-2'>
        <h2 className='mb-5'>프론트엔드
          <br className='d-none d-lg-block' />
          UXUI
        </h2>
        <i className="bi bi-arrow-right d-none d-lg-block"></i>
      </div>

      <Swiper
        className='col-lg-10'
        spaceBetween={10}
        slidesPerView={2.2}
        onSwiper={(swiper) => console.log(swiper)}
        ref={mainswiperRef}
      >
        {
          data.map((el, idx) => {
            return (
              <SwiperSlide className={el.cls} key={idx}>
                <div className='imgbox'>
                  <img src={el.src} alt={el.alt} />
                </div>
                <div className='textbox d-flex flex-column justify-content-between'>
                  <p>{el.firp}</p>
                  <h3>{el.h3}</h3>
                  <p>{el.secp}</p>
                </div>
              </SwiperSlide>
            )
          })
        }
        <ControllBtn rightv="unset" className='d-none d-lg-block' onClick={() => mainswiperRef.current.swiper.slidePrev()}><i className="bi bi-arrow-left"></i></ControllBtn>
        <ControllBtn leftv="unset" className='d-none d-lg-block' onClick={() => mainswiperRef.current.swiper.slideNext()}><i className="bi bi-arrow-right"></i></ControllBtn>
      </Swiper>
    </section>
  )
}

export default Portfolio
