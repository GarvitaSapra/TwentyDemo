// components/Footer.js
import { Flex, Text } from '@shadcn/ui';

const Footer = () => (
  <Flex as="footer" bg="primary.500" p={4} color="white" justify="center">
    <Text>© {new Date().getFullYear()} CRM Frontend</Text>
  </Flex>
);

export default Footer;
