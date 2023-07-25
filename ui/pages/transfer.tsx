import { Box, Button, Input, Text } from "@chakra-ui/react";

export default function Transfer (){
  return (
  <Box className="bg-white p-4 rounded-md shadow-md">
    <Text className="text-lg font-semibold mb-2">Transfer</Text>
    <Input placeholder="Asset ID" className="mb-2" />
    <Input placeholder="Data" className="mb-2" />
    <Input placeholder="Signatures" className="mb-2" />
    <Input placeholder="Recipient Address" className="mb-2" />
    <Input placeholder="Value" className="mb-2" type="number" />
    <Button colorScheme="blue">Transfer</Button>
  </Box>
)}
