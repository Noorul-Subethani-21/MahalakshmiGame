import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Flex>
        <Wrap
          spacing=""
          align="center"
          maxW={"100%"}
          direction={{ base: "row", md: "row" }}
          bg="#CCCCCC"
          color="black"
          mt={2}
          ml={0}
          css={{
            "@media screen and (max-width: 766px)": {
              display: "none",
            },
          }}
        >
          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Inpaly
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink to="/home">
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Cricket
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Football
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="107px" h="40px">
                Tennis
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="100px" h="40px">
                Horse Racing
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Greyhound Racing
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="87px" h="40px">
                Binary
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="100px" h="40px">
                Kabaddi
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Politics
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="60px" h="40px">
                Casino
              </Center>
            </WrapItem>
          </NavLink>

          <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="80px" h="40px">
                Int Casino
              </Center>
            </WrapItem>
          </NavLink>

          {/* <NavLink>
            <WrapItem
              paddingRight={2}
              borderRight="1px"
              borderColor="black"
              h="100%"
              _hover={{ textColor: "#CCCCCC", bg: "#092844" }}
            >
              <Center w="75px" h="40px">
                
              </Center>
            </WrapItem>
          </NavLink> */}
        </Wrap>
      </Flex>

      <Flex
        align="center"
        direction="row"
        justify="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        <Text
          fontSize="m"
          fontWeight="700"
          p={2}
          width={{ base: "100%", md: "auto" }}
          display={{ base: "none", md: "block" }}
        >
          Game
        </Text>
        <Flex
          direction="row"
          align="center"
          flexWrap="wrap"
          display={{ base: "none", md: "flex", lg: "flex" }}
        >
          <WrapItem paddingRight={{ base: 34, md: 2 }}>
            <Center w={{ base: "130px", md: "135px" }} h="40px">
              1
            </Center>
          </WrapItem>
          <WrapItem paddingRight={{ base: 34, md: 2 }}>
            <Center w={{ base: "100px", md: "135px" }} h="40px">
              x
            </Center>
          </WrapItem>
          <WrapItem paddingRight={{ base: 34, md: 2 }}>
            <Center w={{ base: "100px", md: "135px" }} h="40px">
              2
            </Center>
          </WrapItem>
        </Flex>
      </Flex>

      <Flex
        align="center"
        direction="row"
        justify="space-between"
        borderTop="1px"
        borderBottom="1px"
        borderColor="#ccc"
        flexWrap="wrap"
        display={{ base: "none", md: "flex", lg: "flex" }}
      >
        <Text
          fontSize="m"
          p={2}
          fontWeight="600"
          width={{ base: "90%", md: "auto" }}
        >
          Bangladesh v New Zealand/Nov 29 2023 09:00 AM (IST)
        </Text>

        <Flex p={4} direction="row" align="center" flexWrap="wrap">
          <WrapItem>
            <Center w={{ base: "70px", md: "70px" }} h="30px" bg="blue.200">
              Box 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w={{ base: "70px", md: "70px" }} h="30px" bg="pink.200">
              Box 2
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w={{ base: "70px", md: "70px" }} h="30px" bg="blue.200">
              Box 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w={{ base: "70px", md: "70px" }} h="30px" bg="pink.200">
              Box 4
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w={{ base: "70px", md: "70px" }} h="30px" bg="blue.200">
              Box 5
            </Center>
          </WrapItem>
          <WrapItem marginRight={{ base: "0", md: "2" }}>
            <Center w={{ base: "60px", md: "70px" }} h="30px" bg="pink.200">
              Box 6
            </Center>
          </WrapItem>
        </Flex>
      </Flex>

      <Box

         width={["26rem" , "100%"]}
      className="Home" paddingLeft="2">
        {/* <Heading as="h1" textAlign={{base: "start", md: "center",lg: "center"}} marginBottom="4">
          Our Casino
        </Heading> */}

        <Grid
          
          templateColumns={{
            base: "repeat(16, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(6, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={3}
          sx={{
            "@media screen and (max-width: 756px)": {
              templateColumns: "repeat(2, 1fr)",
            },
            "@media screen and (max-width: 500px)": {
              templateColumns: "repeat(1, 1fr)",
            },
          }}
        >
          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src="/game card/Andar Bahar.png" alt=" ANDAR BAHAR" />
                <span> ANDAR BAHAR (Virtual)</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/dragontiger">
              <Box className="custom-box">
                <Image 
            
                src="/game card/Dragon  Tiger.png" alt="DRAGON TIGER" />
                <span> DRAGON TIGER</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/dragontigerlion">
              <Box className="custom-box">
                <Image
                  src="/game card/Dragon Tiger Lion.png"
                  alt="DRAGON TIGER LION"
                />
                <span> DRAGON TIGER LION</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/3cardsteenpatti">
              <Box className="custom-box">
                <Image
                src="/game card/Teen Patti T20.png"
                  alt="MULFIS TEENPATTI"
                />
                <span> 3 CARDS TEENPATTI </span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/2cardsteenpatti">
              <Box className="custom-box">
                <Image
                  src="/game card/2 CARD TEEN PATTI.png"
                  alt="2 CARDS TEEN PATTI"
                />
                <span>2 CARDS TEEN PATTI</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/teenpattimuflis">
              <Box  className="custom-box">
                <Image  src="/game card/Teen Patti  Muflis.png" />
                <span>3 PATTI MUFLIS</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/TeenpattiVirtual">
              <Box className="custom-box">
                <Image
                  src="/game card/Teen Patti T20.png"
                  alt="TEENPATTI T20"
                />
                <span> TEENPATTI T20</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/DragonTiger">
              <Box className="custom-box">
                <Image
                  src="/game card/1DdragonTiger.png"
                  alt="1 DAY DRAGON TIGER"
                />
                <span> 1 DAY DRAGON TIGER </span>
              </Box>
            </NavLink>
          </GridItem>

          {/* <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src={sec} alt="teenpatti" />
                <span> ANDAR BAHAR</span>
              </Box>
            </NavLink>
          </GridItem> */}

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src="/game card/Casino war.png" alt="Casino-war" />
                <Text>CASINO WAR</Text>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src="/game card/1 Day Poker.png" alt="1-DAY POKER" />
                <span> 1-DAY POKER</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/andarbahar">
              <Box className="custom-box">
                <Image src="/game card/Worli Matka.png" alt="WORLI MATKA" />
                <span> WORLI MATKA</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/racegame">
              <Box className="custom-box">
                <Image src="/game card/World  Matka VR.png" alt="WORLD MATKA" />
                <span> WORLD MATKA (VIRTUAL)</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/RaceGame">
              <Box className="custom-box">
                <Image src="/game card/Race 20-20.png" alt=" RACE 20-20" />
                <span> RACE 20-20</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <NavLink to="/RaceGame">
              <Box className="custom-box">
                <Image src="/game card/Race 20-20.png" alt="RACE 20-20" />
                <span> RACE 20-20</span>
              </Box>
            </NavLink>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/Casino war.png" alt="CASINO METER" />
              <span> CASINO METER</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/20-20  Poker.png" alt="20-20 POKER" />
              <span> 20-20 POKER</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/Trio.png" alt="TRIO" />
              <span> TRIO</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/Card  Casino.png" alt="CARD CASINO" />
              <span> CARD CASINO</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/Trap.png" alt="Trap" />
              <span> Trap</span>
            </Box>
          </GridItem>

          {/* <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={third} alt="teenpatti" />
              <span> 1 DAY TEENPATTI</span>
            </Box>
          </GridItem> */}

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image
                src="/game card/Bollywood Casino.png"
                alt="BOLLYWOOD CASINO"
              />
              <span> BOLLYWOOD CASINO</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image
                src="/game card/Teenpatti  1 day  virtual.png"
                alt="TEENPATTI ONE-DAY"
              />
              <span> TEENPATTI ONE-DAY (VIRTUAL)</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/Poker Virtual.png" alt=" POKER VIRTUAL" />
              <span> POKER VIRTUAL</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/Hii Low.png" alt=" HII-LOW" />
              <span> HII-LOW</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/BACCARAT.png" alt=" BACCARAT" />
              <span> BACCARAT</span>
            </Box>
          </GridItem>

          {/* <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src={sec} alt="teenpatti" />
              <span> TEENPATTI T20 VIRTUAL</span>
            </Box>
          </GridItem> */}

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/7 Up & Down.png" alt="7 UP AND DOWN" />
              <span> 7 UP AND DOWN</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/SCIBO.png" alt="SCIBO" />
              <span> SCIBO</span>
            </Box>
          </GridItem>

      

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image
                src="/game card/6 Player poker VR.png"
                alt="SIX PLAYER POKER"
              />
              <span> SIX PLAYER POKER (VIRTUAL)</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/Test Teenpatti.png" alt="TEST TEENPATTI" />
              <span> TEST TEENPATTI</span>
            </Box>
          </GridItem>

          <GridItem colSpan={{ base: 4, md: 1 }}>
            <Box className="custom-box">
              <Image src="/game card/Hii Low.png" alt=" HII-LOW " />
              <span> HII-LOW (VIRTUAL)</span>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
