import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Faq from "../components/Faq/Faq";
import FeesWork from "../components/FeesWork/FeesWork";
import HeroSection from "../components/HeroSection/HeroSection";
import LatestBlog from "../components/LatestBlog/LatestBlog";
import Layout from "../components/Layout/Layout";
import TrustedPartnerSection from "../components/trustedPartnerSection/TrustedPartnerSection";

export default function InvestWithUs() {
  return (
    <Layout>
      <Box
        position={"relative"}
        h={{
          base: "calc(1000px - 135px)",
          md: "calc(850px - 135px)",
          "2xl": "calc(1000px - 135px)",
        }}
      >
        <Box
          bg={
            "linear-gradient(169.4deg, #FF915A -6.01%, #092459 36.87%, #EC8220 78.04%, #092459 103.77%)"
          }
          position={"absolute"}
          top={"-140px"}
          bottom={"0px"}
          zIndex={-100}
          h={{ base: "1000px", md: "800px", "2xl": "1000px" }}
          w={"100%"}
          opacity={0.05}
        />
        <HeroSection
          rightImage={"/images/invest/invest.svg"}
          headingSize={"68px"}
          description={() => (
            <Text as={"span"} py={"58px"}>
                MyBricks partners with vacation rental owners worldwide to optimize their bookings. Joining us is free, and you don't owe us anything until we generate revenue for you! Our fee structure is simple and straightforward: a flat 10% fee per booking, with no additional costs.
            </Text>
          )}
          imageProps={{ maxH: "769px", w: "auto" }}
          containerProps={{
            py: "0px",
            align: { base: "center", md: "flex-start", "2xl": "center" },
          }}
          textContainerProps={{
            mt: { base: "0px", md: "120px", "2xl": "0px" },
          }}
          heading={() => (
            <>
              <Text as={"span"} color={"#002159"} fontSize={"40px"}>
                One simple{" "}
                <Text pl="5px" as="span" color={"#FF835B"}>
                  Payment
                </Text>
              </Text>
            </>
          )}
          noSignupFee
        />
        <Image
          src="/images/invest/ellipse.svg"
          position={"absolute"}
          zIndex={2}
          bottom={"184px"}
          left={"132px"}
          display={{ base: "none", md: "block" }}
        />
        <Image
          src="/images/invest/star.svg"
          position={"absolute"}
          zIndex={2}
          top={{ md: "10px", "2xl": "84px" }}
          left={"50%"}
          display={{ base: "none", md: "block" }}
        />
      </Box>
      <TrustedPartnerSection />
      <FeesWork />
      <Faq />
      <LatestBlog />
      <Box
        paddingTop={{ lg: "170px", xl: "170px", xs: "50px" }}
        paddingBottom="50px"
        paddingLeft={{ lg: "60px", xl: "60px", xs: "20px" }}
        paddingRight={{ lg: "72px", xl: "60px", xs: "20px" }}
      >
        <Box
          color="#1F3562"
          fontSize={14}
          fontWeight={400}
          fontFamily="poppins"
        >
          <Text color="#FA7436">How does it work?</Text> At MyBricks, we understand that managing a rental property can be a real hassle. But don't worry, we've got you covered! Our comprehensive solution helps you increase occupancy and maximize your return on investment. We'll list your rental property on over 30 top travel sites, including Airbnb, Booking.com, Expedia, Vrbo, and Tripadvisor. With our full-service approach, we handle all booking inquiries and communication with guests, freeing up your time to focus on other things. Already have an Airbnb or other platform account? No problem,  we will handle that for you! We take care of everything, from listing to managing bookings and payments. Our goal is to make the rental process as stress-free as possible. We pride ourselves on delivering top-quality service to our clients and are always available to answer your questions. Whether you're a new rental property owner or an experienced pro, we're here to help you achieve your goals and maximize your return on investment.
        </Box>
      </Box>
    </Layout>
  );
}
