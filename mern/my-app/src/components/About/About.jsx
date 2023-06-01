import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import profile from '../../assets/images/profile1.jpg'
import introVideo from "../../assets/videos/intro.mp4"
import terms from '../../assets/docs/termsAndConditions'

const Founder = () => (
    <Stack direction={['column','row']} spacing={['4','16']} padding="8">
        <VStack>
            <Avatar src={profile} boxSize={['40','48']} />
            <Text children="Co-Founder" opacity={'0.7'} />
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center','flex-start']} >
            <Heading children="Nimish Dureja" size={['md','xl']} />
            <Text textAlign={['center','left']} children={`I am a Full-Stack developer.
            My aim is to provide quality content at reasonable price.`} />
        </VStack>
    </Stack>
)

const VideoPlayer = () => (
    <Box>
        <video 
            autoPlay
            muted
            controls controlsList='nodownload nofullscreen noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            >
            </video>
    </Box>
)

const TandC = ({termsAndConditions}) => (
    <Box>
        <Heading children='Terms and Conditions' size={'md'} my={'4'} textAlign={['center','left']} />
        <Box overflowY={'scroll'} h={'sm'} p='4'>
            <Text fontFamily={'heading'} letterSpacing='widest' textAlign={['center','left']} >
                {termsAndConditions}
            </Text>
            <Heading size={'xs'} my='4' children="Refund only applicable for cancellation within 7 days. " />
        </Box>
    </Box>

)

const About = () => {
  return (
    <Container maxWidth={'container.lg'} padding="16" boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center','left']} />
        <Founder />
        <Stack m={'8'} direction={['column','row']} alignItems='center'>
            <Text fontFamily={'cursive'} m='8' textAlign={['center',"left"]} >
                We are a video streaming platform with some premium courses available only
                for premium users.
            </Text>
            <Link to='/subscribe' >
                <Button variant={'ghost'} colorScheme="yellow">
                    Checkout Our Plan
                </Button>
            </Link>
        </Stack>
        <VideoPlayer />
        <TandC termsAndConditions={terms} />
        <HStack my={'4'} p='4'>
            <RiSecurePaymentFill />
            <Heading size={'xs'} fontFamily='sans-serif' textTransform={'uppercase'} children="Payment is secured by Razorpay" />
        </HStack>
    </Container>
  )
}

export default About
