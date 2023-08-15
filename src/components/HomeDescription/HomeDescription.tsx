/**
 * Import Link from react-router-dom
 */
import { Link } from "react-router-dom";

/**
 * Imports styled components
 */
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

/**
 * Imports Material UI components
 */
import { Grid } from "@mui/material";

/**
 * Imports image
 */
import web_img from "../../assets/responsive-img3.png";

/**
 * Imports data from utils
 */
import { descriptionText, descriptionData } from "../../utils";

/**
 * Displays the component
 */
export const HomeDescription = () => {
  return (
    <Container>
      <TopSection container>
        <Grid item xs={12} sm={6}>
          <ImageWrapper className="VALI3">
            <Image src={web_img} alt="Image" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextWrapper className="VALI6">
            <Text>{descriptionText}</Text>
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
