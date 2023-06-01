import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ResetPassword = () => {
    const [password,setPassword] = useState('')
  return (
    <Container padding={'16'} height='87vh'>
        <form>
            <Heading children='Reset password' textTransform={'uppercase'} my='4' textAlign={['center','left']} />
            <VStack spacing={'8'}>
            <Input required id='email' value={password} onChange={e=>setPassword(e.target.value)} placeholder='abc123@!#$' type={'password'} focusBorderColor='yellow.500' />
            <Button type='submit' width={'full'} colorScheme={'yellow'}>Reset Password</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ResetPassword