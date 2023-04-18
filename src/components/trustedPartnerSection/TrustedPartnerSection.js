import { Flex } from "@chakra-ui/react";
import React from "react";
import LeftContainer from "./components/leftContainer/LeftContainer";
import RightContainer from "./components/rightConatiner/RightContainer";

export default function TrustedPartnerSection() {
  return (
    <Flex
      m={{ base: "30px 20px 80px 20px", '2xl': "180px 130px 140px 130px" , 'md': "80px 30px 40px 30px" }}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      justifyContent={"space-between"}
    >
      <LeftContainer />
      <RightContainer />
    </Flex>
  );
}
