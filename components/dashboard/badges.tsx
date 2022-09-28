import React from "react";
import { Flex, Box, Button, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
export default function badges() {
  return (
    <>
      <Flex flexDirection={"column"} mt={"116px"} ml={"181px"}>
        <Box mb={"10px"}>
          <Text fontWeight={"400"} fontSize={"42px"}>
            Badges
          </Text>
        </Box>
        <HStack>
          <Flex
            borderRadius={"10px"}
            w={"100px"}
            h={"100px"}
            bgColor={"#8A8787"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              width={"57px"}
              height={"72px"}
              src={"/casual-life-3d-gold-trophy-in-air-1 2.png"}
            />
          </Flex>
        </HStack>
      </Flex>
    </>
  );
}
