import React from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/Hero-image.png";

export default function hero() {
  return (
    <>
      <Text
        textAlign={"center"}
        color={"textColor"}
        fontWeight={"700"}
        fontSize={"48px"}
        width={"946px"}
        margin={"0 auto"}
        mt={"84px"}
        mb={"24px"}
      >
        Collaborate, Compete, and Personalize your goals
      </Text>
      <Text
        textAlign={"center"}
        color={"textColor"}
        fontWeight={"700"}
        fontSize={"14px"}
        w={"709px"}
        margin={"0 auto"}
        mb={"24px"}
      >
        With courier notification and fast on demand goal creation nothing is
        holding you back
      </Text>
      <Flex>
        <Link href={"/login"}>
          <Button
            w={"242px"}
            h={"69px"}
            bg={"linear-gradient(92.36deg, #fbe134 4.09%, #363b44 121.62%)"}
            borderRadius={"10px"}
            margin={"0 auto"}
            transition={"all 0.2s ease-in-out"}
            _hover={{ transform: "scale(1.05)" }}
          >
            Get Started
          </Button>
        </Link>
      </Flex>
      <Flex justifyContent={"center"} mt={"54px"} mb={"310px"}>
        <Image alt="" width={"1305px"} height={"806px"} src={HeroImage} />
      </Flex>
    </>
  );
}
