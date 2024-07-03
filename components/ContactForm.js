// components/ContactForm.js
import { useState } from 'react';
import { Box, Button, Input } from '@shadcn/ui';

const ContactForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({ name: '', email: '' });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4}>
      <Input
        placeholder="Name"
        name="name"
        value={contact.name}
        onChange={handleChange}
        mb={4}
      />
      <Input
        placeholder="Email"
        name="email"
        value={contact.email}
        onChange={handleChange}
        mb={4}
      />
      <Button type="submit" colorScheme="primary">Submit</Button>
    </Box>
  );
};

export default ContactForm;
