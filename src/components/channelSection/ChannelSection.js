import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function ChannelSection(props) {
  return (
    <Box
      p={{
        base: "0px 20px",
        md: "0px 0px 0px 50px",
        "2xl": "0px 0px 0px 105px",
      }}
    >
      <Flex
        justifyContent={"space-between"}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
      >
        <Box {...props.textContainerProps}>
          <Text
            fontFamily={"poppins"}
            fontSize={{ base: "24px", "2xl": "40px" }}
            fontWeight={"600"}
            color={"#002159"}
            
          >
            {props.heading && props.heading()}
          </Text>
          <Text
            fontFamily={"poppins"}
            fontSize={{ base: "16px", "2xl": "16px" }}
            color={"#002159"}
            mt={'20px'}
           
          >
            {props.description}
          </Text>
        </Box>
        <Flex
          maxW={"1015px"}
          flexWrap={"wrap"}
          alignItems={"center"}
          mt={{ base: "20px", lg: "0px" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          rowGap={{ base: "20px" }}
        >
          {props.images.map((item) => (
            <Image
              src={item}
              w={props.imageWidth}
              m={{ base: "0px 40px", "2xl": "0px 0px 0px 70px" }}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
