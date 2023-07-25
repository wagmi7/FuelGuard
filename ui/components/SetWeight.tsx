import { Box, Button, Input, Text } from "@chakra-ui/react";

export const SetWeight = () => (
  <Box className="bg-white p-4 rounded-md shadow-md">
    <Text className="text-lg font-semibold mb-2">Set Weight</Text>
    <Input placeholder="Data (Optional)" className="mb-2" />
    <Input placeholder="Signatures" className="mb-2" />
    <Input placeholder="User Address" className="mb-2" />
    <Input placeholder="Weight" className="mb-2" type="number" />
    <Button colorScheme="blue">Set Weight</Button>
  </Box>
);
