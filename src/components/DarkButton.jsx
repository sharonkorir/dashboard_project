import React from "react";
import { Button, Icon, useTheme } from "@chakra-ui/react";

export const DarkButton = ({ text, icon, width }) => {
  const theme = useTheme();
  return (
    <Button
      width={width}
      bg={theme.colors.bg.black}
      color={theme.colors.bg.grey}
      _hover={{
        backgroundColor: theme.colors.bg.hoverBlack,
        color: theme.colors.bg.hoverGrey,
      }}
      leftIcon={icon ? <Icon as={icon} boxSize={"1.5rem"} /> : undefined}
      fontWeight="medium"
    >
      {text}
    </Button>
  );
};
