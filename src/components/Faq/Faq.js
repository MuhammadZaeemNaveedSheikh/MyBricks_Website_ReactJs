import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Image,
  Text
} from "@chakra-ui/react";
import React from "react";

const Faq = () => {
  return (
    <Box
      fontFamily={"Poppins"}
      mb={{ base: "40px", md: "160px" }}
      mt={{ base: "0px", '2xl': "200px" }}
      id="faq"
    >
      <Center>
        <Box position={'relative'}>
          <Image
            src="/images/invest/blur.svg"
            display={{ base: "none", md: "block" }}
            position="absolute"
            left={'-100px'}
            top={'-20px'}
          />
          <Text
            fontSize={{ base: "3xl", lg: "5xl", xl: "40px" }}
            fontWeight={"700"}
            color={"#002159"}
          >
            FA
            <Text as={"span"} color={"#FF835B"}>
              Q
            </Text>
            s
          </Text>
        </Box>
      </Center>
      <Box
        border={"2.34646px solid #FF835B"}
        mx={{ base: "20px", lg: "60px", "2xl": "214px" }}
        mt={{ base: "20px", lg: "50px" }}
        borderRadius={{ base: "20px", md:"30px", '2xl': "46px" }}
      >
        <Accordion pb={{ base: "20px", md: "30px" }} allowToggle>
          <AccordionItem
            borderBottom={"1px solid #FF835B"}
            borderTop="none"
            px={{ base: "10px", md: "38px" }}
            py={{ base: "20px", md: "38px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"600"}
                    color={"#002159"}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontFamily={"Poppins-semiBold"}
                  >
                    What Does it cost to use{" "}
                    <Text as={"span"} color={"#FF835B"}>
                    MyBricks?{" "}
                    </Text>
                  </Text>
                  <AccordionIcon ml={{ base: "20px", md: "50px" }} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={"500"}
                color={"#002159"}
                fontFamily={"Poppins"}
              >
Joining MyBricks is completely free, with no set up fees or monthly subscriptions. Our pricing model is straightforward: you only pay a 10% fee per booking when we generate revenue for you. As a MyBricks member, you'll have access to our 30+ global channels, top-tier product features, and expert optimization guidance to create listings that attract bookings.              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom={"1px solid #FF835B"}
            px={{ base: "10px", md: "38px" }}
            py={{ base: "20px", md: "38px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"600"}
                    color={"#002159"}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontFamily={"Poppins-semiBold"}
                  >
                   What is the 10% 
                    <Text as={"span"} color={"#FF835B"} marginRight={"5px"}>
                      {" MyBricks"}
                    </Text>
                   Fee?
                  </Text>
                  <AccordionIcon ml={{ base: "20px", md: "50px" }} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={"500"}
                color={"#002159"}
                fontFamily={"Poppins"}
              >
Our fee is simple: a 10% charge per booking, regardless of which channel the booking comes from. This fee grants you access to our network of 30+ global channels, as well as our top-tier product features, customer support, and industry-leading expertise in optimizing property performance on every channel.              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom={"1px solid #FF835B"}
            px={{ base: "10px", md: "38px" }}
            py={{ base: "20px", md: "38px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"600"}
                    color={"#002159"}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontFamily={"Poppins-semiBold"}
                  >
                   When can I expect to receive payment for my 

                    <Text as={"span"} color={"#FF835B"}>
                      {" bookings? "}
                    </Text>
                  </Text>
                  <AccordionIcon ml={{ base: "20px", md: "50px" }} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={"500"}
                color={"#002159"}
                fontFamily={"Poppins"}
              >
Every Wednesday, you will obtain your weekly payment and statement, which will include all the arrivals up to the previous Sunday. The time it takes for payment to be credited to your account may vary, and in some cases, it may take up to 10 days, depending on the policies of your bank.              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom={"1px solid #FF835B"}
            px={{ base: "10px", md: "38px" }}
            py={{ base: "20px", md: "38px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"600"}
                    color={"#002159"}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontFamily={"Poppins-semiBold"}
                  >
              What is the process to modify my 
                    <Text as={"span"} color={"#FF835B"}>
                      {" listings? "}
                    </Text>
                    
                  </Text>
                  <AccordionIcon ml={{ base: "20px", md: "50px" }} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={"500"}
                color={"#002159"}
                fontFamily={"Poppins"}
              >
            if you want to modify your property listings, simply access your MyBricks account and update your property profile. Once you have made the changes, they will be instantly updated across all the channels where your listings are displayed. Nonetheless, it's crucial to inform our support team about the changes made, so they can ensure everything is done correctly.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom={"1px solid #FF835B"}
            px={{ base: "10px", md: "38px" }}
            pt={{ base: "20px", md: "38px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                  marginBottom={10}
                >
                  <Text
                    fontWeight={"600"}
                    color={"#002159"}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontFamily={"Poppins-semiBold"}
                  >
                  In the event of a cancellation, what are the  



                    <Text as={"span"} color={"#FF835B"}>
                      {" consequences "}
                    </Text>
                    for the booking?
                  </Text>
                  <AccordionIcon ml={{ base: "20px", md: "50px" }} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={"500"}
                color={"#002159"}
                fontFamily={"Poppins"}
              >
If a guest cancels a booking and is eligible for a refund, any payment received for the booking will be deducted from future payments made to you. If there are no future bookings, we may ask you to refund the amount owed. <br></br>
The same rule applies if you, as the owner, request a cancellation after receiving payment for the booking. However, cancellations can only be made in exceptional circumstances.<br></br>
Once a booking is cancelled and processed by our team, the dates on your MyBricks calendar will become available for guests to book. It may take a short period of time for these changes to appear on all of your chosen channels.<br></br>
Please note that if you ask us to cancel a booking after it has been confirmed with the guest, we may charge you for any expenses incurred as well as an administration fee of $60 on behalf of MyBricks. However, if we are responsible for any changes or cancellations that result in fees from a channel or other reasonable costs, we will not ask you to pay for these.              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderBottom={"1px solid transparent"}
            px={{ base: "10px", md: "38px" }}
            pt={{ base: "20px", md: "38px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    fontWeight={"600"}
                    color={"#002159"}
                    fontSize={{ base: "16px", md: "20px" }}
                    fontFamily={"Poppins-semiBold"}
                  >
                  What happens if I have any 




                    <Text as={"span"} color={"#FF835B"} style={{marginLeft:"5px"}}>
                      {"existing listings "}
                    </Text>
                    and accounts on sites such as Airbnb?
                  </Text>
                  <AccordionIcon ml={{ base: "20px", md: "50px" }} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={5}>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight={"500"}
                color={"#002159"}
                fontFamily={"Poppins"}
        >
When you choose to list on all channels with Mybricks, we aim to simplify things and reduce administrative tasks. If you have existing listings on sites such as Airbnb or Booking.com, we will create new listings for you. It's important to note that you'll need to snooze or deactivate any duplicate listings. Alternatively, you can give us access to your account to manage as a co-host. Additionally, we will notify you of every booking, providing you with all the necessary guest information.   </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
