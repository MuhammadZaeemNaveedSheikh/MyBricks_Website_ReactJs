import React from "react";
import { Box, Image } from "@chakra-ui/react";
import styles from "../../styles/JoinBricks.module.css";
import CustomButton from "../CustomButton/CustomButton";

const JoinBricksCardSec = ({ item }) => {
  return (
    <Box position={"relative"}>
      {item?.isBg && (
        <Image
          right="-280px"
          top={"20px"}
          display={{ base: "none", lg: "block" }}
          position="absolute"
          src="/images/faqPage/line-bg.png"
        />
      )}
      {item.isLeft ? (
        <Box className={styles.cardMain}>
          <Box className={styles.textSection}>
            <Box style={{ display: "flex", alignItems: "baseline" }}>
              {item.numberImage && <Image src={item.numberImage} />}
              <Box
                color="#1F3562" 
                fontSize={{ base: "3xl", lg: "30px", '2xl':item.titleSize || "30px" }}
                style={{
                  fontWeight: 600,
                  fontFamily: "poppins",
                }}
              >
                {item.title}{" "}
                <span style={{ color: "#FA7436" }}> {item.titleColored}</span>{" "}
                {item.titleLeft && <span>{item.titleLeft}</span>}
              </Box>
            </Box>
            <Box
              color="#1F3562"
              fontSize={{ base: "18px",xsm:"14px" , lg: "18px", '2xl':item.descriptionSize || "18px", }}
              style={{
                fontWeight: 400,
                fontFamily: "poppins",
                marginTop: 30,
              }}
            >
              {item.description1}
            </Box>
            <Box
              color="#1F3562"
              fontSize={{ base: "18px",xsm:"14px" , lg: "18px", '2xl':item.descriptionSize || "18px", }}
              style={{
                fontWeight: 400,
                fontFamily: "poppins",
                marginTop: 30,
              }}
            >
              {item.description2}
            </Box>
            {item.description3 && (
              <Box
                color="#1F3562"
              fontSize={{ base: "18px", xsm:"14px" ,lg: "18px", '2xl':item.descriptionSize || "18px", }}
                style={{
                  fontWeight: 400,
                  fontFamily: "poppins",
                  marginTop: 30,
                }}
              >
                {item.description3}
              </Box>
            )}
            {/* {item.buttonTitle && (
              <Box mt={59} mb={"30px"}>
                <CustomButton as={"a"}>
                  <span style={{ fontFamily: "poppins" }}>
                    {item.buttonTitle}{" "}
                  </span>
                </CustomButton>
              </Box>
            )} */}
          </Box>
          <Box
            width={{ base: item.imageSize ? "380px":"80%", sm: "auto",lg: "auto","2xl":"auto" }}
            className={styles.imageSection}
          >
            <Image src={item.image} /> 
          </Box>
        </Box>
      ) : (
        <Box className={styles.cardMain}>
       
          <Box className={styles.textSection}>
            <Box style={{ display: "flex", alignItems: "baseline" }}>
              {item.numberImage && <Image src={item.numberImage} />}
              <Box
                color="#1F3562"
                fontSize={{ base: "3xl", lg: "30px", '2xl':item.titleSize || "30px" }}
                style={{
                  fontWeight: 600,
                  fontFamily: "poppins",
                }}
              >
                {item.title}{" "}
                <span style={{ color: "#FA7436" }}>{item.titleColored}</span>
                {item.titleLeft && <span> {item.titleLeft}</span>}
              </Box>
            </Box>
            <Box
              color="#1F3562"
              fontSize={{ base: "18px",xsm:"14px" ,lg: "18px", '2xl':item.descriptionSize || "18px", }}
              style={{
                fontWeight: 400,
                fontFamily: "poppins",
                marginTop: 30,
              }}
            >
              {item.description1}  
            </Box>
            <Box
              color="#1F3562"
              fontSize={{ base: "18px",xsm:"14px" , lg: "18px", '2xl':item.descriptionSize || "18px", }}
              style={{
                fontWeight: 400,
                fontFamily: "poppins",
                marginTop: 30,
              }}
            >
              {item.description2}
            </Box>
            {/* {item.buttonTitle && (
              <Box mt={59}>
                <CustomButton as={"a"}>
                  <span style={{ fontFamily: "poppins" }}>
                    {item.buttonTitle}
                  </span>
                </CustomButton>
              </Box>
            )} */}
          </Box>
          <Box   
          width={{ base: item.imageSize ? "380px":"80%",sm:"auto", lg: "auto","2xl":"auto"  }}
           className={styles.imageSection}>
            <Image src={item.image} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default JoinBricksCardSec;
