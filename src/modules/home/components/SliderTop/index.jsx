import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
import { useEffect, useRef, useState } from "react";
import cls from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextLineThrough from "components/TextLineThrough/index";
import image1 from "assets/images/slider_top/Skull - 63533.mp4";
import image2 from "assets/images/slider_top/h1-slide-3-1.jpg";
import image3 from "assets/images/slider_top/h1-slide-2-1.jpg";

SwiperCore.use([Autoplay]);

const SliderTop = () => {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(1);
  const [slideBack, setSlideBack] = useState(false);

  const sliderImages = [
    {
      id: 1,
      title: "Every Things Is Secret",
      // eslint-disable-next-line jsx-a11y/alt-text
      img: (
        <video autoPlay="autoPlay" loop muted>
          <source src={image1} type="video/mp4" />
        </video>
      ),
    },
    {
      id: 2,
      title: "Memories Lost Love Found",
      // eslint-disable-next-line jsx-a11y/alt-text
      img: <img src={image2} alt="image2" />,
    },
    {
      id: 3,
      title: "Fireplace And Other Tales",
      // eslint-disable-next-line jsx-a11y/alt-text
      img: <img src={image3} alt="image3" />,
    },
  ];

  const handleClickPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
      setSlideBack(true);
    }
  };

  const handleClickNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      setSlideBack(false);
    }
  };

  const handleSlideChange = (e) => {
    setIndex(e.realIndex + 1);
  };

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={16}
      effect="fade"
      fadeEffect={{
        crossFade: false,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
      loop
      onSlideChange={handleSlideChange}
      autoplay={{
        delay: 5000,
      }}
    >
      {sliderImages.map((image) => {
        const slideActive = image.id === index;
        return (
          <SwiperSlide>
            <span className={`slide-title ${!!slideActive ? "fade-in" : ""}`}>
              {image.title}
            </span>
            {image.img}
          </SwiperSlide>
        );
      })}
      <div className="slider-top__nav-custom">
        <button className="swiper-slide-prev" onClick={handleClickPrev}>
          <TextLineThrough color="white">Prev</TextLineThrough>
        </button>
        <span></span>
        <button className="swiper-slide-next" onClick={handleClickNext}>
          <TextLineThrough color="white">Next</TextLineThrough>
        </button>
      </div>
      <div className="slider-top__column-left">
        <ul className="social-list">
          <li>
            <FontAwesomeIcon icon="fa-brands fa-instagram-square" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </li>
        </ul>
      </div>
      <div className="slider-top__column-right">
        <div
          className={cls(`progress slide-${index}`, {
            back: slideBack,
          })}
        ></div>
        <span>{`0${index}`}</span>
      </div>
    </Swiper>
  );
};

export default SliderTop;
