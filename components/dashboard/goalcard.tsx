import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

const GoalCard = (props: { title: string; category: string; time: number }) => {
  const { title, category, time } = props;
  return (
    <>
      <Flex
        w={"250px"}
        h={"250px"}
        borderRadius={"10px"}
        bgColor={"#F1BF3E"}
        justifyContent={"flex-start"}
        pl={"40px"}
        alignItems={"center"}
      >
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Text fontWeight={"500"} fontSize={"36px"}>
            {title}
          </Text>
          <Text
            fontWeight={"500"}
            fontSize={"18px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {category}
          </Text>
          <Text
            fontWeight={"500"}
            fontSize={"18px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {time} days
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default GoalCard;
