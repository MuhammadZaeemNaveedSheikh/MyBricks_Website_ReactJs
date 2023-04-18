import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
export default function WithSubnavigation(props) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Flex
        pl={{ base: "20px", xl: "75px", "2xl": "175px" }}
        pr={{ base: "20px", xl: "75px", "2xl": "199px" }}
        py={{ base: "28px", lg: "48px" }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, lg: "auto" }}
          display={{ base: "flex", lg: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", lg: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", lg: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link to="/">
              <Image
                minWidth={"150px"}
                src="/images/1a.png"
              />
            </Link>
          </Text>

          <Flex w="full" display={{ base: "none", lg: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, lg: 0 }}
          justify={"flex-end"}
          direction={"row"}
          align={"center"}
          spacing={6}
          marginBottom={"20px"}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontFamily={"poppins-medium"}
            color={"#FD8D3A"}
            variant={"link"}
            mr="28px"
            href={"https://app.mybricksstays.com/"}
            display={useBreakpointValue({ base: "none", lg: "block" })}
          >
            Login
          </Button>
          <CustomButton as={"a"} href="https://app.mybricksstays.com/submission">Sign Up</CustomButton>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const { pathname } = useLocation();
  return (
    <Stack
      pr={{ base: "20px", xs: "50", "2xl": "198px" }}
      justify={"space-around"}
      w="full"
      direction={"row"}
      spacing={4}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box ml={{ base: "10px", "2xl": "32px" }} key={navItem.label}>
          <Box
            whiteSpace={"nowrap"}
            fontSize={"16px"}
            fontWeight={"400"}
            fontFamily={"poppins"}
            lineHeight={"24px"}
            color={
              pathname === navItem.href ? "#FA7436" : "rgba(0, 33, 89, 0.6)"
            }
            _hover={{
              textDecoration: "none",
              color: pathname !== navItem.href && "rgba(0, 33, 89, 1)",
            }}
          >
            <Link to={navItem.href ?? "#"}>{navItem.label}</Link>
          </Box>

          {pathname === navItem.href && (
            <Center>
              <Box
                mt="2px"
                width={"24px"}
                height={"4px"}
                bg="#002159"
                borderRadius={"50px"}
              />
            </Center>
          )}
        </Box>
      ))}
    </Stack>
  );
};
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}
    >
      {[
        ...NAV_ITEMS,
        {
          label: "Login",
          href: "#",
        },
      ].map((navItem) => (
        <MobileNavItem key={navItem.label} href={navItem.href} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex py={2} as={Link}>
        <Text
          whiteSpace={"nowrap"}
          fontSize={"sm"}
          fontFamily={"poppins"}
          color={"rgba(0, 33, 89, 0.8)"}
        >
          <Link to={href}>{label}</Link>
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/invest",
  },
  {
    label: "Faq",
    href: "#",
  },
  {
    label:"How it works",
    href:"#",
  },
  {
    label: "Channels",
    href: "/channel",
  },
  {
    label: "Book a place",
    href: "https://app.mybricksstays.com/",
  },
  {
    label: "Invest with us",
    href: "https://mybricksfinance.com/home",
  },
];
