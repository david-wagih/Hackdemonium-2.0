import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function footer() {
  return (
    <>
      {/* Increased footer image size */}
      <Flex w={"100%"} mb={"70px"} justifyContent={"center"}>
        <Link href={"/"}>
          <Image
            src={"/Logo.png"}
            alt='logo'
            width={"227px"}
            height={"41px"}
            className={"Logo"}
          />
        </Link>
      </Flex>
    </>
  );
}
