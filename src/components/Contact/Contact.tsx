import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Grid } from "@mui/material";

import {
  PageContainer,
  ContactFormContainer,
  Title,
  Input,
  InputContainer,
  Textarea,
  SubmitButton,
  ContactInfo,
  ContactInfoContainer,
} from "./Contact.style";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

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
    <PageContainer>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6}>
          <ContactFormContainer ref={form} onSubmit={sendEmail}>
            <Title>Contact Me</Title>
            <InputContainer>
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
            </InputContainer>
            <Textarea placeholder="Your Message" name="message" required />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactFormContainer>
          <ContactInfoContainer>
            <ContactInfo>
              <p>Email: bocanel.valerica92@gmail.com</p>
              <p>Phone: (+40) 741412636</p>
            </ContactInfo>
          </ContactInfoContainer>
        </Grid>
      </Grid>
    </PageContainer>
  );
};
