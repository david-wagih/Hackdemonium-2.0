import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function features() {
  return (
    <>
      <Flex ml={"100px"} mt={"350px"} flexDirection={"column"}>
        <Text
          fontWeight={"300"}
          fontSize={"30px"}
          color={"#8A8787"}
          id={"features"}
        >
          Features /
        </Text>
        <Text fontWeight={"500"} fontSize={"42px"}>
          Get Access to all these incredible tools
        </Text>
      </Flex>
      <Flex mt={"100px"} mb={"400px"} justifyContent={"center"}>
        <Image
          alt=""
          width={"1096px"}
          height={"272px"}
          src={"/FeatureGridList.png"}
        />
      </Flex>
    </>
  );
}
