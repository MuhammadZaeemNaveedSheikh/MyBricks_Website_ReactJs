import React from "react";
import { Box, Image } from "@chakra-ui/react";

function FeaturesCard({ item }) {
  return (
    <Box
      style={{
        background: "#fff",
        boxShadow: "0px 24px 90px rgba(192, 188, 161, 0.22)",
        borderRadius: "16px",
      }}
      p={{ base: "30px 40px", "2xl": "40px" }}
      as="div"
    >
      <Box display={"flex"} justifyContent="center">
        <Image
          src={item.image}
          w={{ base: "172px", "2xl": "200px" }}
          height={{ base: "172px", "2xl": "200px" }}
        />
      </Box>
      <Box
        color="#1F3562"
        mt={{ base: "10px", "2xl": "50px" }}
        as={"p"}
        textTransform={"capitalize"}
        fontFamily={"Inter"}
        fontWeight={"600"}
        fontSize={{ base: "20px", "2xl": "24px" }}
      >
        {item.titleSimple}{" "}
        <span style={{ color: "#FA7436" }}> {item.titleColored} </span>
      </Box>
      <Box
        color="#000000"
        mt={{ base: "5px", "2xl": "20px" }}
        fontFamily={"Inter"}
        fontSize="14px"
      >
        {item.description}
      </Box>
    </Box>
  );
}

export default FeaturesCard;
