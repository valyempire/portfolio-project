import { useRef } from "react";
/**
 * External imports
 */
import emailjs from "@emailjs/browser";
import { Grid } from "@mui/material";

/**
 * Imports styles
 */
import {
  PageContainer,
  ContactFormContainer,
  ContentContainer,
  Paragraph,
  Title,
  Input,
  Textarea,
  SubmitButton,
  Container,
} from "./Contact.style";
import { Footer } from "../Footer";

/**
 * Displays the component
 */
export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  /**
   * Handles the submission of the contact form and sends an email.
   */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_sobiku4", // YOUR_SERVICE_ID
          "template_xr0evz9", // YOUR_TEMPLATE_ID
          form.current,
          "ThmIOLZE6oBtJ2z6C" // YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    if (e.target instanceof HTMLFormElement) {
      e.target.reset();
    }
  };

  return (
    <>
      <PageContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ContentContainer>
              <Title>Contact Me</Title>
              <Paragraph>
                Welcome to my contact page! I'm excited to learn more about
                future projects and collaborations. This contact form is the
                fastest and easiest way to get in touch with me.
              </Paragraph>
              <Paragraph>
                In addition to the contact form, I encourage you to contact me
                through other methods. You can use the phone number or email
                address below to get in touch with me directly.
              </Paragraph>
              <Paragraph>Email: bocanel.valerica92@gmail.com</Paragraph>
              <Paragraph>Phone: (+40) 741412636 </Paragraph>
            </ContentContainer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContactFormContainer ref={form} onSubmit={sendEmail}>
              <Container>
                <Input
                  type="text"
                  placeholder="Full Name"
                  name="user_name"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                />
              </Container>
              <Textarea placeholder="Message" name="message"></Textarea>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactFormContainer>
          </Grid>
        </Grid>
      </PageContainer>
      <Footer />
    </>
  );
};
