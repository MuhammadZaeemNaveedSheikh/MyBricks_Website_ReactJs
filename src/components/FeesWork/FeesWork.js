import React from "react";
import { Box, Image } from "@chakra-ui/react";

const FeesWork = () => {
  return (
    <Box>
      <Box
        color="#1F3562"
        mt={{ base: "0px", md: 170 }}
        style={{
          fontFamily: "poppins",
          fontWeight: 700,
          textAlign: "center",
        }}
        fontSize={{ base: "3xl", lg: "40px", "2xl": "40px" }}
      >
        Our  <span style={{ color: "#FD8D3A" }}> fee structure</span>  explained
      </Box>
      <Box
        paddingLeft={{ lg: "50px", md: "100px", sm: "40px", xs: "20px" }}
        paddingRight={{ lg: "50px", md: "100px", sm: "40px", xs: "20px" }}
      >
        <Box
          textAlign={"center"}
          color="#1F3562"
          mt={{ base: "10px", lg: "40px", "2xl": "40px" }}
          style={{
            fontFamily: "poppins",
            fontWeight: 400,
            fontSize: 16,
          }}
        >
With MyBricks, you pay a simple, all-inclusive fee per confirmed booking. Our 10% fee covers our booking handling service and listing distribution, designed to boost your bookings. We believe in transparent and straightforward pricing, which is why we charge only a 10% fee per booking.        </Box>
      </Box>
      <Box
        padding={{ base: "40px" }}
        marginTop={{ base: "10px", md: "70px" }}
        marginBottom={{ base: "20px", md: "100px" }}
        justifyContent="center"
        display="flex"
      >
        <Image
          src="/images/invest/flow.svg"
          h={{ base: "auto", md: "700px", "2xl": "auto" }}
        />
      </Box>
    </Box>
  );
};

export default FeesWork;
