import React, { useState } from "react";
import { Button, Text, Divider, Input, VStack } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import axios from "../utils/axios";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

// @ts-ignore
export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      const response = await axios({
        method: "post",
        url: "/api/login",
        data: {
          email: email,
          phone: phone,
          password: password,
        },
      });
      if (response.status === 200) {
        alert("Login successful");
        setCookie("userId", response.data.id);
        router.push("/dashboard");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <VStack mt={"50px"} justifyContent={"center"} flexDirection={"column"}>
        <Text fontWeight={"700"} fontSize={"48px"}>
          Login
        </Text>
        <Divider w={"120px"} />
        <VStack gap={"25px"} py={"50px"}>
          <Input
            w={"400px"}
            placeholder="Email"
            variant={"flushed"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            w={"400px"}
            placeholder="Phone"
            variant={"flushed"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            w={"400px"}
            placeholder="Password"
            variant={"flushed"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleLogin}
        >
          Log In
        </Button>
      </VStack>
    </>
  );
}
