import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../../styles/landingPage.module.css";
function ReviewCard({ src, reviewText, name, location }) {
  return (
    <Box className={styles.topImage}>
      <Avatar
        position={"absolute"}
        zIndex="100"
        top={{ base: "10px", sm: "-31px" }}
        left={{ base: "-20px", sm: "-21px" }}
        src={src}
        // width={"73.27px"}
        // height={"68px"}
        className={styles.topImage1}
      />
      <Box
        width={{ base: "100%", lg: "480px", "2xl": "543px" }}
        height={{ base: "auto", "2xl": "225px" }}
        bg={"#FFFFFF"}
        pt={{ base: "30px", "2xl": "40px" }}
        px={{ base: "30px", "2xl": "40px" }}
        pb={{ base: "20px", "2xl": "31px" }}
        rounded={"10px"}
        shadow="lg"
      >
        <Text
          fontFamily={"poppins-medium"}
          fontSize={{ base: "14px", lg: "16px" }}
          lineHeight={"16px"}
          color={"#444444"}
        >
          {reviewText}
        </Text>
        <Text
          fontFamily={"poppins-semiBold"}
          fontSize="18px"
          color={"#222222"}
          mt={{ base: "20px", "2xl": "30px" }}
        >
          {name}
        </Text>
        <Text fontFamily={"poppins-semiBold"} fontSize="14px" color={"#666666"}>
          {location}
        </Text>
      </Box>
    </Box>
  );
}

export default ReviewCard;
