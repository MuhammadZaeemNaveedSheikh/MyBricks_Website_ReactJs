import React from "react";
import { Box, Image } from "@chakra-ui/react";

const Technologies = () => {
  return (
    <Box width={"100%"}>
      <Box
      mt={"80px"}
        paddingTop={"20px"}
        paddingBottom={"30px"}
        paddingLeft={{ xl: "87px", lg: "40px", md: "40px", base: "30px" }}
        paddingRight={{ xl: "56px", lg: "40px", md: "40px", base: "30px" }}
        style={{ background: "rgba(254, 245, 244)", minHeight: "167px" }}
        columnGap="20px"
        rowGap="20px"
        display={"flex"}
        justifyContent={{
          xl: "space-between",
          lg: "space-between",
          sm: "center",
          xs: "center",
        }}
        alignItems="center"
        flexWrap={{ base: "wrap", xl: "unset" }}
      >
        <Image width={{base:"180px",'2xl':"unset"}} src="/images/landingPage/airbnd.svg" />
        <Image width={{base:"180px",'2xl':"unset"}}  src="/images/landingPage/tripa.svg" />
        <Image width={{base:"180px",'2xl':"unset"}}  src="/images/landingPage/bookingt.svg" />
        <Image width={{base:"180px",'2xl':"unset"}}  src="/images/landingPage/vbro.svg" />
        <Image width={{base:"180px",'2xl':"unset"}}  src="/images/landingPage/expedia.svg" />
      </Box>
    </Box>
  );
};

export default Technologies;
