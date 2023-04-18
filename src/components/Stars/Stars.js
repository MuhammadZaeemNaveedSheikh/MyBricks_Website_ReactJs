  import { HStack, Image } from "@chakra-ui/react";
  import React from "react";

  function Stars({ number = 5 }) {
    return (
      <HStack justifyContent={"center"}>
        {[...new Array(number)]?.map((_, index) => {
          return <Image
          boxSize={{ base: "auto", md: "24px", "2xl": "auto" }}
          
          key={index} src="/images/landingPage/star.svg" />;
          
        })}
        
      </HStack>
    );
  }

  export default Stars;
