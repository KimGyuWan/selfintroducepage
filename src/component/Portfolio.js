import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ControllBtn } from './style/Commonui';
import 'swiper/css';
import './portfolio.scss'

function Portfolio(props) {
  const mainswiperRef = useRef(null)
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
        <SwiperSlide className='slide1'>
          <div className='imgbox'>
            <img src="./img1.jpg" alt="슬라이드사진1" />
          </div>
          <div className='textbox d-flex flex-column justify-content-between'>
            <p>프로젝트 1</p>
            <h3>자소서페이지</h3>
            <p>#Dynamic #Static</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide1'>
          <div className='imgbox'>
            <img src="./img1.jpg" alt="슬라이드사진1" />
          </div>
          <div className='textbox d-flex flex-column justify-content-between'>
            <p>프로젝트 1</p>
            <h3>자소서페이지</h3>
            <p>#Dynamic #Static</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide2'>
          <div className='imgbox'>
            <img src="./img1.jpg" alt="슬라이드사진1" />
          </div>
          <div className='textbox d-flex flex-column justify-content-between'>
            <p>프로젝트 2</p>
            <h3>포트캔커피</h3>
            <p>#React #Nodejs #Restful API</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide2'>
          <div className='imgbox'>
            <img src="./img1.jpg" alt="슬라이드사진1" />
          </div>
          <div className='textbox d-flex flex-column justify-content-between'>
            <p>프로젝트 2</p>
            <h3>포트캔커피 Figma</h3>
            <p>#React #Nodejs #Restful API</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide3'>
          <div className='imgbox'>
            <img src="./img1.jpg" alt="슬라이드사진1" />
          </div>
          <div className='textbox d-flex flex-column justify-content-between'>
            <p>프로젝트 3</p>
            <h3>하림펫푸드</h3>
            <p>#TeamProject</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide3'>
          <div className='imgbox'>
            <img src="./img1.jpg" alt="슬라이드사진1" />
          </div>
          <div className='textbox d-flex flex-column justify-content-between'>
            <p>프로젝트 3</p>
            <h3>하림펫푸드 Figma</h3>
            <p>#TeamProject</p>
          </div>
        </SwiperSlide>
        <ControllBtn rightv="unset" className='d-none d-lg-block' onClick={() => mainswiperRef.current.swiper.slidePrev()}><i className="bi bi-arrow-left"></i></ControllBtn>
        <ControllBtn leftv="unset" className='d-none d-lg-block' onClick={() => mainswiperRef.current.swiper.slideNext()}><i className="bi bi-arrow-right"></i></ControllBtn>
      </Swiper>
    </section>
  )
}

export default Portfolio
