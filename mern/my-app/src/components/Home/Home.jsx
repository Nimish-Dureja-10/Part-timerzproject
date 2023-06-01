import React from 'react'
import "./home.css"
import {Box, Button, Heading, HStack, Image, Stack, Text, VStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import vg from "../../assets/images/bg.png"
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera,SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"

const Home = () => {
  return (
    <section className='home'>
        <div className='container'>
            <Stack 
            direction={["column","row"]}
            height="100%"
            justifyContent={["center","space-between"]}
            alignItems="center"
            spacing={["16","56"]}
            >
                <VStack width={"full"} alignItems={["center","flex-end"]} spacing="8">
                <Heading textAlign={["center","left"]} children="Find Your Perfect Part-Time Job Today"  />
                    <Text fontSize={"2xl"} fontFamily="cursive" textAlign={["center","left"]} children="Get Hired for Fun and Exciting Part-Time Jobs Near You" />
                    <Link to="/getjobs">
                        <Button size={"lg"} colorScheme="yellow">Explore Now</Button>
                    </Link>
                </VStack>
                <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain" />
            </Stack>
        </div>
        <Box padding={"8"} bg="blackAlpha.800">
            <Heading
            textAlign={"center"}
            fontFamily="body"
            color={"yellow.400"}
            children="OUR BRANDS"
            />
            <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop="4">
            <CgGoogle />
            <CgYoutube />
            <SiCoursera />
            <SiUdemy />
            <DiAws />
            </HStack>
        </Box>
        
    </section>
  )
}

export default Home
