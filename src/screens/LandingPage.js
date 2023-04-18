import { Text } from "@chakra-ui/react";
import React from "react";
import Experience from "../components/Experience/Experience";
import Features from "../components/Features/Features";
import GetStarted from "../components/GetStarted/GetStarted";
import HeroSection from "../components/HeroSection/HeroSection";
import JoinBricks from "../components/JoinBricks/JoinBericks";
import LatestBlog from "../components/LatestBlog/LatestBlog";
import Layout from "../components/Layout/Layout";
import MyBricks from "../components/MyBricks/MyBricks";
import Reviews from "../components/Reviews/Reviews";
import Technologies from "../components/Technologies/Technologies";
import styles from "../styles/landingPage.module.css";

function LandingPage() {
  return (
    <Layout bg={"rgba(254, 252, 251, 1)"}>
      <div className={styles.main}>
        <HeroSection
          rightImage={"/images/landingPage/heroImage.png"}
          description={() => (
            <span className={styles.heroSectionDescription}>
We list your rental on 30+ top travel sites like Airbnb, Booking.com, Expedia, Vrbo, Tripadvisor, and reach millions of guests. Don't miss bookings!            </span>
          )}
          heading={() => (
            <>
              <br />
              <Text
                as={"span"}
                color={"#002159"}
                className={styles.heroSectionHeading}
              >
                Boost your 
                <Text as="span" color={"#FF835B"} marginLeft={"8px"} >
                occupancy  exponentially&nbsp;<br />
                </Text>
                through maximum exposure of your property.

              </Text>
            </>
          )}
          startedButton
        />
        <Technologies />
        <Experience />
        <Reviews />
        <Features />
        <MyBricks />
        <JoinBricks />
        <LatestBlog />
        <GetStarted />
      </div>
    </Layout>
  );
}

export default LandingPage;
