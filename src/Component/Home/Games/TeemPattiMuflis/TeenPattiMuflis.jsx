import {
  AspectRatio,
  Box,
  Button,
  ChakraProvider,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "../Andar&Bahar/AndarBahar.css"
import { io } from "socket.io-client";

const socket = io("https://muflisteenpattibackend.onrender.com", {
  query: {
    userId: Math.floor(Math.random() * Date.now()),
  },
  transports: ["websocket"],
});

export default function TeenPattiMuflis() {
  const [timer, setTimer] = useState("");
  const [coins, setCoins] = useState("");
  const [user, setUser] = useState("");
  const [mainCard, setMainCard] = useState([]);
  const [selectedCoins, setSelectedCoins] = useState(null);
  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    const handelTimer = (data) => {
      setTimer(data.gamestate);
      // console.log("Timer", data.gamestate);
    };
    const handelUserDetails = (data) => {
      setUser(data.user);
      // console.log("UserDetails", data);
    };

    const handelCards = (data) => {
      setMainCard(data.gameCard);

      setPlayer1Cards(data.gameCard.player1Cards);
      setPlayer2Cards(data.gameCard.player2Cards);
      console.log("Cards", data);
    };

    socket.on("gameUpdate", handelTimer);
    socket.on("userDetails", handelUserDetails);
    socket.on("Main_Card", handelCards);
    return () => {
      socket.off("gameState", handelTimer);
      socket.off("userDetails", handelUserDetails);
      socket.off("Main_Card", handelCards);
    };
  }, []);
  useEffect(() => {}, []);

  const handelBet = (baitType) => {
    if (timer?.value <= 21) {
      setButtonClick(true);
    }

    if (user?.coins < 0) {
      alert("Insufficient Fund");
      return;
    }
    const bait = {
      baitType,
      coins,
      cardId: mainCard._id,
    };
    socket.emit("bait", bait);
    console.log("bait", bait);
    // console.log("baitType", bait.baitType);
    // console.log("coins", bait.coins);
  };

  return (
    <>
      <ChakraProvider>
        <Box width="100%" id="first">
          <Flex justify="space-between" align="center" mb="2">
            <Text
              fontSize="24px"
              fontWeight="bold"
              borderRadius="10px"
              position="relative"
            >
              Muflis TeenPatti
            </Text>
            {/* <Text>{selectBet}</Text> */}
            <Button variant="outline" colorScheme="blue" ml="2">
              Rules
            </Button>
          </Flex>
          <AspectRatio minHeight="50%" borderRadius="10px" controls>
            <Box
              border="4px solid #333"
              backgroundImage="url('/MuflisTeenPatti/MuflisTeenPatti.webp')"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="top"
              backgroundSize="cover"
              backgroundPosition={`center 100%`}
              backgroundRepeat="no-repeat"
              position="relative"
            >
              <Text
                border="5px solid white"
                padding="20px"
                borderRadius="50%"
                position="absolute"
                top="5"
                right="10"
                color="white"
                fontWeight="bold"
                id="round2"
              >
                {timer?.value - 25 < 0 ? "0" : timer?.value - 25}
              </Text>
              {timer?.value - 25 <= -20 && (
                <Text
                  border="5px solid white"
                  padding="24px"
                  borderRadius="50%"
                  position="absolute"
                  top="0"
                  left="0"
                  color="white"
                  fontWeight="bold"
                  id="round1"
                >
                  <span>Winner:{mainCard?.winstatus}</span>
                </Text>
              )}

              <Box
                // border="2px solid yellow"
                width="100%"
                height="50%"
                display="flex"
                flexDirection="row"
                justifyContent="center"
                position="absolute"
                bottom="0"
                alignItems="center"
              >
                {timer?.value - 25 <= -10 && (
                  <Box
                    // border="2px solid black"
                    position="absolute"
                    width="21.5%"
                    height="21%"
                    display="flex"
                    left="23.7%"
                    top="35%"
                    justifyContent="space-between"
                  >
                    {player1Cards.map((image, index) => (
                      <Image key={index} src={`/cards/${image}`} alt="123" />
                    ))}
                  </Box>
                )}
                {timer?.value - 25 <= -15 && (
                  <Box
                    // border="2px solid black"
                    position="absolute"
                    width="21.5%"
                    height="21%"
                    display="flex"
                    right="24%"
                    top="35%"
                    justifyContent="space-between"
                  >
                    {player2Cards.map((image, index) => (
                      <Image key={index} src={`/cards/${image}`} alt="123" />
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </AspectRatio>
        </Box>
        {/* Player History */}
        <Text fontWeight="bold">Last Wins :</Text>
        <Box
          width="65%"
          // height="15%"
          // border="2px solid darkgreen"
          display="flex"
          position="relative"
          justifyContent="space-between"
        >
          {[...Array(10)].map((_, index) => (
            <Text
              border="1px solid black"
              backgroundColor="grey"
              key={index}
              fontSize="20px"
              color={index % 2 === 0 ? "black" : "#553325"}
              width="5%"
              height="40%"
              align="center"
              fontWeight="bold"
            >
              <Text
                fontSize="18px"
                color={index % 2 === 0 ? "#black" : "#553325"}
              >
                {index % 2 === 0 ? "B" : "A"}
              </Text>
            </Text>
          ))}

          <Text>Match Id: {mainCard?.gameid}</Text>

          <Button width="20%" colorScheme="blue">
            Player History
          </Button>
        </Box>
        {/* Betting Area */}

        <Box
          width="50%"
          position="absolute"
          // border="4px solid #333"
          height="45%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          backgroundColor="#2c2721"
          marginTop="1%"
        >
          <Text color="white" textAlign="left">
            Place Your Bet!
          </Text>
          <Box
            border="2px solid white"
            width="40%"
            height="60%"
            display="flex"
            borderRadius="5rem"
            backgroundColor="transparent"
            alignItems="center"
          >
            {[
              { value: 10, imageName: "10's coin.webp" },
              { value: 50, imageName: "50's coin.webp" },
              { value: 100, imageName: "100's coin.webp" },
              { value: 500, imageName: "500's coin.webp" },
              { value: 1000, imageName: "1000's coin.webp" },
              { value: 5000, imageName: "5000's coin.webp" },
            ].map(({ value, imageName }, index) => (
              <Button
                // border="2px solid grey"
                key={index}
                variant="unstyled"
                width="80%"
                height="80%"
                _hover={{
                  width: selectedCoins === index ? "110%" : "80%",
                  height: selectedCoins === index ? "110%" : "80%",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setCoins(value);
                  // console.log("coins", value);
                  setSelectedCoins(index);
                }}
              >
                <img
                  src={`/Coins/${imageName}`}
                  alt={`Image for ${imageName}`}
                  style={{ width: "90%", height: "90%" }}
                />
              </Button>
            ))}
          </Box>
          <Box
            width="80%"
            height="100%"
            border="2px solid #333"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="black"
            borderRadius="1rem"
          >
            <Button
              width="45%"
              height="80%"
              // variant="unstyled"
              backgroundColor="#640e18"
              borderRadius="1rem"
              alignItems="center"
              flexDirection="row"
              display="flex"
              justifyContent="space-around"
              onClick={() => handelBet("Player1")}
              isDisabled={timer?.value - 25 <= 0 && buttonClick}
              _hover={{
                backgroundColor: "#e77526",
                "&:hover": {
                  "> :first-child": {
                    color: "black",
                    fontWeight: "bold",
                  },
                  "> :last-child": {
                    color: "black",
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <Text textColor="white">Player A</Text>
              <Text textColor="white">1.98</Text>
            </Button>

            <Button
              width="45%"
              height="80%"
              // variant="unstyled"
              backgroundColor="#1c3e6b"
              borderRadius="1rem"
              display="flex"
              justifyContent="space-around"
              flexDirection="row"
              onClick={() => handelBet("Player2")}
              isDisabled={timer?.value - 25 <= 0 && buttonClick}
              _hover={{
                backgroundColor: "#f3cb07",
                "&:hover": {
                  "> :first-child": {
                    color: "black",
                    fontWeight: "bold",
                  },
                  "> :last-child": {
                    color: "black",
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <Text textColor="white">Player B</Text>
              <Text textColor="white">1.98</Text>
            </Button>
          </Box>
          <Text color="white">Pair Plus</Text>
          <Box
            width="90%"
            height="80%"
            border="2px solid #333"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="black"
            borderRadius="1rem"
          >
            <Button
              width="45%"
              height="80%"
              // variant="unstyled"
              backgroundColor="#640e18"
              borderRadius="1rem"
              alignItems="center"
              flexDirection="row"
              display="flex"
              justifyContent="space-around"
              onClick={() => handelBet("PairPlus1")}
              isDisabled={timer?.value - 25 <= 0 && buttonClick}
              _hover={{
                backgroundColor: "#e77526",
                "&:hover": {
                  "> :first-child": {
                    color: "black",
                    fontWeight: "bold",
                  },
                  "> :last-child": {
                    color: "black",
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <Text textColor="white">Player A</Text>
              <Text textColor="white">3</Text>
            </Button>

            <Button
              width="45%"
              height="80%"
              // variant="unstyled"
              backgroundColor="#1c3e6b"
              borderRadius="1rem"
              display="flex"
              justifyContent="space-around"
              flexDirection="row"
              onClick={() => handelBet("PairPlus2")}
              isDisabled={timer?.value - 25 <= 0 && buttonClick}
              _hover={{
                backgroundColor: "#f3cb07",
                "&:hover": {
                  "> :first-child": {
                    color: "black",
                    fontWeight: "bold",
                  },
                  "> :last-child": {
                    color: "black",
                    fontWeight: "bold",
                  },
                },
              }}
            >
              <Text textColor="white">Player B</Text>
              <Text textColor="white">3</Text>
            </Button>
          </Box>
        </Box>
        {/* side part */}
        <Box
          // border="5px dotted blue"
          width="28%"
          height="100%"
          position="absolute"
          right="0"
          top="33%"
          display="flex"
          justifyContent="space-around"
          flexDirection="column"
        >
          <Box
            border="2px solid #333"
            width="100%"
            justifyContent="center"
            align="center"
            borderRadius="1rem"
          >
            <Box backgroundColor="#ee9d1e" padding="0.5rem" borderRadius="1rem">
              <Text fontSize="18px" fontWeight="bold" color="white">
                Available Credit
              </Text>
              <Text
                fontSize="18px"
                margin="0 0 0.5rem"
                fontWeight="bold"
                color="white"
              >
                ${user?.coins}
              </Text>
            </Box>

            <Box backgroundColor="#e0e0e0" padding="0.5rem" borderRadius="1rem">
              <Text fontSize="18px" fontWeight="bold">
                Player ID
              </Text>
              <Text fontSize="18px" margin="0 0 0.5rem" fontWeight="bold">
                {user?.userId}
              </Text>
            </Box>
          </Box>

          <Box border="2px solid black" borderRadius="1rem">
            <Table variant="simple" width="100%">
              <Thead>
                <Tr>
                  <Th>High Cards Market Payouts</Th>
                </Tr>
                <Tr>
                  <Th>Hands</Th>
                  <Th>Payout</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Add your table rows here */}
                <Tr>
                  <Td>With Highest Card Of 9</Td>
                  <Td>1 to 2</Td>
                </Tr>
                <Tr>
                  <Td>With Highest Card Of 8</Td>
                  <Td>1 to 3</Td>
                </Tr>
                <Tr>
                  <Td>With Highest Card Of 7</Td>
                  <Td>1 to 4</Td>
                </Tr>
                <Tr>
                  <Td>With Highest Card Of 6</Td>
                  <Td>1 to 7</Td>
                </Tr>
                <Tr>
                  <Td>With Highest Card Of 5</Td>
                  <Td>1 to 29</Td>
                </Tr>
                {/* Add more rows as needed */}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
