import web_img from "../../assets/responsive-img3.png";
import { descriptionText, descriptionData } from "../../utils";
import { Grid } from "@mui/material";
import {
  Container,
  TopSection,
  ImageWrapper,
  TextWrapper,
  Text,
  Button,
  Image,
  Card,
  CardContent,
  CardDescription,
  CardGroup,
  CardImage,
  CardImageWrapper,
  CardTitle,
} from "./HomeDescription.styles";

export const HomeDescription = () => {
  return (
    <Container>
      <TopSection container>
        <Grid item xs={12} sm={6}>
          <ImageWrapper>
            <Image src={web_img} alt="Image" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextWrapper>
            <Text>{descriptionText}</Text>
            <Button>VIEW PORTFOLIO</Button>
          </TextWrapper>
        </Grid>
      </TopSection>

      <CardGroup container>
        {descriptionData.map((cardData, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardImage>
                <CardImageWrapper src={cardData.image} alt="Card Image" />
              </CardImage>
              <CardContent>
                <CardTitle>{cardData.title}</CardTitle>
                <CardDescription>{cardData.description}</CardDescription>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </CardGroup>
    </Container>
  );
};
