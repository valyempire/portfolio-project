import { Link } from "react-router-dom";
import { skills, description } from "../../utils";
import {
  Container,
  Title,
  CardContainer,
  Card,
  CardHeader,
  Logo,
  CardTitle,
  CardText,
  ImageContainer,
  TextContainer,
  BottomText,
  BottomTitle,
  Button,
  Image,
} from "./HomeSkills.styles";

export const HomeSkills = () => {
  return (
    <Container>
      <Title>{description}</Title>

      <CardContainer>
        {skills.map((skill) => (
          <Card key={skill.id}>
            <CardHeader>
              <Logo src={skill.logo.src} alt={skill.logo.alt} />
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardText>{skill.cardText}</CardText>
            <ImageContainer>
              {skill.images.map((image, i) => (
                <Image key={i} src={image.src} alt={image.alt} />
              ))}
            </ImageContainer>
          </Card>
        ))}
      </CardContainer>
      <TextContainer>
        <BottomTitle>Interested in hiring or collaborating?</BottomTitle>
        <BottomText>
          Whether you have a question about a project or if you are interested
          in hiring or collaborating, I'd love to hear from you!
        </BottomText>
        <Link to="/contact">
          <Button>Contact Me</Button>
        </Link>
      </TextContainer>
    </Container>
  );
};
