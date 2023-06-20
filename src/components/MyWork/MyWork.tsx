import React, { useState } from "react";
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
  ModalImage,
  Description,
  CloseButton,
  SliderStyle,
} from "./MyWork.styles";
import { Modal } from "../Modal/Modal";
import { ModalItemsProps, DataItem } from "./MyWork.types";

export const MyWork: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ModalItemsProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: DataItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

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
      <SliderStyle {...settings}>
        {data.map((item: DataItem) => (
          <StyledBox key={item.id}>
            <Title>{item.name}</Title>
            <Image src={item.image} alt={item.name} />
            <LinkContainer>
              <LinkItem>
                <Link onClick={() => handleOpenModal(item)}>Description</Link>
              </LinkItem>
            </LinkContainer>
          </StyledBox>
        ))}
      </SliderStyle>
      {isModalOpen && selectedItem && (
        <Modal onCloseModal={handleCloseModal}>
          <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          <Title>{selectedItem.name}</Title>
          <ModalImage src={selectedItem.image} />
          <Description>{selectedItem.description}</Description>
          <LinkContainer>
            <LinkItem>
              <Link
                href={selectedItem.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                href={selectedItem.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </Link>
            </LinkItem>
          </LinkContainer>
        </Modal>
      )}
    </CarouselContainer>
  );
};
