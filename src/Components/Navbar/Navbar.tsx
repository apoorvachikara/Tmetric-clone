import { Box, Flex, Container, useMediaQuery } from "@chakra-ui/react";
import BrandLogo from "./BrandLogo";
import LanguageButton from "./LanguageButton";
import LoginSignupButtons from "./LoginSignupButtons";
import MenuLinks from "./MenuLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [maxWidthLargeScreen] = useMediaQuery("(min-width: 900px)");

  return (
    <>
      {maxWidthLargeScreen ? (
        <Container padding="0.6rem 0" maxW="8xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex alignItems="center" gap="1rem">
              <BrandLogo />
              <LanguageButton />
            </Flex>
            <Box>
              <MenuLinks />
            </Box>
            <LoginSignupButtons />
          </Flex>
        </Container>
      ) : (
        <MobileMenu />
      )}
    </>
  );
};

export default Navbar;
