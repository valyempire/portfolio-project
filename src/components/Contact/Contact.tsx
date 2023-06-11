import { useRef } from "react";

/**
 * External imports
 */
import emailjs from "@emailjs/browser";

/**
 * Imports styles
 */
import { ContactForm, SubmitButton, ContactInput } from "./Contact.style";

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
    <section>
      <div>
        <h2>Contact Us</h2>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactInput
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <ContactInput
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <ContactInput
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea name="message"></textarea>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </div>
    </section>
  );
};
