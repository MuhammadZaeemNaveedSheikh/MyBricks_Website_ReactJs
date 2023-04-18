import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Center,
  Flex,
} from "@chakra-ui/react";

const ListHeader = ({ children, fontSize }) => {
  return (
    <Text fontFamily={"poppins-semiBold"} fontSize={fontSize || "12px"}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      px={{ base: "20px", md: "60px" }}
      position="relative"
      bg={"#F7F8FC"}
      pt={{ base: "60px", xl: "63px" }}
      pb="18px"
      
    >
      <Image
        top={{ base: "1px", xl: "40px" }}
        position={"absolute"}
        src="/images/1a.svg"
        width={{base:'180px',lg:'200px'}}
        
      />
      <Container
        className="footer-container"
        as={Stack}
        maxW={"6xl"}
        padding={"0px"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justify={"center"}
          gap={{ base: "1px",sm:"100px" ,md: "200px",lg:"230px", '2xl': "400px" }}
          pb="25px"
          // m={'auto'}
        >
          <Flex
            gap={{ base: "70px", md: "350px",lg:"230px",'2xl': "380px" }}
            pb="25px"
          >
            <Stack align={"flex-start"}>
              <ListHeader fontSize={"14px"}>Navigate</ListHeader>
              <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"} cursor={"pointer"}>Pricing</Text>
              <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Channels</Text>
              <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Invest with us</Text>
              <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Book with us</Text>
              <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>FAQ</Text>
              <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>About us</Text>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader fontSize={"14px"}>Chat to us</ListHeader>
              <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Telegram</Text>
              {/* <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Discord</Text> */}
            </Stack>
          </Flex>
          <Stack align={"flex-start"} >
            <ListHeader fontSize={"14px"}>Social</ListHeader>
            <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Twitter</Text>
            <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Reddit</Text>
            <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"} cursor={"pointer"} >Youtube</Text>
            <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Facebook</Text>
            <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Instagram</Text>
            <Text href={"#"} fontSize={"14px"} fontWeight={"bolder"} color={"rgb(108,117,125)!important"}  cursor={"pointer"}>Tiktok</Text>
          </Stack>
        </Stack>
        <Box w="full" bg="rgba(153, 153, 153, 0.56)" h="1px" />
        <Center pt="27px">
          <Text
            fontSize={"15px"}
            fontFamily={"poppins-light"}
            color={"#002159"}
          >
            Copyright © 2023 MyBricks Finance
          </Text>
        </Center>
        <Center>
          <Text fontSize={"15px"} fontFamily={"poppins"} color={"#002159"}>
            Privacy Policy | Terms & Conditions
          </Text>
        </Center>
      </Container>
    </Box>
  );
}
