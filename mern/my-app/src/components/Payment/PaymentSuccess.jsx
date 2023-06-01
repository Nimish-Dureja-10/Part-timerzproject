import React from 'react'
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import {RiCheckboxCircleFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container h={'90vh'} p='16' >
      <Heading my={'8'} textAlign='center' children="You have Pro Pack" />
      <VStack boxShadow={'lg'} pb='16' alignItems={'center'} css={{borderRadius:'lg'}} >
        <Box w='full' bg={'yellow.400'} p='4' css={{borderRadius: "8px 8px 0 0"}} >
          <Text children='Payment Success' color='black' />
        </Box>
        <Box p={'4'}  >
          <VStack textAlign={'center'} mt='4' px='8' spacing={'8'} >
            <Text>You are a Pro Member. You have access to Premium Content</Text>
            <Heading size={'4xl'} >
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to='/profile'>
          <Button variant={'ghost'}>Go to Profile</Button>
        </Link>
        <Heading size={'xs'} >Reference: adshdkdgud,dsdgdu</Heading>
      </VStack>
    </Container>
  )
}

export default PaymentSuccess
