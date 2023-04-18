import React from "react";
import { Box } from "@chakra-ui/react";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import styles from "../../styles/FeaturesCard.module.css";

function Features() {
  const featureData = [
    {
      image: "/images/landingPage/global.svg",
      titleSimple: "Global",
      titleColored: "Visiblity",
      description:
        "Get listed on 30+ of the world’s best travel and booking sites at the touch of a button.",
    },
    {
      image: "/images/landingPage/listing1.svg",
      titleSimple: " Listing",
      titleColored: "Optimisation",
      description:
        "Property listing SEO expertise to boost property performance on every channel.",
    },
    {
      image: "/images/landingPage/listing2.svg",
      titleSimple: "Listing",
      titleColored: "Automation",
      description:
        "With all your property information in one place, you’ll save time and achieve logistical zen!",
    },
    {
      image: "/images/landingPage/booking.svg",
      titleSimple: "Bookings",
      titleColored: "Hub",
      description:
        "The bookings hub is your one-stop-shop for efficient bookings management.",
    },
    {
      image: "/images/landingPage/dedicated.svg",
      titleSimple: "Dedicated",
      titleColored: "Support",
      description:
        "Our team of property marketing experts are ready to help whenever you need us.",
    },
    {
      image: "/images/landingPage/calender.svg",
      titleSimple: "Calendar",
      titleColored: "Sync",
      description:
        "No more switching between channels. Eliminate calendar headaches and double bookings.",
    },
  ];
  return (
    <Box className={styles.main}>
      <Box
        as={"p"}
        textTransform={"capitalize"}
        fontFamily={"Inter"}
        fontWeight={"600"}
        fontSize={{ base: "3xl", lg: "40px", '2xl': "40px" }}
        color="#1F3562"
      >
        Great <span style={{ color: "#FA7436" }}> features </span> to make{" "}
        <br /> your life easier​..
      </Box>
      <Box className={styles.cardsContainer}>
        {featureData.map((item) => (
          <FeaturesCard item={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Features;
