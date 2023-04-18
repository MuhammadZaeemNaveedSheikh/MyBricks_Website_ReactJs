import { Stack, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import ChannelSection from "../components/channelSection/ChannelSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Layout from "../components/Layout/Layout";
import JoinBricksSec from "../components/JoinBricksSec/JoinBericksSec";

export default function FaqPage() {
  const firstRowImages = [
    "/images/faqPage/stayz.svg",
    "/images/faqPage/fewo.svg",
    "/images/faqPage/flip.svg",
    "/images/faqPage/lastMinute.svg",
    "/images/faqPage/flip.svg",
    "/images/faqPage/trivago.svg",
  ];
  const secondRowImages = [
    "/images/faqPage/Hotels.svg",
    "/images/faqPage/fewo.svg",
    "/images/faqPage/holidayLetting.svg",
    "/images/faqPage/housetrip.svg",
    "/images/faqPage/wotif.svg",
    "/images/faqPage/hotwire.svg",
  ];
  return (
    <Layout>
      <HeroSection
        rightImage={"/images/faqPage/faq.svg"}
        headingSize={"40px"}
        underline
        description={() => (
          <>
            MyBricks provides more than just basic channel management.<br></br><br></br> Our services will significantly enhance your property's performance across over 30 leading travel sites such as Airbnb, Booking.com, Expedia, Vrbo, TripAdvisor, and TUI.<br></br> <br></br> With our help, you can expand your customer reach like never before and attract more guests to your property.
          </>
        )}
        imageProps={{ maxH: "769px", w: "auto" }}
        containerProps={{ py: "0px" }}
        heading={() => (
          <>
            <Text as={"span"} color={"#002159"} fontSize={"40px"}>
              Our{" "}
              <Text pl="5px" as="span" color={"#FF835B"}>
                channels!
              </Text>
            </Text>
          </>
        )}
      />
      <Stack
        spacing={{ base: "20px",md: "60px", '2xl': "120px" }}
        direction={"column"}
        mt={{ base: "150px", '2xl': "250px" }}
      >
        <ChannelSection
          description={`Partner with us to showcase your property on renowned travel sites like Airbnb, Booking.com, Expedia, TripAdvisor, Vrbo, and TUI. Our collaboration with these prominent names in the industry enables you to gain worldwide exposure and connect with millions of potential guests.`}
            
          heading={() => (
            <>
              Our{" "}
              <Text as="span" color={"#FF835B"} >
                channel{" "}
              </Text>
              partners
            </>
          )}
          textContainerProps={{ maxW: { base: "480px", "2xl": "550px" } }}
          images={[
            "/images/landingPage/airbnd.svg",
            "/images/landingPage/vbro.svg",
            "/images/landingPage/tripa.svg",
            "/images/landingPage/expedia.svg",
            "/images/landingPage/bookingt.svg",
          ]}
          imageWidth={{ base: "165px", lg: "165px", "2xl": "253px" }}
        />
        <ChannelSection
          description={`MyBricks not only markets your vacation rental on major partner channels, but also expands your property's visibility across various affiliate, local, and niche travel sites. Along with our primary partner channels, we will feature your listing on more than 30 well-known affiliate and local websites, such as Kayak, Priceline, Trivago, and Hotels.com.

          `}
          heading={() => (
            <>
              30+ affiliate{" "}
              <Text as="span" color={"#FF835B"}>
                channel{" "}
              </Text>
            </>
          )}
          textContainerProps={{ maxW: { base: "550px", "2xl": "620px" } }}
          images={[
            "/images/faqPage/cheap.svg",
            "/images/faqPage/abritel.svg",
            "/images/faqPage/homelidays.svg",
            "/images/faqPage/housetrip.svg",
            "/images/faqPage/bookabach.svg",
            "/images/faqPage/HalalBooking.svg",
          ]}
          imageWidth={{ base: "200px", md: "145px", "2xl": "263px" }}
        />
      </Stack>
      <Stack
        mt={{ base: "0px",md: '40px', '2xl': "121px" }}
        px={{ base: "0px", '2xl': "85px" }}
      >
        <Flex
          flexWrap={"wrap"}
          justifyContent={{ base: "center", md: "flex-start", '2xl': 'flex-start' }}
          rowGap={"20px"}
        >
          {firstRowImages.map((item) => (
            <Image src={item} h={{ base: "60px", "2xl": "78px" }} />
          ))}
        </Flex>
        <Flex
          flexWrap={{base: "wrap", lg: "wrap",xl:"nowrap", '2xl':"wrap",}}
          pt={{ base: "0px", md: "40px", "2xl": "90px" }}
          justifyContent={{ base: "center", lg: "flex-start" }}
          rowGap={"20px"}
          paddingLeft={{ base: "0", lg: "30px", '2xl':"0px", }}
        >
          {secondRowImages.map((item) => (
            <Image  src={item} h={{ base: "59px", "2xl": "78px" }} />
          ))}
        </Flex>
      </Stack>
      <JoinBricksSec />
    </Layout>
  );
}
