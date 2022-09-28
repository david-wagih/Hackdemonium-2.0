import React from "react";
import { Flex, Box, Button, Text, HStack } from "@chakra-ui/react";
import Goalcard from "./goalcard";

export default function goals() {
  return (
    <>
      <Flex flexDirection={"column"} mt={"116px"} ml={"181px"}>
        <Box mb={"10px"}>
          <Text fontWeight={"400"} fontSize={"42px"}>
            Your Goals
          </Text>
        </Box>
        <HStack>
          <Goalcard />
        </HStack>
      </Flex>
    </>
  );
}
