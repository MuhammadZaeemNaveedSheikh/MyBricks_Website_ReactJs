import { Box, Center, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import FeedbackCard from "../FeedbackCard/FeedbackCard";

function LatestBlog() {
  const [hasNextSlide, setHasNextSlide] = React.useState(true);
  const [hasPrevSlide, setHasPrevSlide] = React.useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 780,
        centerMode: false,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const feedback = [
    {
      name: " Samantha Chen",
      feedback:
        "Absolutely loved it. The view from the balcony was breathtaking & the apartment was stylish & comfortable",
     
      avatar: "/images/landingPage/avatar2.png",
      rating: 5,
    },
    {
      name: "Michael Brown",
      feedback:
        "A great place to stay for a family vacation. The kids loved the pool and we appreciated the fully equipped kitchen",
   
      avatar: "/images/landingPage/avatar.png",
      rating: 5,
    },
    {
      name: "Jessica Wang",
      feedback:
        "We had an amazing time at this Airbnb. The host was friendly and helpful and the location couldn't be beat",
      
      avatar: "/images/landingPage/reviewAvatar1.jpg",
      rating: 5,
    },
    {
      name: "Christopher Kim",
      feedback:
        "The apartment was spotless & had all the amenities we needed. We had a great stay & would highly recommend.",
      
      avatar: "/images/landingPage/reviewAvatar4.jpg",
      rating: 5,
    },
    {
      name: "Ashley Davis",
      feedback:
        "Excellent value for the price. The host was responsive and the apartment was comfortable and clean",
      
      avatar: "/images/landingPage/reviewAvatar2.jpg",
      rating: 5,
    },
    {
      name: " Kevin Nguyen",
      feedback:
        "Highly recommend this Airbnb.Location was perfect & the host went above & beyond to make our stay enjoyable",
      
      avatar: "/images/landingPage/reviewAvatar3.jpg",
      rating: 5,
    },
    {
      name: " Rachel Martinez",
      feedback:
        "We had a fantastic time at this Airbnb. The space was exactly as described and the host was friendly & welcoming.",
     
      avatar: "/images/landingPage/reviewAvatar4.jpg",
      rating: 5,
    },
  ];
  React.useEffect(() => {
    ref.current && ref.current.slickNext();
  }, []);
  const ref = React.useRef(null);
  const goNext = () => {
    if (hasNextSlide) {
      ref.current.slickNext();
      setHasNextSlide(
        ref?.current?.innerSlider?.state?.targetSlide < feedback?.length - 2
      );
      setHasPrevSlide(true);
    }
  };
  const goBack = () => {
    if (hasPrevSlide) {
      ref.current.slickPrev();
      setHasPrevSlide(ref?.current?.innerSlider?.state?.targetSlide > 1);
      setHasNextSlide(true);
    }
  };
  return (
    <Box>
      <Box px={{ base: "10px", lg: "60px", "2xl": "154px" }}>
        <Center position={"relative"}>
          <Text
            fontFamily={"poppins"}
            fontSize={{ base: "3xl", sm: "4xl", lg: "40px", "2xl": "40px" }}
            color="#1F3562"
            fontWeight={'600'}
            
          >
            Our latest guest &nbsp;
            <Text color={"#FA7436"} as="span" >
            reviews
            </Text><br></br>
          </Text>
          <HStack
            top={{ base: "90px", sm: "70px", md: "12px" }}
            position={"absolute"}
            right={{ base: "40px", md: "0" }}
          ><br></br>
            {!hasPrevSlide ? (
              <Image
                draggable={false}
                onClick={goBack}
                cursor={"pointer"}
                src="/images/landingPage/left-button.svg"
              />
            ) : (
              <Image
                draggable={false}
                onClick={goBack}
                cursor={"pointer"}
                transform={"rotate(180deg)"}
                src="/images/landingPage/right-button.svg"
              />
            )}
            {!hasNextSlide ? (
              <Image
                draggable={false}
                onClick={goNext}
                cursor={"pointer"}
                transform={"rotate(180deg)"}
                src="/images/landingPage/left-button.svg"
              />
            ) : (
              <Image
                draggable={false}
                onClick={goNext}
                cursor={"pointer"}
                src="/images/landingPage/right-button.svg"
              />
            )}
          </HStack>
        </Center>
        <Flex justifyContent={'center'} overflow={'hidden'}>
          <Box
            className="blog-slider"
            position={"relative"}
            mt={{ base: "80px", sm: "80px", "2xl": "90px" }}
            px={{ base: "10px", lg: "20px", "2xl": "154px" }}
            width={"calc(100% + 140px)"}
          >
            <Slider ref={ref} {...settings}>
              {feedback?.map((item) => (
                <Box p="20px" key={item.name} >
                  <FeedbackCard
                    name={item.name}
                    stars={item.rating}
                    feedback={item.feedback}
                    role={item.role}
                    avatar={item.avatar}
                    
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default LatestBlog;
