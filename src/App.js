import React from 'react'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react'
import Logo from './Logo'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box className="page" textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
            <Text textAlign="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              luctus risus neque. In suscipit vel nisi in vehicula. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Ut convallis urna vitae eros convallis
              maximus. In porttitor arcu molestie elit semper interdum. Nulla
              pellentesque lorem sed orci viverra, sit amet blandit sem finibus.
              Nulla felis risus, commodo non lorem in, fringilla commodo nunc.
              Vestibulum lectus mauris, luctus vel lectus ut, venenatis mollis
              lectus. Vestibulum placerat gravida ante scelerisque efficitur.
              Nam condimentum quam sed interdum lobortis. Sed congue velit
              aliquet scelerisque fringilla. Sed vel tellus id dolor rutrum
              interdum a non turpis. Nunc ut ornare tellus, id commodo massa.
              Nulla facilisi. Aenean blandit felis in risus consectetur, a
              egestas nunc pharetra. Proin non varius odio. Sed sit amet orci et
              justo cursus commodo ac quis mauris. Cras a facilisis ligula, sed
              varius nisi. Ut vehicula malesuada eros, eget mollis tortor
              hendrerit eu. Praesent tincidunt odio eu diam mollis, nec eleifend
              velit mollis. Proin id pellentesque quam, ac rhoncus magna.
              Pellentesque maximus dictum libero, ac tincidunt orci volutpat
              sed. Pellentesque feugiat, tortor nec molestie venenatis, velit
              risus imperdiet tortor, eget ultrices nisi erat auctor magna. Ut
              congue, sem id malesuada varius, risus dolor semper sem, quis
              facilisis velit turpis ut nulla. Nulla facilisi. Praesent
              facilisis ut leo sed auctor. Aenean ut varius sapien. In hendrerit
              dolor non purus commodo hendrerit. Morbi facilisis turpis dolor,
              eget volutpat dolor pharetra eu. Etiam dapibus sapien vitae
              feugiat tincidunt. Suspendisse leo sapien, dignissim ut tristique
              nec, tincidunt non tellus. Vestibulum pellentesque laoreet risus,
              venenatis auctor tortor faucibus ultrices. Nullam vulputate urna
              pharetra, tincidunt orci in, accumsan nisi. Aenean vitae pharetra
              velit, sed blandit quam. Aenean magna turpis, viverra at turpis
              sit amet, ultrices cursus sem. Donec laoreet leo et aliquet
              posuere. Curabitur tincidunt elit a risus finibus tempus. Vivamus
              ac pharetra diam, sit amet faucibus eros. Nam neque felis, dictum
              eu nisi eget, congue viverra lacus. Ut finibus et metus vitae
              blandit. Fusce lobortis nisl elit, at lobortis est volutpat ac.
              Sed leo massa, blandit eget odio at, aliquam laoreet urna.
              Phasellus pellentesque vel libero non dignissim. Integer eleifend
              urna eu ipsum imperdiet, sed maximus quam pretium. Suspendisse
              potenti. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Sed aliquam non lectus id
              viverra. Vestibulum feugiat, neque ac tempor laoreet, lectus nulla
              dapibus quam, sed laoreet est massa vitae sapien. Nunc ac nunc
              cursus, mattis dui sit amet, aliquet nulla. Morbi in leo ac tortor
              lacinia eleifend eu at lacus. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Vivamus leo nulla, pulvinar in sem sit amet, blandit semper ex.
              Sed molestie, lacus ac hendrerit fringilla, est velit volutpat
              lectus, sit amet egestas libero tellus in sapien. Ut in auctor
              nulla. Aliquam sodales ac nibh ut aliquet. Morbi convallis eget
              lacus et volutpat. Nunc accumsan sit amet purus in interdum.
              Aenean sit amet luctus nisl, vel facilisis odio. Etiam sed purus
              mi. Nam aliquet tellus nisl. Vestibulum et libero placerat,
              pharetra ipsum porta, eleifend dui.
            </Text>
          </VStack>
        </Grid>
      </Box>
      <Footer />
    </ChakraProvider>
  )
}

export default App
