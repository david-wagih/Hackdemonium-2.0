import React from "react";
import {
  Flex,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function about() {
  return (
    <>
      <Flex ml={"100px"} mt={"350px"} flexDirection={"column"}>
        <Text
          fontWeight={"300"}
          fontSize={"30px"}
          color={"#8A8787"}
          id={"about"}
        >
          About /
        </Text>
        <Text fontWeight={"500"} fontSize={"42px"}>
          Allow us to tell you why
        </Text>
      </Flex>
      {/*  */}
      {/*  */}
      <Box mt={"111px"}></Box>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        border={"transparent"}
        w={"420px"}
        margin={"0 auto"}
      >
        <AccordionItem mb={"30px"}>
          <h2>
            <AccordionButton w={"420px"} fontWeight={"800"} fontSize={"30px"}>
              <Box flex='1' textAlign='left'>
                ## Inspiration
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={"center"}>
            As people who are working in jobs, school, or university we don't
            have alot of time that we put into ourselves. So we created a
            platform that allows anyone to create goals, track their progress,
            and get the motivation they need.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb={"30px"}>
          <h2>
            <AccordionButton w={"460px"} fontWeight={"800"} fontSize={"30px"}>
              <Box flex='1' textAlign='left'>
                ## What we learned
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} w={"500px"} textAlign={"center"}>
            We learned how to use Prisma as our main database. We learned how to
            use Next.js as our main framework, how to use Chakra UI as our main
            UI library, how to use Figma as our main design tool, how to use
            Github as our main version control tool, how to use Vercel as our
            main deployment tool, and how to use Courier API which is our main
            email API.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton w={"420px"} fontWeight={"800"} fontSize={"30px"}>
              <Box flex='1' textAlign='left'>
                ## Challenges
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={"center"}>
            We struggled with working with docker and prisma for the first time.
            We were also challenging ourselves with taking in input and
            translating that into imediate data that's being displayed. Also
            using Courier API was a HUGE challenge for us.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
