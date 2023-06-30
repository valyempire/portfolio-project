import { skills, description } from "../../utils";

export const HomeSkills = () => {
  return (
    <Container>
      <Title>{description}</Title>

      <CardContainer>
        {skills.map((skill) => (
          <Card key={skill.id}>
            <CardTitle>{skill.title}</CardTitle>
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
        <Button>Message</Button>
      </TextContainer>
    </Container>
  );
};
