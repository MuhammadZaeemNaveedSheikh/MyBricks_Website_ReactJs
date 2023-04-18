import React from "react";
import { Box, Image, Button, Stack, Text, Spacer } from "@chakra-ui/react";
import styles from "../../styles/JoinBricks.module.css";
import JoinBricksCardSec from "../JoinBricksCardSec/JoinBricksCardSec";
import JoinBricksCard from "../JoinBricksCard/JoinBricksCard";
import { ChevronRightIcon } from "@chakra-ui/icons";

function JoinBericksSec() {
  const cardData = [
    {
      title: "Enhance your",
      titleColored: "Airbnb's",
      titleLeft: "search ranking",
      description1:
        "With 7 million+ listings across 191 countries, Airbnb links travelers with cost-effective lodging options in authentic homes.",
      description2:"Let us help you maximize your earning potential on Airbnb. Join forces with us and leverage our expertise to surpass competitors. It\'s like optimizing your Airbnb profile for SEO! ",
      image: "/images/landingPage/join1.png",
      buttonTitle: "Learn more about listing on Airbnb",
      titleSize: 48,
      descriptionSize: 21,
    },

    {
      title: "Boost your visibility on",
      titleColored: " Booking.com",
      description1:
        "Booking.com attracts over 100 million monthly visits and is among the largest travel websites globally.",
      description2:
        "Partner with us to become a Booking.com host and we'll also feature your property on other popular platforms such as Priceline, Kayak, and Agoda.",
      description3:
        "       Our streamlined process simplifies your property listing on Booking.com while ensuring optimal performance and accurate information.",
      image: "/images/faqPage/mobile-mockup.png",
      isLeft: true,
      isBg: true,
      buttonTitle: "Advertise on Booking.com",
      titleSize: 48,
      descriptionSize: 21,
    },

    {
      title: "Outshine competitors on ",
      titleColored: "Expedia",
      description1:
        "Expedia.com is a global travel and accommodation booking website with 1.5 million holiday rentals in 33 countries.",
      description2:
        "When you join Expedia with us, we’ll also list your property on Expedia’s affiliates network, including Hotels.com, Hotwire.com, Orbitz, Travelocity, and Lastminute.com.",
      image: "/images/landingPage/join3.svg",
      buttonTitle: "Get listed on Expedia",
      titleSize: 48,
      descriptionSize: 21,
    },

    {
      title: "Secure bookings on",
      titleColored: "TripAdvisor",
      description1:
        "TripAdvisor, which initially served as a platform for reviews, now attracts 390 million monthly visits and advertises 1 million+ holiday homes. ",
      description2:
        "As a TripAdvisor host partnered with us, we'll not only showcase your property on the platform but also feature it on FlipKey, HouseTrip, and holidaylettings.com.",
      image: "/images/landingPage/join4.svg",
      buttonTitle: "List your property on TripAdvisor",
      isLeft: true,
      titleSize: 48,
      descriptionSize: 21,
    },

    {
      title: "Promote your property on ",
      titleColored: "Vrbo",
      titleLeft: "",
      description1:
        "Vrbo, specializing in luxury property rentals, boasts a portfolio of over 2 million properties worldwide.",
      description2:
        "By partnering with us to become a Vrbo host, we'll not only list your property on the platform but also advertise it on Vrbo's affiliate sites such as Abritel and numerous others.",
      image: "/images/landingPage/join5.svg",
      buttonTitle: "Learn more about Vrbo",
      titleSize: 48,
      descriptionSize: 21,
    },
  ];

  return (
    <Box>
      <Box className="joinbricksSec" mt={{ sm: 0, md: 150 }}>
        {cardData.map((item) => (
          <JoinBricksCard item={item} />
        ))}
      </Box>
      <Box className="joinbricksSec2" mt={{ sm: 0, md: 150 }}>
        {cardData.map((item) => (
          <JoinBricksCardSec item={item} />
        ))}
      </Box>
      {/* myBricks */}
      <Box className={styles.yellowSection}>
        <Box
          height={{ base: "auto", md: "266px", "2xl": "326px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            borderRadius: 16,
            background: "#FF7433",
            position: "relative",
            paddingLeft: 20,
            paddingRight: 20,
            textAlign: "center",
          }}
        >
          <Box
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              marginBottom: -3,
              zIndex: 1,
            }}
          >
            <Image src={"/images/landingPage/line.svg"} w="500px" />
          </Box>
          <Box
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
              marginTop: "10px",
            }}
          >
            <Image src={"/images/landingPage/tree.svg"} w="150px" />
          </Box>
          <Box
            as="p"
            fontWeight={700}
            zIndex={99}
            position="relative"
            color={"#fff"}
            pt={{ base: "42px", "2xl": 62 }}
            fontFamily={"poppins-medium"}
            fontSize={{ base: "3xl", lg: "35px", "2xl": "40px" }}
          >
            Explore a fresh approach to promoting your vacation rental.

          </Box>

          <Box mt="70px">
            <Button
              rounded={"5px"}
              size={"lg"}
              borderWidth={"1px"}
              borderColor={"#FA7436"}
              bg={"#FFFFFF"}
              px="25px"
              width={{ base: "100%", sm: "208px" }}
              color={"#FA7436"}
              marginBottom="40px"
            >
              <Stack align={"center"} w="full" direction={"row"}>
                <Text fontFamily="poppins" color={"#FA7436"}>
                  Get started
                </Text>
                <Spacer />
                <ChevronRightIcon color={"#FA7436"} />
              </Stack>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        color="#1F3562"
        className={styles.bottomHeading}
        fontSize={14}
        fontWeight={400}
        fontFamily="poppins"
      >
      <Text color={"#FA7436"}>How does it work?</Text> At MyBricks, we understand that managing a rental property can be a real hassle. But don't worry, we've got you covered! Our comprehensive solution helps you increase occupancy and maximize your return on investment. We'll list your rental property on over 30 top travel sites, including Airbnb, Booking.com, Expedia, Vrbo, and Tripadvisor. With our full-service approach, we handle all booking inquiries and communication with guests, freeing up your time to focus on other things. Already have an Airbnb or other platform account? No problem,  we will handle that for you! We take care of everything, from listing to managing bookings and payments. Our goal is to make the rental process as stress-free as possible. We pride ourselves on delivering top-quality service to our clients and are always available to answer your questions. Whether you're a new rental property owner or an experienced pro, we're here to help you achieve your goals and maximize your return on investment.
      </Box>
    </Box>
  );
}

export default JoinBericksSec;
