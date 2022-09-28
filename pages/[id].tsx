import React, { useEffect } from "react";
import { Flex, Box, Button, Text, Spacer, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useCookies } from "react-cookie";

export default function Profile(props: any) {
  const userData = props.user;

  return (
    <>
      <Flex alignItems={"center"} p={"30px 44px"}>
        <Box
          transition={"all 0.3s ease-in-out"}
          _hover={{ transform: "scale(0.91)" }}
        >
          <Link href={"/dashboard"}>
            <Image
              src={"/Arrow.svg"}
              alt="logo"
              width={"64px"}
              height={"64px"}
              className={"Logo"}
            />
          </Link>
        </Box>
        <Flex margin={"0 auto"}>
          <Text
            fontWeight={"500"}
            fontSize={"24px"}
            className="underline"
            cursor={"pointer"}
          >
            Profile
          </Text>
        </Flex>
      </Flex>
      {/*  */}
      <Flex justifyContent={"center"}>
        <Text fontWeight={"700"} fontSize={"48px"}>
          Welcome, User
        </Text>
      </Flex>
      <Box
        w={"440px"}
        h={"400px"}
        bgColor={"#4B515A"}
        borderRadius={"5px"}
        margin={"0 auto"}
        mt={"50px"}
      >
        <Text
          fontWeight={"600"}
          fontSize={"20"}
          textAlign={"center"}
          pt={"10px"}
        >
          Account Information
        </Text>
        <VStack gap={"35px"} pl={"40px"} mt={"45px"} alignItems={"flex-start"}>
          <Text>Email: {userData!.email}</Text>
          <Text>Phone: {userData!.phone}</Text>
          <Text>Number of Goals: {userData!.goals.length}</Text>
          <Text>Badges: {userData!.badges.length}</Text>
        </VStack>
      </Box>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const user = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getUser?id=${id}`
  );
  const userJson = await user.json();
  return {
    props: {
      user: userJson,
    },
  };
}
