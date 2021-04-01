import React, { useState, useEffect } from 'react'
import {
  IconButton,
  useColorMode,
  Box,
  Flex,
  Spacer,
  VStack,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  Skeleton,
  SimpleGrid,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import Logo from '../Logo'

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      {colorMode === 'light' ? (
        <IconButton
          aria-label="dark mode"
          icon={<MoonIcon />}
          onClick={toggleColorMode}
          variant="link"
        />
      ) : (
        <IconButton
          aria-label="light mode"
          icon={<SunIcon />}
          onClick={toggleColorMode}
          variant="link"
        />
      )}
    </>
  )
}

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const handleScroll = () => {
    const position = window.pageYOffset
    const header = document.getElementById('header-wrap')

    setScrollPosition(position)
    if (position > scrollPosition + 25 || position < 100) {
      header.style.top = '-8em'
      header.style.transition = 'top 666ms'
    }
    if (position < scrollPosition - 25 || position < 75) {
      header.style.top = '0'
    }
  }
  useEffect(() => {
 const header = document.getElementById('header-wrap')
    header.style.top = '0'
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
      <Flex
        id="header-wrap"
        bg={useColorModeValue('white', 'gray.800')}
        align="center"
        justify="flex-end"
        wrap="wrap"
        w="100%"
        h="10%"
      >
        <Box w="5%">
          <IconButton
            aria-label="logo"
            variant="link"
            size="lg"
            icon={<Logo />}
          />
        </Box>
        <Spacer />
        {/* mobile  */}
        <>
          <Button
            ref={btnRef}
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
            as={IconButton}
            aria-label="open or close mobile menu"
            variant="unstyled"
            icon={<HamburgerIcon />}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <VStack align="center">
                    {' '}
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
        {/* tablet and full size */}

        <Container display={{ base: 'none', md: 'block' }} centerContent>
          <SimpleGrid columns={6} spacing={4}>
            <Box height="4vh">menu</Box>
            <Box height="4vh">menu</Box>
            <Box height="4vh">menu</Box>
            <Box height="4vh">menu</Box>
            <Box height="4vh">menu</Box>
            <Box height="4vh">menu</Box>
          </SimpleGrid>
        </Container>
        <Box ml={0} mr={5} w="5%">
          <ThemeToggle />
        </Box>

        <Box w="100%">
          <Skeleton startColor="#ff0080" endColor="#7928CA" height="2px" />
        </Box>
      </Flex>
    </>
  )
}
export default Navbar
