// pages/contacts.js
import { useState } from 'react';
import Layout from '../components/Layout';
import { Box, Heading, Button } from '@shadcn/ui';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <Layout>
      <Box p={5}>
        <Heading as="h1" size="xl">Contacts</Heading>
        <Button colorScheme="primary" mt={4} onClick={() => setShowForm(true)}>
          Add New Contact
        </Button>
        <ContactForm onSubmit={handleAddContact} />
        <ContactList contacts={contacts} />
      </Box>
    </Layout>
  );
};

export default Contacts;
