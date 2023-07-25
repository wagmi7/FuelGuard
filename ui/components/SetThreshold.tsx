import { Box, Button, Input, Text } from "@chakra-ui/react";

export const  SetThreshold = () => (
  <Box className="bg-white p-4 rounded-md shadow-md">
    <Text className="text-lg font-semibold mb-2">Set Threshold</Text>
    <Input placeholder="Data (Optional)" className="mb-2" />
    <Input placeholder="Signatures" className="mb-2" />
    <Input placeholder="Threshold" className="mb-2" type="number" />
    <Button colorScheme="blue">Set Threshold</Button>
  </Box>
);
