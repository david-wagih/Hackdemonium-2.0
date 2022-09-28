import React from "react";
import {
  Flex,
  Text,
  Spacer,
  Box,
  useDisclosure,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Modal,
  Input,
  useNumberInput,
  HStack,
  Select,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import useCookies from "react-cookie/cjs/useCookies";

export default function DashboardNavBar() {
  const [valueRadio, setValueRadio] = React.useState("1");
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 365,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const [value, setValue] = React.useState("");
  const handleChange = (event: any) => setValue(event.target.value);
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);

  const OverlayOne = () => (
    <ModalOverlay
      bg="rgba(0, 0, 0, 0.5)"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Flex alignItems={"center"} p={"30px 44px"}>
        <Link href={"/"}>
          <Image
            src={"/Logo.png"}
            alt="logo"
            width={"227px"}
            height={"41px"}
            className={"Logo"}
          />
        </Link>
        <Box mr={"75px"}></Box>
        <Flex gap={"75px"} alignItems={"center"}>
          <Link href={"/profile"}>
            <Text
              fontWeight={"500"}
              fontSize={"18px"}
              className="underline"
              cursor={"pointer"}
            >
              Profile
            </Text>
          </Link>

          <Button
            transition={"all 0.3s ease-in-out"}
            bgColor={"rgba(100, 100, 100, 0.3)"}
            _hover={{ bgColor: "#fbe134", color: "#000000" }}
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            <Text fontWeight={"500"} fontSize={"18px"} cursor={"pointer"}>
              Create
            </Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent bgColor={"#4B515A"} w={"840px"} h={"580px"}>
              <ModalHeader>
                <Image
                  src={"/Logo.png"}
                  alt="logo"
                  width={"227px"}
                  height={"41px"}
                  className={"Logo"}
                />
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody
                display={"flex"}
                flexDirection={"column"}
                gap={"45px"}
                alignItems={"center"}
              >
                <Box>
                  <Text>Title: {value}</Text>
                  <Input
                    value={value}
                    onChange={handleChange}
                    variant="flushed"
                    placeholder="Goal"
                  />
                </Box>
                <Box textAlign={"center"}>
                  <Text>Time</Text>
                  <HStack maxW="320px">
                    <Button
                      bgColor={"primary"}
                      color={"black"}
                      fontSize={"24px"}
                      transition={"all 0.3s ease-in-out"}
                      _hover={{ bgColor: "#fbd134" }}
                      {...inc}
                    >
                      +
                    </Button>
                    <Input {...input} />
                    <Button
                      bgColor={"primary"}
                      color={"black"}
                      fontSize={"24px"}
                      transition={"all 0.3s ease-in-out"}
                      _hover={{ bgColor: "#fbd134" }}
                      {...dec}
                    >
                      -
                    </Button>
                  </HStack>
                </Box>
                <Box>
                  <Text>Type of Goal</Text>
                  <Select color={"orange"} placeholder="Category" w={"400"}>
                    <option value="option1">Physical</option>
                    <option value="option2">Mental</option>
                    <option value="option3">Academic</option>
                    <option value="option4">Financial</option>
                    <option value="option5">Social</option>
                  </Select>
                </Box>
                <RadioGroup
                  onChange={setValueRadio}
                  value={valueRadio}
                  mb={"10px"}
                  textAlign={"center"}
                >
                  <Text>Notification Frequency</Text>
                  <Stack direction="row">
                    <Radio value="1">Daily</Radio>
                    <Radio value="2">Weekly</Radio>
                    <Radio value="3">Bi-Weekly</Radio>
                  </Stack>
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
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
                  onClick={onClose}
                  type={"submit"}
                >
                  Create!
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <Spacer />
        <Flex>
          {cookies.userId ? (
            <Link href={"/"}>
              <Text
                fontWeight={"500"}
                fontSize={"18px"}
                className="underline"
                cursor={"pointer"}
              >
                Logout
              </Text>
            </Link>
          ) : (
            <Link href={"/login"}>
              <Text
                fontWeight={"500"}
                fontSize={"18px"}
                className="underline"
                cursor={"pointer"}
              >
                Login
              </Text>
            </Link>
          )}
        </Flex>
      </Flex>
    </>
  );
}
