import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

export default function goalcard(title: any, friends: any) {
  return (
    <>
      <Flex
        w={"267px"}
        h={"65px"}
        borderRadius={"10px"}
        bgColor={"#F1BF3E"}
        justifyContent={"flex-start"}
        pl={"40px"}
        alignItems={"center"}
      >
        <Flex flexDirection={"column"} alignItems={"flex-start"}>
          <Text fontWeight={"500"} fontSize={"24px"}>
            {/* {title} */}
          </Text>
          <Text>{/* {friends} */}</Text>
        </Flex>
      </Flex>
    </>
  );
}

// title: any, friends: any,
