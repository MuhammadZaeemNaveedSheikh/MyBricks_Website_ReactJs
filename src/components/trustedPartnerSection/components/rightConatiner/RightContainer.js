import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function RightContainer() {
  return (
    <Box w={{ base: "100%", lg: "calc(100% - 400px)" }} fontFamily={"Poppins"}>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Text
          fontSize={{ base: "3xl", "2xl": "40px" }}
          fontWeight={"600"}
          color={"#092459"}
          textAlign={"center"}
          mt={{ base: "20px", md: "74px", "2xl": "88px" }}
          fontFamily={"Poppins"}
        >
          Your trusted{" "}
          <Text as={"span"} color={"#FD8D3A"}>
            Partner
          </Text>
        </Text>
        <Text
          mt={{ base: "20px", md: "30px", "2xl": "48px" }}
          fontSize={{ base: "16px", "2xl": "16px" }}
          color={"#092459"}
          textAlign={"center"}
          mx={"20px"}
          fontFamily={"Poppins"}
        >
Unlock the potential of your property across all channels with access to 30+ global channels, exceptional product features, and industry-leading expertise to optimize your performance.        </Text>

        <Box width={{ base: "350px", sm: "auto",lg:"840px" }}>
          <Image
            src="/images/invest/bricks.svg"
            mt={{ base: "40px", md: "80px" }}
          />
        </Box>
        <Flex
          mt={{ base: "20px", md: "83px", "2xl": "95px" }}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          maxW={"1098px"}
          w={"100%"}
          rowGap={{ base: "20px", md: "0px" }}
        >
          <Box
             w={{ base: "330px", md: "33%", "2xl": "33%" }}
            bg={"white"}
            borderRadius={"24px"}
            boxShadow={"2px 4px 10px rgba(11, 153, 255, 0.1)"}
            h={{ base: "180px", "2xl": "273px" }}
            px={{ base: "25px", "2xl": "49px " }}
            pt={{ base: "30px", "2xl": "54px" }}
          >
            <Text
              fontSize={{ base: "17px", "2xl": "19px" }}
              color={"#1F3562"}
              fontWeight={"700"}
            >
              <Text as={"span"} color={"#FD8D3A"}>
                30+
              </Text>{" "}
              global channels
            </Text>
            <Text
              fontSize={{ base: "13px", "2xl": "14.9px" }}
              color={"#1F3562"}
            >
Get unlimited global exposure! We list your property on all channels,  at absolutely no extra cost.            </Text>
          </Box>
          <Box
           w={{ base: "330px", md: "33%", "2xl": "33%" }}
            bg={"white"}
            borderRadius={"24px"}
            boxShadow={"2px 4px 10px rgba(11, 153, 255, 0.1)"}
            h={{ base: "180px", "2xl": "273px" }}
            px={{ base: "30px", "2xl": "49px " }}
            pt={{ base: "30px", "2xl": "54px" }}
          >
            <Text
              fontSize={{ base: "17px", "2xl": "19px" }}
              color={"#1F3562"}
              fontWeight={"700"}
            >
              No risk{" "}
              <Text as={"span"} color={"#FD8D3A"}>
                solution
              </Text>{" "}
            </Text>
            <Text
              fontSize={{ base: "13px", "2xl": "14.9px" }}
              color={"#1F3562"}
            >
No sign-up, no contract, no cancellation fees. Pay only when we deliver bookings and revenue.            </Text>
          </Box>
          <Box
            w={{ base: "330px", md: "33%", "2xl": "33%" }}
            bg={"white"}
            borderRadius={"24px"}
            boxShadow={"2px 4px 10px rgba(11, 153, 255, 0.1)"}
            h={{ base: "180px", "2xl": "273px" }}
            px={{ base: "30px", "2xl": "49px " }}
            pt={{ base: "30px", "2xl": "54px" }}
          >
            <Text
              fontSize={{ base: "17px", "2xl": "19px" }}
              color={"#1F3562"}
              fontWeight={"700"}
            >
              <Text as={"span"} color={"#FD8D3A"}>
                Got{" "}
              </Text>{" "}
              multiple{" "}
              <Text as={"span"} color={"#FD8D3A"}>
                properties?
              </Text>
            </Text>
            <Box w={{ base: "250px", md: "260px", "2xl": "250px" }}>
              <Text
                fontSize={{ base: "13px", "2xl": "14.9px" }}
                color={"#1F3562"}
                pr={{ base: "0px", md: "40px", "2xl": "0px" }}
              >
Add as many properties as you want without any extra charges. Pay the same flat fee, regardless of the number of properties in your portfolio.              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
