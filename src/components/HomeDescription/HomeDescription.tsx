import web_img from "../../assets/responsive-img3.png";
import { descriptionText, descriptionData } from "../../utils";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import {
  Container,
  TopSection,
  ImageWrapper,
  TextWrapper,
  Text,
  Button,
  Image,
  Icon,
  CardContainer,
  Card,
  CardContent,
  CardDescription,
  CardGroup,
  CardImage,
  CardTitle,
} from "./HomeDescription.styles";

export const HomeDescription = () => {
  return (
    <Container>
      <TopSection container className="VALI">
        <Grid item xs={12} sm={6} className="VALI2">
          <ImageWrapper className="VALI3">
            <Image src={web_img} alt="Image" className="VALI4" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} sm={6} className="VALI5">
          <TextWrapper className="VALI6">
            <Text className="VALI6">{descriptionText}</Text>
            <Link to="/projects">
              <Button>VIEW PROJECTS</Button>
            </Link>
          </TextWrapper>
        </Grid>
      </TopSection>

      <CardGroup container>
        {descriptionData.map((cardData) => (
          <Grid item xs={12} sm={6} key={cardData.id}>
            <CardContainer>
              <Card>
                <CardImage>
                  <Icon icon={cardData.icon} size="2xl" />{" "}
                </CardImage>
                <CardContent>
                  <CardTitle>{cardData.title}</CardTitle>
                  <CardDescription>{cardData.description}</CardDescription>
                </CardContent>
              </Card>
            </CardContainer>
          </Grid>
        ))}
      </CardGroup>
    </Container>
  );
};
