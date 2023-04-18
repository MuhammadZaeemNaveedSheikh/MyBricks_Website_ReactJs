import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Stars from "../Stars/Stars";

function FeedbackCard({
  name = "",
  stars = 5,
  role = "",
  avatar = "",
  feedback = "",
}) {
  return (
    <Box
      shadow={"2px 6px 20px rgba(31, 53, 98, 0.2)"}
      borderRadius={"10px"}
      width={{ base: "full", md: "auto" }}
      pt={{ base: "30px", md: "30px", "2xl": "60px" }}
      pb={{ base: "30px", md: "30px", "2xl": "69px" }}
      px={{ base: "20px", md: "30px", "2xl": "50px" }}
      pr={{ base: "auto", md: "30px", "2xl": "155px" }}
      bg="#FFFFFF"
      
    >
      <Stars number={stars} />
      <br></br>
      <Text
        color={"#1F3562"}
        fontFamily="poppins"
        fontSize={{ base: "16px", md: "17px", "2xl": "18px" }}
        mt={{ md: "15px", "2xl": "27px" }}
      >
        {feedback}
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        mt="34px"
        gap="7px"
        textAlign={"center"}
      >
        <Avatar
          name={name}
          src={avatar}
          boxSize={{ base:'30px',md: "42px", "2xl": "56px" }}
          margin={"auto"}
         
        />
        <Box>
          <Text
            color={"#1F3562"}
            fontFamily="poppins-medium"
            fontSize={{ md: "14px", "2xl": "16px" }}
          width={"100%"}
          >
            {name}
          </Text>
          <Text color={"#1F3562"} fontFamily="poppins" fontSize={"14px"}>
            {role}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default FeedbackCard;
