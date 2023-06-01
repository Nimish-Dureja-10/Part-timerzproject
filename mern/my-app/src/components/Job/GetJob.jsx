import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export let selectedId;

export const collectId = (id) => {
    selectedId = id;
    console.log(selectedId);
};

const GetJob = () => {
  const [jobs,setJobs] = useState([]);
  const [keyword,setKeyword] = useState("")
  const [category,setCategory] = useState()
  const getJobs = async () => {
        const response = await fetch("http://localhost:8080/getjobs",{
            method : "GET"
        })
        const data = await response.json();
        setJobs(data);
        console.log(data);
    }

    useEffect(()=>{
        getJobs()
    },[])

    const categories = [
      'Restaurants',
      'Gardener',
      'Plumber',
      'Mechanic',
      'Teacher',
      'Electric Service',
      'Barber'
  ]

  const bookmark = (id) => {
    alert(`Job Bookmarked by ${id}`);
  }

  
  return (
    <Container minHeight={"95vh"} maxWidth="container.lg" paddingY={"8"} >
    <Heading children="All Jobs" m={"8"} />
    <Input value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder="Search Jobs..." type={"text"} focusBorderColor="yellow.500" />
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
    <Stack  direction={["column","row"]} flexWrap="wrap" justifyContent={["flex-start","space-evenly"]} alignItems={["center","flex-start"]}>
    {jobs.map((job) => <VStack className='course' alignItems={["center","flex-start"]}>
            <Image src={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png"} boxSize="60" objectFit={"contain"} />
            <Heading size={'sm'} textAlign={['center','left']} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={job.position} />
            <Heading size={'sm'} textAlign={['center','left']} noOfLines={2} children={`Job Description - ${job.description}`} />
            <Heading size={'sm'} textAlign={['center','left']} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={`Job Posted By - ${job.name}`} />
            <Heading textTransform="uppercase" textAlign={['center','left']} size='xs' children={`Work Duration - ${job.workhour}`} />
            <Heading textTransform="uppercase" textAlign={['center','left']} size='xs' children={`Date - ${job.date}`} />
            <Heading textTransform="uppercase" textAlign={['center','left']} size='xs' children={`Salary - Rs.650/hr`} />
            <Heading textTransform="uppercase" textAlign={['center','left']} size='xs' children={`Start Time - ${job.starttime}`} />
            <Stack direction={['column','row']}>
                <Link to={`/getjobs/${job._id}`} >
                    <Button onClick={()=>collectId(job._id)} colorScheme={"yellow"}>Apply Now</Button>
                </Link>
                <Button variant={"ghost"} colorScheme="yellow" onClick={()=>bookmark(job._id)}>
                    Bookmark
                </Button>
            </Stack>
        </VStack> )}
    </Stack>
</Container>
  )
}

export default GetJob

