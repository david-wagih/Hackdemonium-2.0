import React from "react";
import { Button, Text, Divider, Input, VStack } from "@chakra-ui/react";
import Navbar from "../components/navbar";

export default function sign() {
  return (
    <>
      <Navbar />
      <VStack mt={"50px"} justifyContent={"center"} flexDirection={"column"}>
        <Text fontWeight={"700"} fontSize={"48px"}>
          Sign up
        </Text>
        <Divider w={"120px"} />
        <VStack gap={"25px"} py={"50px"}>
          <Input w={"400px"} placeholder='Email' variant={"flushed"} />
          <Input w={"400px"} placeholder='Password' variant={"flushed"} />
          <Input
            w={"400px"}
            placeholder=' Confirm Password'
            variant={"flushed"}
          />
        </VStack>
        <Button
          bgColor={"primary"}
          color={"black"}
          fontSize={"18px"}
          transition={"all 0.2s ease-in-out"}
          _hover={{
            bgColor: "rgba(100, 100, 100, 0.25)",
            border: "1px solid white",
            color: "white",
          }}
          w={"200px"}
          type={"submit"}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
}
