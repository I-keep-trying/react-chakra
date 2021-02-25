import React from 'react'
import { Center, Text, Box, Link, useColorModeValue } from '@chakra-ui/react'
//import { SiFacebook, SiTwitter, SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} id="footer-wrap">
      <Center h="10px" pt="5">
        <Text fontSize="xs">Made by Andrea Crego</Text>
      </Center>
    </Box>
  )
}

export default Footer
