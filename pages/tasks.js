// pages/tasks.js
import Layout from '../components/Layout';
import { Box, Heading, Button } from '@shadcn/ui';

const Tasks = () => (
  <Layout>
    <Box p={5}>
      <Heading as="h1" size="xl">Tasks</Heading>
      <Button colorScheme="primary" mt={4}>Add New Task</Button>
      {/* List of tasks will go here */}
    </Box>
  </Layout>
);

export default Tasks;
