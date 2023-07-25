import { Box, Button, Input, Text } from "@chakra-ui/react";

export const  ExecuteTransactions = () => (
  <Box className="bg-white p-4 rounded-md shadow-md">
    <Text className="text-lg font-semibold mb-2">Execute Transaction</Text>
    <Input placeholder="Data" className="mb-2" />
    <Input placeholder="Signatures" className="mb-2" />
    <Input placeholder="Recipient Address" className="mb-2" />
    <Input placeholder="Value" className="mb-2" type="number" />
    <Button colorScheme="blue">Execute</Button>
  </Box>
);
