import React from "react";
import { data } from "../../data/data";
import {
  CarouselContainer,
  StyledBox,
  Title,
  LinkContainer,
  LinkItem,
  Link,
} from "./MyWork.styles";

export const MyWork: React.FC = () => {
  const project = data;

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
