import React from "react";

import { Flex, Text, Button, Box, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function navbar() {
  return (
    <>
      <Flex alignItems={"center"} px={"50px"} py={"24px"}>
        <Link href={"/"}>
          <Image
            src={"/Logo.png"}
            alt='logo'
            width={"227px"}
            height={"41px"}
            className={"Logo"}
          />
        </Link>
        <Spacer />
        <Flex gap={"75px"}>
          <Link href={"/dashboard"}>
            <Text
              className='underline'
              fontWeight={"500"}
              fontSize={"18px"}
              cursor={"pointer"}
            >
              Dashboard
            </Text>
          </Link>
          <Link href={"#features"}>
            <Text
              fontWeight={"500"}
              fontSize={"18px"}
              className='underline'
              cursor={"pointer"}
            >
              Features
            </Text>
          </Link>
          <Link href={"#about"}>
            <Text
              fontWeight={"500"}
              fontSize={"18px"}
              className='underline'
              cursor={"pointer"}
            >
              About
            </Text>
          </Link>
          <Link href={"#team"}>
            <Text
              fontWeight={"500"}
              fontSize={"18px"}
              className='underline'
              cursor={"pointer"}
            >
              Team
            </Text>
          </Link>
        </Flex>
        <Spacer />
        <Flex gap={"25px"}>
          <Link href={"/login"}>
            <Button
              transition={"all 0.2s ease-in-out"}
              bgColor={"transparent"}
              _hover={{ bgColor: "rgba(186, 186, 186, 0.574)" }}
            >
              Sign in
            </Button>
          </Link>
          <Link href={"/sign"}>
            <Button
              transition={"all 0.2s ease-in-out"}
              bgColor={"#FBE134"}
              color={"secondary"}
              _hover={{ bgColor: "#FBD134" }}
            >
              Sign up
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
