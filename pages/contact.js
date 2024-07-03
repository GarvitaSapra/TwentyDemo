// pages/contacts.js
import Layout from '../components/Layout';
import { Box, Heading, Button } from '@shadcn/ui';

const Contacts = () => (
  <Layout>
    <Box p={5}>
      <Heading as="h1" size="xl">Contacts</Heading>
      <Button colorScheme="primary" mt={4}>Add New Contact</Button>
      {/* List of contacts will go here */}
    </Box>
  </Layout>
);

export default Contacts;
