import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

import styled from 'styled-components';
import '@styles/components/swiper.css';

import img1 from '@assets/images/slide/main1.jpg';
import img2 from '@assets/images/slide/main2.jpg';
import img3 from '@assets/images/slide/main3.jpg';

const MainSwiperWrap = styled.div`
  height: calc(100vh - 261px);
  overflow: hidden;
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    height: calc(100vh - 141px);
  }
`;
const SlideImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainSwiper = () => {
  SwiperCore.use([Autoplay, EffectFade]);

  type Imgs = {
    id: number;
    src: string;
    alt: string;
  }[];

  const imgs: Imgs = [
    { id: 1, src: img1, alt: '메인 슬라이드 이미지1' },
    { id: 2, src: img2, alt: '메인 슬라이드 이미지2' },
    { id: 3, src: img3, alt: '메인 슬라이드 이미지3' },
  ];

  return (
    <MainSwiperWrap>
      <Swiper
        effect={'fade'}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {imgs.map((img) => (
          <SwiperSlide key={img.id}>
            <SlideImg src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MainSwiperWrap>
  );
};

export default MainSwiper;
