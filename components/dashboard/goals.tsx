import React, { useEffect } from "react";
import { Flex, Box, Button, Text, HStack } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import axios from "../../utils/axios";
import GoalCard from "./goalcard";

export default function Goals() {
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);
  const [goals, setGoals] = React.useState([
    {
      id: 0,
      title: "",
      category: "",
      time: 0,
    },
  ]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "/api/getUser?id=" + cookies.userId,
        });
        setGoals(res.data.goals);
      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo();
  });

  return (
    <>
      <Flex flexDirection={"column"} mt={"116px"} ml={"181px"}>
        <Box mb={"10px"}>
          <Text fontWeight={"400"} fontSize={"42px"}>
            Your Goals
          </Text>
        </Box>
        <HStack>
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              title={goal.title}
              category={goal.category}
              time={goal.time}
            />
          ))}
        </HStack>
      </Flex>
    </>
  );
}
