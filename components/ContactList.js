// components/ContactList.js
import { Box, Text } from '@shadcn/ui';

const ContactList = ({ contacts }) => (
  <Box p={4}>
    {contacts.map((contact, index) => (
      <Box key={index} mb={4} p={4} borderWidth="1px" borderRadius="md">
        <Text fontWeight="bold">{contact.name}</Text>
        <Text>{contact.email}</Text>
      </Box>
    ))}
  </Box>
);

export default ContactList;
