// pages/index.js
import Layout from '../components/Layout';
import { Box, Heading, Text } from '@shadcn/ui';

const Home = () => (
  <Layout>
    <Box textAlign="center" p={5}>
      <Heading as="h1" size="2xl">Welcome to CRM</Heading>
      <Text mt={4}>Manage your contacts and tasks efficiently.</Text>
    </Box>
  </Layout>
);

export default Home;
