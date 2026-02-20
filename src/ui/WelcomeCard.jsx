import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function WelcomeCard() {
  return (
    <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size="lg" mb={4}>Welcome to FSM Platform</Heading>
      <Text mb={4}>
        This card demonstrates how to use Chakra UI components to
        build a clean and accessible interface.
      </Text>
      <Button colorScheme="teal">Get Started</Button>
    </Box>
  );
}