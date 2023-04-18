import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

function GetStarted() {
  return (
    <Box
      px={{ base: "20px", md: "60px" }}
      lineHeight="1.2"
      pb="50px"
      mt={{ base: "40px", md:"120px", '2xl': "230px" }}
    >
      <Center>
        <Text
          color={"#1F3562"}
          fontFamily={"poppins-semiBold"}
          fontSize={{ base: "24px", md:"32px", '2xl': "40px" }}
        >
         Explore a new fresh approach to{" "}
          <Text as="span" color={"#FA7436"}>
          promote
          </Text>{" "}
          your vacation rental
        </Text>
      </Center>
      <Center mt={{ base: "40px", md:"60px", '2xl': "70px" }}>
        <CustomButton
          py={"0"}
          width={{ base: "full", md:"220px", '2xl': "260px" }}
          height={{ base: "55px", md:"60px", '2xl': "68px" }}
        >
          <Text
            fontFamily={"poppins-semiBold"}
            fontSize={{ base: "19px", md:"24px", '2xl': "16px" }}
            color={"#FFFFFF"}
          >
            Get Started
          </Text>
        </CustomButton>
      </Center>
      <Text
        fontFamily={"poppins"}
        fontSize={{ base: "14px", md: "14px", lg:"14px"}}
        color="#1F3562"
        mt={{ base: "80px", md:"231px", '2xl': "231px" }}
        lineHeight="26px"
       
      >
        <Text color={"#FA7436"}>How does it work?</Text> At MyBricks, we understand that managing a rental property can be a real hassle. But don't worry, we've got you covered! Our comprehensive solution helps you increase occupancy and maximize your return on investment. We'll list your rental property on over 30 top travel sites, including Airbnb, Booking.com, Expedia, Vrbo, and Tripadvisor. With our full-service approach, we handle all booking inquiries and communication with guests, freeing up your time to focus on other things. Already have an Airbnb or other platform account? No problem,  we will handle that for you! We take care of everything, from listing to managing bookings and payments. Our goal is to make the rental process as stress-free as possible. We pride ourselves on delivering top-quality service to our clients and are always available to answer your questions. Whether you're a new rental property owner or an experienced pro, we're here to help you achieve your goals and maximize your return on investment.
      </Text>
    </Box>
  );
}

export default GetStarted;
