import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects, settings } from "../../utils";

import {
  CarouselContainer,
  Header,
  Paragraph,
  StyledBox,
  Title,
  LinkContainer,
  LinkItem,
  LinkDescription,
  Image,
  ModalImage,
  Description,
  CloseButton,
  SliderStyle,
} from "./Projects.styles";
import { Modal } from "../Modal";
import { ModalItems, DataItem } from "./Projects.types";

export const Projects: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ModalItems | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item: DataItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const renderSlider = () => {
    return projects.map((item: DataItem) => (
      <StyledBox key={item.id}>
        <Title>{item.name}</Title>
        <Image src={item.image} alt={item.name} />
        <LinkContainer>
          <LinkItem>
            <LinkDescription onClick={() => handleOpenModal(item)}>
              Description
            </LinkDescription>
          </LinkItem>
        </LinkContainer>
      </StyledBox>
    ));
  };

  const renderModal = () => {
    return (
      isModalOpen &&
      selectedItem && (
        <Modal onCloseModal={handleCloseModal}>
          <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          <Title>{selectedItem.name}</Title>
          <ModalImage src={selectedItem.image} />
          <Description>{selectedItem.description}</Description>
          <LinkContainer>
            <LinkItem>
              <LinkDescription
                href={selectedItem.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </LinkDescription>
            </LinkItem>
            <LinkItem>
              <LinkDescription
                href={selectedItem.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </LinkDescription>
            </LinkItem>
          </LinkContainer>
        </Modal>
      )
    );
  };

  return (
    <CarouselContainer>
      <Header>These are my projects</Header>
      <Paragraph>
        Welcome to my portfolio! Below you can see some of the projects I've
        been working on. Feel free to explore and learn more about each project
        by clicking on the "Description" link.
      </Paragraph>
      <SliderStyle {...settings}>{renderSlider()}</SliderStyle>
      {renderModal()}
    </CarouselContainer>
  );
};
