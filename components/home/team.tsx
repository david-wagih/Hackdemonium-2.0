import React from "react";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function team() {
  return (
    <>
      <Flex ml={"100px"} mt={"350px"} flexDirection={"column"}>
        <Text
          fontWeight={"300"}
          fontSize={"30px"}
          color={"#8A8787"}
          id={"team"}
        >
          Team /
        </Text>
        <Text fontWeight={"500"} fontSize={"42px"}>
          Who made this?
        </Text>
      </Flex>
      <Flex mt={"100px"} mb={"200px"} justifyContent={"center"}>
        <Image width={"1088px"} height={"356px"} src={"/Group 957.png"} />
      </Flex>
    </>
  );
}
