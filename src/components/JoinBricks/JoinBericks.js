import React from "react";
import { Box, Image } from '@chakra-ui/react';
import styles from "../../styles/JoinBricks.module.css";
import JoinBricksCard from "../JoinBricksCard/JoinBricksCard";
import JoinBricksCardSec from "../JoinBricksCardSec/JoinBricksCardSec";


function JoinBricks() {

    const cardData = [
        {
            title: 'Add your',
            titleColored: 'Property',
            description1: "It's completely cost-free to register, and only takes a few minutes to list your property on MyBricks. ",
            description2: "No need to manage numerous channels and profiles anymore - all your property details are securely stored in your MyBricks account.",
            numberImage: '/images/landingPage/1.svg',
            image: "/images/landingPage/home.svg",
            isLeft:true
        },
        {
            title: ' Listing Creation and  ',
            titleColored: 'Optimization',
            description1: "With our experienced team of property marketing professionals, we specialize in optimizing your listing for maximum performance across all channels.",
            description2: " Our services aim to give your listings an incredible boost, enabling you to outperform your competitors and increase your bookings substantially!",
            numberImage: '/images/landingPage/2.svg',
            image: "/images/landingPage/joinMan.svg"
        },

        {
            title: 'Get featured on',
            titleColored: '30+',
            titleLeft:'global channels',
            description1: "Your property will be featured on the most exceptional booking platforms globally, granting you worldwide exposure and visibility to millions of potential guests.",
            description2: " Within a few hours, we can list your property on popular sites such as Airbnb, Booking.com, Expedia, Vrbo, Tripadvisor, and several others. ",
            numberImage: '/images/landingPage/3.svg',
            image: "/images/landingPage/joinGlobal.svg",
            isLeft:true,
            buttonTitle:"Explore our Channels",
            imageSize:true,
        },
        {
            title: 'Receive',
            titleColored: 'bookings',
            titleLeft:'and get paid',
            description1: "Our team handles all your booking inquiries, freeing up your valuable time! You'll receive notifications about new bookings, and payment will be made weekly.",
            description2: "We charge a small commission on bookings. You won't be charged anything else besides our commission. ",
            numberImage: '/images/landingPage/4.svg',
            image: "/images/landingPage/joinWoman.svg",
            buttonTitle:"Our Commsion Rates"
            
        }
    ]  

    return (
        <Box>
            <Box style={{ position: 'relative' }}>
                <Box className={styles.mainHeading}>
                <Box color="#1F3562"  fontSize={{ base: "3xl", lg: "40px", '2xl': "40px" }} style={{  fontWeight: 600, fontFamily: 'poppins-medium', position: 'relative', zIndex: 99 }}>
                    Joining <span style={{ color: '#FF835B' }}>MyBricks</span> is quick and effortless
                </Box>
                <Image className={styles.planeImage} src='/images/landingPage/plane.svg' width="150px" height="200px" />
            <Box style={{ fontSize: 24, fontWeight: 500, fontFamily: 'poppins-medium', color: '#1F3562' }}>  Here's how it works:</Box>
            </Box>

            </Box>
            <Box className={styles.bgImage} mt={{base:"30px" , lg:"100px", xl:"150px"}}>
                {cardData.map((item) =>
                    <JoinBricksCard item={item} />
                )}
            </Box>
            <Box className={styles.bgImage2} mt={{base:"30px" , lg:"100px", xl:"150px"}}>
                {cardData.map((item) =>
                    <JoinBricksCardSec item={item} />
                )}
            </Box>
        </Box>
    )
}

export default JoinBricks;
