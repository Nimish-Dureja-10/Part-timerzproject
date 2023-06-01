import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email,setEmail] = useState('')
  return (
    <Container padding={'16'} height='87vh'>
        <form>
            <Heading children='Forget password' textTransform={'uppercase'} my='4' textAlign={['center','left']} />
            <VStack spacing={'8'}>
            <Input required id='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='abc123@gmail.com' type={'email'} focusBorderColor='yellow.500' />
            <Button type='submit' width={'full'} colorScheme={'yellow'}>Send Reset Link</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ForgetPassword
