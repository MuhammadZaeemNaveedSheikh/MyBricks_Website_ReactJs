import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function HeroSection(props) {
  return (
    <Container
      pl={{ base: "20px", lg: "60px", "2xl": "189px" }}
      pr={{ base: "20px", "2xl": "33px" }}
      minW={"full"}
      py={"0px"}
      bg={"transparent"}
    >
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 0, "2xl": 28 }}
        direction={{ base: "column", lg: "row" }}
        {...props.containerProps}
      >
        <Stack flex={1} {...props.textContainerProps}>
          <Heading
            lineHeight={1.1}
            fontFamily={"Poppins-bold"}
            fontSize={{
              base: "3xl",
              sm: "24px",
              lg: props.headingSize ? "40px" : "40px",
              "2xl": props.headingSize ? props.headingSize : "40px",
            }}
          >
            {props?.heading && props.heading()}
          </Heading>
          {props.underline && (
            <Box py={{ base: "22px", "2xl": "41px" }}>
              <Image
                src="/images/faqPage/underline.svg"
                maxW={{ base: "212px", md: "322px", "2xl": "472px" }}
              />
            </Box>
          )}

          <Text
            pt={{ base: "0px", md: "0px" }}
            pb={{ base: "20px", md: "32px", "2xl": "58px" }}
            fontSize={{
              base: "18px",
              md: props.noSignupFee ? "18px" : "18px",
              "2xl": props.noSignupFee ? "18px" : "18px",
              xsm:"18px"
            }}
            fontFamily={"poppins"}
            color={"#002159"}
          >
            {props.description && props.description()}
          </Text>
          {props.startedButton && (
            <Button
              rounded={"5px"}
              size={"lg"}
              borderWidth={"1px"}
              borderColor={"#FA7436"}
              bg={"transparent"}
              px={{ base: "25px", md: "15px", "2xl": "15px" }}
              width={{ base: "100%", md: "160px", "2xl": "208px" }}
              color={"#FA7436"}
              fontFamily={"poppins"}
              _hover={{
                opacity: 0.8,
              }}
            >
              <Stack align={"center"} w="full" direction={"row"}>
                <Text>Get started</Text>
                <Spacer />
                <ChevronRightIcon />
              </Stack>
            </Button>
          )}
          {props.noSignupFee && (
            <Text
              fontSize={{ md: "22px", "2xl": "26px" }}
              fontWeight={"500"}
              color={"#F67337"}
              fontFamily={"Poppins-medium"}
            >
              No sign-up fee | No monthly fee | No obligation
            </Text>
          )}
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box position={"relative"} height={"auto"} width={"full"}>
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={props.rightImage}
              {...props.imageProps}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
