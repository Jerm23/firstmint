import { FC, MouseEventHandler, useCallback } from "react"
import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"

const Disconnected: FC = () => {
    const modalState = useWalletModal()
    const { wallet, connect } = useWallet()
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (event.defaultPrevented) {
        return
      }
      if (!wallet) {
        modalState.setVisible(true)
      } else {
        connect().catch(() => {})
      }
    },
    [wallet, connect, modalState]
  )

  return (
    <Container>
      <VStack spacing={6}>
        <Heading
          color="violet"
          as="h1"
          size="3xl"
          noOfLines={10}
          textAlign="center"
        >
          First website 8=D
        </Heading>
        <Button
          bgColor="violet"
          color="black"
          maxW="380px"
          onClick={handleClick}
        >
          <HStack>
            <Text>Connect Wally</Text>
            <ArrowForwardIcon />
          </HStack>
        </Button>
      </VStack>
    </Container>
  )
}

export default Disconnected