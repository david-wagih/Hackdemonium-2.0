import React, { useState } from "react";
import { Button, Text, Divider, Input, VStack } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import axios from "../utils/axios";
import { useRouter } from "next/router";
import { AppProps } from "next/dist/shared/lib/router/router";

// @ts-ignore
export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      const response = await axios({
        method: "post",
        url: "/api/register",
        data: {
          email: email,
          password: password,
          username: username,
          phone: phone,
        },
      });
      if (response.status === 200) {
        alert("Registration successful");
        router.push("/login");
      } else {
        alert("Registration failed");
      }
    }
  };

  return (
    <>
      <Navbar />
      <VStack mt={"50px"} justifyContent={"center"} flexDirection={"column"}>
        <Text fontWeight={"700"} fontSize={"48px"}>
          Sign up
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
            placeholder="username"
            variant={"flushed"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <Input
            w={"400px"}
            placeholder=" Confirm Password"
            variant={"flushed"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={handleRegister}
        >
          Sign Up
        </Button>
      </VStack>
    </>
  );
}
