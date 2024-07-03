// hooks/useContacts.js
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchContacts = async () => {
  const { data } = await axios.get('/api/contacts');
  return data;
};

export const useContacts = () => {
  return useQuery('contacts', fetchContacts);
};
