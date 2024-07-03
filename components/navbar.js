// components/Navbar.js
import { Flex, Link, Text } from '@shadcn/ui';

const Navbar = () => (
  <Flex as="nav" bg="primary.500" p={4} color="white" justify="space-between">
    <Text fontSize="lg" fontWeight="bold">CRM</Text>
    <div>
      <Link href="/" mx={2}>Dashboard</Link>
      <Link href="/contacts" mx={2}>Contacts</Link>
      <Link href="/tasks" mx={2}>Tasks</Link>
    </div>
  </Flex>
);

export default Navbar;
