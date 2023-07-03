import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  FooterContainer,
  Title,
  LinkContainer,
  Link,
  Text,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Title>Thank you for taking a moment to review my portfolio !</Title>
        </Grid>
        <Grid item>
          <LinkContainer>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              href="https://github.com/valyempire"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </LinkContainer>
        </Grid>
        <Grid item>
          <Text>© 2023 Valerica Bocanel . All rights reserved.</Text>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};
