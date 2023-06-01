import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [course,setCourse] = useState("")

  return (
    <Container h={'92vh'}>
        <VStack paddingY={'16'} h="full" justifyContent={'center'}>
            <Heading children='Request New Job' />
            <form style={{width :"100%"}}>
                <Box my={'4'}>
                    <FormLabel htmlFor='name' children="Name" />
                    <Input required id='name' value={name} onChange={e=>setName(e.target.value)} placeholder='John Wick' type={'text'} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='email' children="Email Address" />
                    <Input required id='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='abc123@gmail.com' type={'email'} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='course' children="Job Description" />
                    <Textarea required id='course' value={course} onChange={e=>setCourse(e.target.value)} placeholder='Explain Job Requirement...' focusBorderColor='yellow.500' />
                </Box>
                <Button my={'4'} colorScheme={'yellow'} type='submit'>Send Mail</Button>
                <Box my={'4'}>
                    See Available Jobs! <Link to='/getjobs'><Button colorScheme={'yellow'} variant='link' >Click</Button> here</Link>
                </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Request
