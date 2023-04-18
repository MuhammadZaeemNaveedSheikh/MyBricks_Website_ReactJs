import React from "react";
import { Box, Image } from "@chakra-ui/react";
import styles from "../../styles/Experience.module.css";

const Experience = () => {
  return (
    <Box className={styles.main}>
      <Box className={styles.imageSection}>
        <Image src="/images/landingPage/experience.svg" />
      </Box>
      <Box className={styles.textSection}>
        <Box fontWeight={600} fontFamily="Inter" fontSize={24} color="#F66F4D">
          Our Experience
        </Box>
        <Box
          fontWeight={600}
          color="#002159"
          fontFamily="poppins-medium"
          className={styles.experienceHeading}
        >
          Boost your property's exposure to{" "}
          <span style={{ color: "#F66F4D" }}>millions</span> of guests
        across the best travel sites
        </Box>
        <Box
          color="#1F3562"
          fontWeight={400}
          fontFamily="Inter"
          mt={{ base: "14px", "25px": "40px" }}
          className={styles.experienceDescription}
        >
          Let us handle the booking sites. We've partnered with all the top players, so you don't have to. Get booked in no time and save precious hours with us!
        </Box>
        <Box className={styles.mainClass}>
          <Box>
            <Box
              fontWeight={600}
              fontFamily="Inter"
              fontSize={{ base: "3xl", lg: "30px", "2xl": "30px" }}
              color="#F66F4D"
            >
              13K+
            </Box>
            <Box
              fontWeight={400}
              fontFamily="Inter"
              fontSize={18}
              color="#939597"
              mt={{ base: "10px", "2xl": 18 }}
            >
              Monthly <br /> Views
            </Box>
          </Box>
          <Box>
            <Box
              fontWeight={600}
              fontFamily="Inter"
              fontSize={{ base: "3xl", lg: "30px", "2xl": "30px" }}
              color="#F66F4D"
            >
              30+
            </Box>
            <Box
              fontWeight={400}
              fontFamily="Inter"
              fontSize={18}
              color="#939597"
              mt={{ base: "10px", "2xl": 18 }}
            >
              Travel
              <br /> Sites
            </Box>
          </Box>
          <Box>
            <Box
              fontWeight={600}
              fontFamily="Inter"
              fontSize={{ base: "3xl", lg: "30px", "2xl": "30px" }}
              color="#F66F4D"
            >
              20+
            </Box>
            <Box
              fontWeight={400}
              fontFamily="Inter"
              fontSize={18}
              color="#939597"
              mt={{ base: "10px", "2xl": 18 }}
            >
              Years Of <br /> Experience
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
