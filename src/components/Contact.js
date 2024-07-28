import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #008cba;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  &:hover {
    background-color: #005f8c;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm>
        <FormField>
          <Label>Name</Label>
          <Input type="text" placeholder="Your Name" />
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input type="email" placeholder="Your Email" />
        </FormField>
        <FormField>
          <Label>Message</Label>
          <TextArea rows="5" placeholder="Your Message"></TextArea>
        </FormField>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
