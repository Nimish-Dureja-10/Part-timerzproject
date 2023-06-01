import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Button, Container,Heading, HStack, Image, Input, Stack, Text, VStack} from "@chakra-ui/react"

const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount}) => {
    return (
        <VStack className='course' alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading size={'sm'} textAlign={['center','left']} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={title} />
            <Text noOfLines={2} children={description} />
            <HStack>
                <Text fontWeight={"bold"} textTransform="uppercase" children={"Created By"} />
                <Text fontFamily={'body'} textTransform="uppercase" children={creator} />
            </HStack>
            <Heading textTransform="uppercase" textAlign={'center'} size='xs' children={`Lecture - ${lectureCount}`} />
            <Heading textTransform="uppercase" textAlign={'center'} size='xs' children={`Views - ${views}`} />
            <Stack direction={['column','row']}>
                <Link to={`/course/${id}`}>
                    <Button colorScheme={"yellow"}>Watch Now</Button>
                </Link>
                <Button variant={"ghost"} colorScheme="yellow" onClick={()=>addToPlaylistHandler(id)}>
                    Add to Wishlist
                </Button>
            </Stack>
        </VStack>
    )
}
 
const Courses = () => {
    const [keyword,setKeyword] = useState("")
    const [category,setCategory] = useState()
    const addEventListener = () => {
        alert('Added to playlist')
    }
    const categories = [
        'Web Development',
        'Artificial Intelligence',
        'Data Science',
        'Android Development',
        'Data Structures and Algorithm',
        'Game Development',
        'App Development'
    ]
  return (
    <Container minHeight={"95vh"} maxWidth="container.lg" paddingY={"8"} >
        <Heading children="All Courses" m={"8"} />
        <Input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder="Search Course..." type={"text"} focusBorderColor="yellow.500" />
        <HStack overflowX={"auto"} paddingY="8" css={{'&::-webkit-scrollbar':{
            display:'none'
        }}} >
            {
                categories.map((item,index)=>(
                    <Button key={index} onClick={()=>setCategory(item)} minWidth={"60"}>
                        <Text children={item} />
                    </Button>
                ))
            }
        </HStack>
        <Stack direction={["column","row"]} flexWrap="wrap" justifyContent={["flex-start","space-evenly"]} alignItems={["center","flex-start"]}>
            <Course title={"sample"} description={"sample"} views={23} imageSrc={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png"} id={"sample"} creator={"sample boy"} lectureCount={2} addToPlaylistHandler={addEventListener} />
        </Stack>
    </Container>
  )
}

export default Courses
