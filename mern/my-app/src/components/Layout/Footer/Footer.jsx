import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialLinkedinCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import { DiGithub } from 'react-icons/di'

const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.900" minH={"10vh"}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width='full'>
                <Heading children='All Rights Reserved' color={'white'} />
                <Heading fontFamily={'body'} size='sm' children='@NimishDureja' color={'yellow.400'} />
            </VStack>
            <HStack spacing={['2','10']} justifyContent='center' color={'white'} fontSize='40'>
                <a href='https://www.linkedin.com/in/nimish-dureja-9b7150221/' target={'_blank'}>
                    <TiSocialLinkedinCircular />
                </a>
                <a href='https://www.instagram.com/nimishdureja' target={'_blank'}>
                    <TiSocialInstagramCircular />
                </a>
                <a href='https://github.com/Nimish-Dureja-10' target={'_blank'}>
                    <DiGithub />
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer