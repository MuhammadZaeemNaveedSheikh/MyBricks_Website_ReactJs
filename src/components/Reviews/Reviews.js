import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useEffect } from "react";

export default function Reviews() {
  const settings = {
    centerMode: true,
    infinite: false,
    vertical: true,
    draggable: false,
    arrows: false,
    slidesToShow: 2,
    speed: 500,
  };
  const feedback = [
    {
      name: "Eleanor Schulthesis",
      feedback:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      role: "Product Manager",
      avatar: "/images/landingPage/avatar2.png",
      rating: 5,
    },
    {
      name: "Eleanor Schulthesis",
      feedback:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      role: "Product Manager",
      avatar: "/images/landingPage/avatar.png",
      rating: 5,
    },
    {
      name: "Eleanor Schulthesis",
      feedback:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      role: "Product Manager",
      avatar: "/images/landingPage/avatar2.png",
      rating: 5,
    },
    {
      name: "Eleanor Schulthesis",
      feedback:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      role: "Product Manager",
      avatar: "/images/landingPage/avatar2.png",
      rating: 5,
    },
    {
      name: "Eleanor Schulthesis",
      feedback:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      role: "Product Manager",
      avatar: "/images/landingPage/avatar.png",
      rating: 5,
    },
    {
      name: "Eleanor Schulthesis",
      feedback:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
      role: "Product Manager",
      avatar: "/images/landingPage/avatar2.png",
      rating: 5,
    },
  ];

  const reviewCardData = [
    {
      src: "/images/landingPage/r1.png",
      reviewText:
        "Using MyBricks in Edinburgh was an excellent decision. They were professional, detail-oriented, and helped me attract top-notch guests. I highly recommend them to anyone looking for a hassle-free vacation rental experience",
      name: "Laura Brown",
      location: "Edinburgh, UK",
    },
    {
      src: "/images/landingPage/r2.png",
      reviewText:
        "MyBricks was an excellent choice for me. Their professional approach, attention to detail, and ability to attract top-quality guests made my experience a great one. I would highly recommend them to anyone looking for a reliable vacation rental service",
      name: "Maria Garcia",
      location: "Madrid, Spain",
    },
    {
      src: "/images/landingPage/r6.png",
      reviewText:
        "Game-changer for me. Their professionalism, attention to detail, and ability to attract top-quality guests made all the difference. I highly recommend their services to anyone looking for a reliable vacation rental service",
      name: "Tom Wilson",
      location: " London, UK",
    },
    {
      src: "/images/landingPage/r4.png",
      reviewText:
        "Using MyBricks was a great experience. They're professional, detail-oriented, and helped me attract top-notch guests. I highly recommend them",
      name: " Jane Doe",
      location: "Manchester, UK",
    },
    {
      src: "/images/landingPage/r3.png",
      reviewText:
        "Hosting with MyBricks was a breeze. They were efficient, attentive, and helped me earn more. Highly recommend!",
      name: "Lisa Green",
      location: "Glasgow, UK",
    },
    {
      src: "/images/landingPage/r3.png",
      reviewText:
        "Using MyBricks was a great experience. They're professional, detail-oriented, and helped me attract top-notch guests. I highly recommend them",
      name: " Jane Doe",
      location: "Manchester, UK",
    },
    {
      src: "/images/landingPage/r6.png",
      reviewText:
        "Hosting with MyBricks was a breeze. They were efficient, attentive, and helped me earn more. Highly recommend!",
      name: "Lisa Green",
      location: "Glasgow, UK",
    },
   
  ];

  const ref = React.useRef(null);
  const [hasNextSlide, setHasNextSlide] = React.useState(true);
  const [hasPrevSlide, setHasPrevSlide] = React.useState(false);
  useEffect(() => {
    ref.current.slickNext();
  }, []);

  const goNext = () => {
    ref.current.slickNext();
    setHasNextSlide(
      ref?.current?.innerSlider?.state?.targetSlide < feedback?.length - 3
    );
    setHasPrevSlide(true);
  };
  const goBack = () => {
    ref.current.slickPrev();
    setHasPrevSlide(ref?.current?.innerSlider?.state?.targetSlide > 1);
    setHasNextSlide(true);
  };
  return (
    <Container
      bg="#F7F8FC"
      pr={{ base: "20px", lg: "60px", "2xl": "202px" }}
      pl={{ base: "20px", lg: "60px", "2xl": "282px" }}
      minW={"full"}
    >
      <Stack
        align={"start"}
        spacing={{ base: 8, "2xl": 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", xl: "row" }}
      >
        <Stack flex={1}>
          <Heading
            lineHeight={1.1}
            fontFamily={"poppins"}
            fontWeight={"600"}
            className="reviewTitles"
          >
            <br />
            <Text className="reviewTitles" as={"span"} color={"#002159"}>
              What Do Our Hosts Say
              <br /> About
              <Text
                className="reviewTitles"
                pl="5px"
                as="span"
                color={"#FF835B"}
              >
                MyBricks
              </Text>
              ?
            </Text>
          </Heading>
          <Text
            pt={{ base: "12px", "2xl": "24px" }}
            pb={{ base: "20px", md: "20px" }}
            fontFamily={"Roboto"}
            fontWeight={"400"}
            color={"#002159"}
            className="reviewDescription"
          >
            Using MyBricks was a great experience. They're professional, detail-oriented, and helped me attract top-notch guests. I highly recommend them!

            <br />
            <br />
            Jane Doe, Manchester, UK
          </Text>
          <HStack display={{ base: "none", sm: "flex" }} width={"120px"}>
            {hasPrevSlide ? (
              <Image
                draggable={false}
                cursor="pointer"
                transform={"rotate(180deg)"}
                onClick={goBack}
                src="/images/landingPage/right-arr-btn.svg"
              />
            ) : (
              <Image
                draggable={false}
                cursor="pointer"
                onClick={goBack}
                src="/images/landingPage/left-arr-btn.svg"
              />
            )}
            <Spacer />
            {hasNextSlide ? (
              <Image
                draggable={false}
                cursor="pointer"
                onClick={goNext}
                src="/images/landingPage/right-arr-btn.svg"
              />
            ) : (
              <Image
                draggable={false}
                cursor="pointer"
                transform={"rotate(180deg)"}
                onClick={goNext}
                src="/images/landingPage/left-arr-btn.svg"
              />
            )}
          </HStack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"start"}
          position={"relative"}
          w={"full"}
        >
          <Image
            position={"absolute"}
            right={{ base: "80px", "2xl": "200px" }}
            top={"-65px"}
            src="/images/landingPage/bg-plans.svg"
          />
          <Box
            position={"relative"}
            height="400px"
            overflow={"hidden"}
            className="review-slider"
          >
            <Slider ref={ref} {...settings}>
              {reviewCardData?.map((item) => (
                <Box
                  maxWidth={{ base: "300px", sm: "650px" }}
                  height="279px"
                  key={item.name}
                >
                  <ReviewCard
                    src={item.src}
                    name={item.name}
                    reviewText={item.reviewText}
                    location={item.location}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Flex>
        <Center>
          <HStack
            marginTop={"-30px"}
            display={{ base: "flex", sm: "none" }}
            width={"120px"}
          >
            {hasPrevSlide ? (
              <Image
                draggable={false}
                cursor="pointer"
                transform={"rotate(180deg)"}
                onClick={goBack}
                src="/images/landingPage/right-arr-btn.svg"
              />
            ) : (
              <Image
                draggable={false}
                cursor="pointer"
                onClick={goBack}
                src="/images/landingPage/left-arr-btn.svg"
              />
            )}
            <Spacer />
            {hasNextSlide ? (
              <Image
                draggable={false}
                cursor="pointer"
                onClick={goNext}
                src="/images/landingPage/right-arr-btn.svg"
              />
            ) : (
              <Image
                draggable={false}
                cursor="pointer"
                transform={"rotate(180deg)"}
                onClick={goNext}
                src="/images/landingPage/left-arr-btn.svg"
              />
            )}
          </HStack>
        </Center>
      </Stack>
    </Container>
  );
}
