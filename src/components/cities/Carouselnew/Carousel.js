
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import SwiperCore,{ Pagination, Navigation,EffectCoverflow } from "swiper";

import CarouselNode from "./CarouselNode";

import leftbutton from "./left.svg";
import rightbutton from "./right.svg";
SwiperCore.use([Pagination, EffectCoverflow,Navigation]);
const Carousel = (props) => {
  return (
    <div className="holder">
      <Swiper
        effect="coverflow"
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        navigation={{
        	nextEl: ".buttons .right",
        	prevEl: ".buttons .left"
        }}
        coverflowEffect={{
            rotate: 30,
            stretch: 25,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
        centeredSlides={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselNode 
            key="1"
            city="Khandwa" 
            organizer="Rajkumar" 
            state="Madhya Pradesh"
            college="SPITR Khandwa"
            topic1name="Python"
            link="https://docs.google.com/forms/d/e/1FAIpQLSfx-gNS6u2L38vUHySlQM6OXX90hIP5GrlUCFdO-SX7tjYREQ/viewform?usp=sf_link"
            topic2name="Data Analytics"
            topic1date="15th October, 2022" 
            topic2date="16th October, 2022"
            imgurl="../../../../img/carousel/1.png"
            organimg ="../../../../img/organisers/rajkumar.jpg"
            number="+91 6281548033">
          </CarouselNode>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselNode 
            key="2"
            city="Kota" 
            organizer="Narendra J. Prajapat" 
            state="Rajasthan"
            college="Career Point University"
            topic1name="Data Analytics"
            topic2name="Ethical Hacking"
            topic1date="4th November, 2022" 
            topic2date="5th November, 2022"
            imgurl="../../../../img/carousel/1.png"
            organimg="../../../../img/organisers/narendra.jpg"
            number="+91 7023972507"
            link="https://docs.google.com/forms/d/e/1FAIpQLSf25veN6qNyEXd1DPbMPmDBadWJp3AaIBL-bd5v788I_aurlA/viewform?usp=sf_link"
            >
          </CarouselNode>
        </SwiperSlide>
        
        <SwiperSlide>
          <CarouselNode
            key="3"
            city="Chittorgarh" 
            organizer="Narendra" 
            state="Rajasthan"
            college="Mewar University"
            topic1name="Machine Learning"
            topic2name="Internet of Things"
            topic1date="19th November, 2022" 
            topic2date="20th November, 2022"
            imgurl="../../../../img/carousel/1.png"
            organimg="../../../../img/organisers/narendra.jpg"
            number="+91 7023972507">
          </CarouselNode>
        </SwiperSlide>
      </Swiper>
      <br />
      <div className="buttons">
      	<img src={leftbutton} style={{cursor:'pointer'}} alt="left-button" className="left"/>
      	<img src={rightbutton} style={{cursor:'pointer'}} alt="right-button" className="right"/>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Carousel