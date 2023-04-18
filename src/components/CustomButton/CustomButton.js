import { Button } from "@chakra-ui/react";
import React from "react";

function CustomButton({
  children,
  px = { base: "19px", md: "30px", "2xl": "49px" },
  py = { base: "6px", md: "13px" },
  bg = "linear-gradient(90.18deg, rgba(255, 81, 0, 0.7) 0.22%, #DB4601 94.36%)",
  color = "#FFFFFF",
  fontSize = ["14px", "14px", "14px", "16px", "16px"],
  fontFamily = "poppins",
  borderRadius = "5px",
  cursor = "pointer",
  hoverBg = "linear-gradient(90.18deg, rgba(255, 81, 0, 0.7) 0.22%, #DB4601 94.36%)",
  ...props
}) {
  return (
    <Button
      px={px}
      py={py}
      bg={bg}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      borderRadius={borderRadius}
      cursor={cursor}
      _hover={{
        bg: hoverBg,
        opacity: "0.8",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
