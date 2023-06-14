import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../data/data";
import {
  CarouselContainer,
  StyledBox,
  Title,
  LinkContainer,
  LinkItem,
  Link,
  Image,
} from "./MyWork.styles";

export const MyWork: React.FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <CarouselContainer>
      <Slider {...settings}>
        {data.map((item) => (
          <StyledBox key={item.id}>
            <Title>{item.name}</Title>
            <Image src={item.image} alt={item.name} />
            <LinkContainer>
              <LinkItem>
                <Link href={item.github} target="_blank">
                  GitHub
                </Link>
                <Link href={item.live} target="_blank">
                  Live
                </Link>
              </LinkItem>
            </LinkContainer>
          </StyledBox>
        ))}
      </Slider>
    </CarouselContainer>
  );
};
