import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function LeftContainer() {
  return (
    <Box
      borderRadius={"12px"}
      css={"box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"}
      w={{ base: "100%", lg: "360px", "2xl": "450px" }}
      fontFamily={"Poppins"}
      h={"fit-content"}
      marginTop={{base:'125px',sm:'150px',md:"380px",lg:'1px'}}
    >
      <Flex
        mx={{ base: "45px", "2xl": "65px" }}
        my={{ lg: "60px", "2xl": "94px", xs: "60px" }}
        flexDirection={"column"}
        alignItems={"center"}
        h={{ base: "calc(50% - 120px)", "2xl": "calc(50% - 188px)" }}
      >
        <Image
          minWidth={"150px"}
          src="/images/3.png"
          h={"55px"}
          mb={{ base: "27px", "2xl": "67px" }}
        
        />
        <Text
          color={"#FD8D3A"}
          fontSize={{ base: "25px", "2xl": "29px" }}
          fontWeight={"700"}
          
        >
          10%
        </Text>
        <Text
          color={"#FD8D3A"}
          fontSize={{ base: "25px", "2xl": "29px" }}
          fontWeight={"700"}
          mb={"24px"}
        >
          MyBricks Fee
        </Text>
        <Text
          fontSize={{ base: "16px", "2xl": "16px" }}
          textAlign={"center"}
          color={"#1F3562"}
        >
          At MyBricks, we maintain straightforward pricing by charging only a 10% fee per booking.


        </Text>
      </Flex>
      <Flex bg={"#FD8D3A"} flexDirection={"column"} alignItems={"center"}>
        <Image src="/images/invest/person.svg" mt={"35px"} />
        <Text
          color={"white"}
          fontSize={{ base: "25px", "2xl": "24px" }}
          fontWeight={"700"}
          fontFamily={"Poppins"}
        >
          Our Work
        </Text>
        {/* <Text
          color={"white"}
          fontSize={{ base: "25px", "2xl": "24px" }}
          fontWeight={"700"}
          mb={"24px"}
          fontFamily={"Poppins"}
        >
          Channel Fee{" "}
        </Text> */}
        <Text
          fontSize={{ base: "16px", "2xl": "16px" }}
          color={"#1F3562"}
          textAlign={"center"}
          px={"20px"}
          fontFamily={"Poppins"}
        >
          This fee covers our booking handling service and listing distribution, which will skyrocket your bookings.
        </Text>
        <Image src="/images/invest/bottomLogo.svg" my={"24px"} />
      </Flex>
    </Box>
  );
}
