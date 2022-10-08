import React from "react";

import { Flex, Text, Button, Box, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useCookies } from "react-cookie";

export default function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);

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
          {cookies.userId ? (
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
          ) : (
            <></>
          )}

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
          {cookies.userId ? (
            <Link href={`/${cookies.userId}`}>
              <Button
                bg={"#F2F2F2"}
                color={"#000000"}
                fontWeight={"500"}
                fontSize={"18px"}
                _hover={{ bg: "#F2F2F2" }}
                _active={{ bg: "#F2F2F2" }}
                _focus={{ bg: "#F2F2F2" }}
              >
                Profile
              </Button>
            </Link>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "25px",
              }}
            >
              <Link href={"/login"}>
                <Button
                  bg={"transparent"}
                  color={"#000000"}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  _hover={{ bg: "#F2F2F2" }}
                  _active={{ bg: "#F2F2F2" }}
                  _focus={{ bg: "#F2F2F2" }}
                >
                  Login
                </Button>
              </Link>
              <Link href={"/sign"}>
                <Button
                  bg={"transparent"}
                  color={"#000000"}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  _hover={{ bg: "#F2F2F2" }}
                  _active={{ bg: "#F2F2F2" }}
                  _focus={{ bg: "#F2F2F2" }}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </Flex>
      </Flex>
    </>
  );
}
