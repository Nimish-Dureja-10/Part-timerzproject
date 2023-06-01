import React from 'react'
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'

const Subscibe = () => {
  return (
    <Container h="90vh" p={'16'} >
        <Heading children="Welcome" m={'8'} textAlign='center' />
        <VStack boxShadow={'lg'} spacing='0' alignItems={'stretch'} borderRadius='lg'>
            <Box bg='yellow.400' p='4' css={{borderRadius : "8px 8px 0 0"}} >
                <Text color={'black'} children={`Pro Pack - Rs.299.00`} />
            </Box>
            <Box p={'4'} >
                <VStack textAlign={'center'} px='8' mt={'4'} spacing='8' >
                    <Text children='Join Pro Pack And Get Access To All Content' />
                    <Heading size='md' children={'Rs.299.00/- Only'} />
                </VStack>
                <Button my='8' width={'full'} colorScheme='yellow'>
                    Buy Now
                </Button>
            </Box>
            <Box bg={'blackAlpha.600'} p='4' css={{borderRadius : "0 0 8px 8px"}}>
                <Heading size={'sm'} color="white" textTransform="uppercase" children={`100% Refund at Cancellation`} />
                <Text fontSize={'xs'} color='white' children={'*Terms and Condition Apply'} />
            </Box>
        </VStack>
    </Container>
  )
}

export default Subscibe
