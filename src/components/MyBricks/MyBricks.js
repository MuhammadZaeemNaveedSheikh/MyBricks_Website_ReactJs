import React from 'react'
import { Box, Image } from '@chakra-ui/react';
import Styles from "../../styles/MyBricks.module.css";


function MyBricks() {
    return (
        <Box className={Styles.mainClass1} paddingBottom={{xl:"175px", lg: '175px', base: '20px' }} paddingRight={"20px"} paddingLeft={"20px"}>
            <Box  minHeight={"416px"} style={{ display: "flex", flexDirection: 'column', alignItems: 'center', width: '100%', borderRadius: 16, background: '#FF7433', position: 'relative', paddingBottom: "90px",paddingLeft: 20,paddingRight:20,textAlign:'center' }}>
                <Box style={{ position: 'absolute', bottom: 0, left: 0, marginBottom: -3, zIndex: 1 }}>
                    <Image src={"/images/landingPage/line.svg"} w="500px" />
                </Box>
                <Box style={{ position: 'absolute', top: 0, right: 0, zIndex: 1, marginTop: 9 }}>
                    <Image src={"/images/landingPage/tree.svg"} w="150px" />
                </Box>
                <Box className="myBricksTitle" as='p' zIndex={99} position="relative" color={'#fff'} pt={45} fontFamily={"poppins-medium"} fontStyle="500" fontSize={{ base: "30px", lg: "35px", xl: "40px" }}>
                    MyBricks helps owners...
                </Box>
                <Box className={Styles.flexMain} style={{ display: 'flex', justifyContent: 'center', rowGap: "20px", marginTop: 30 }}>
                    <Box display={"flex"} alignItems={'center'} flexDirection="column" width={{ lg: '250px' }} >
                        <Box style={{ fontSize: 21, fontFamily: 'poppins-medium', color: '#fff', fontWeight: '300' }}>
                            List on over
                        </Box>
                        <Box fontSize={{ base: "30px", lg: "35px", xl: "50px" }} style={{  fontFamily: 'poppins-medium', color: '#fff', fontWeight: '700' }}>
                            30+
                        </Box>
                        <Box style={{ fontSize: 25, fontFamily: 'poppins-medium', color: '#fff', fontWeight: '400' }}>
                            Global sites
                        </Box>

                    </Box>
                    <Box display={"flex"} alignItems={'center'} flexDirection="column" width={{ lg: '250px' }}>
                        <Box style={{ fontSize: 21, fontFamily: 'poppins-medium', color: '#fff', fontWeight: '300' }}>
                            Boost booking by
                        </Box>
                        <Box fontSize={{ base: "30px", lg: "35px", xl: "50px" }} style={{  fontFamily: 'poppins-medium', color: '#fff', fontWeight: '700' }}>
                            90%
                        </Box>
                        <Box  style={{ fontSize: 25, fontFamily: 'poppins-medium', color: '#fff', fontWeight: '400' }}>
                            per year
                        </Box>

                    </Box>
                    <Box display={"flex"} alignItems={'center'} flexDirection="column" width={{ lg: '250px' }}>
                        <Box style={{ fontSize: 21, fontFamily: 'poppins-medium', color: '#fff', fontWeight: '300' }}>
                            Cut Listings admins by
                        </Box>
                        <Box fontSize={{ base: "30px", lg: "35px", xl: "50px" }} style={{  fontFamily: 'poppins-medium', color: '#fff', fontWeight: '700' }}>
                            80%
                        </Box>
                        <Box style={{ fontSize: 25, fontFamily: 'poppins-medium', color: '#fff', fontWeight: '400' }}>
                            Annually
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MyBricks
