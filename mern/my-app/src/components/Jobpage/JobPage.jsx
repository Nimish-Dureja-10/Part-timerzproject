import { Box, Button, FormLabel, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { selectedId } from '../Job/GetJob';

const JobPage = () => {
    const [jobs,setJobs] = useState([]);
  
    const getJobs = async () => {
        const response = await fetch(`http://localhost:8080/getjobs/${selectedId}`,{
            method : "GET"
        });
        const data = await response.json();
        setJobs(data);
        console.log(data);
    };

    useEffect(()=>{
        getJobs()
    },[])

    // const submitHandler = () => {
    //     alert('hello world')
    // }

    const applyJob = () => {
        alert('Your Response has been send to job poster. You will be notified if selected.')
    }

    const submitHandler = (e) => {
      e.preventDefault();
      window.location.href = "/getjobs"
    }


  return (
       <section className='jobDisplay'>
        <div className='jobDescription'>
        <Stack  direction={["column","row"]} flexWrap="wrap" justifyContent={["flex-start","space-evenly"]} alignItems={["center","flex-start"]} my='32' >
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png"} />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
          >
            <Heading size={'sm'} children = {`Job Posted By : ${jobs.name}`} /> 
          </Box>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='relax'
          noOfLines={1}
        >
          <Text children = {`Work Position : ${jobs.position}`} />
        </Box>

        <Box>
          {jobs.description}
        </Box>

        <Box mt='2' alignItems='center'>
          <Text children={`Work Hours : ${jobs.workhour}`} />
          <Text children={`Start Time : ${jobs.starttime}`} />
          <Text children={`Date : ${jobs.date}`} />
          <Text children={`Address : ${jobs.address}`} />
          <Text children={`Cost : Rs.650/hr`} />
        </Box>
      </Box>
    </Box>
        </Stack>
        </div>
        <div className='jobApplyForm'>
            <VStack padding={'16'} h="full" justifyContent={'center'}>
            <Heading children='Fill Your Details To Apply' />
                <form style={{width :"100%"}} onSubmit={submitHandler}>
                    <Box my={'4'}>
                        <FormLabel htmlFor='name' children="Name" />
                        <Input required id='name' name='name' placeholder='John Wick' type={'text'} focusBorderColor='yellow.500' />
                    </Box>
                    <Box my={'4'}>
                        <FormLabel htmlFor='experience' children="Any Prior Experience" />
                        <Input required id='experience' name='experience' placeholder='Yes/No' type={'text'} focusBorderColor='yellow.500' />
                    </Box>
                    {/* <Box my={'4'}>
                        <FormLabel htmlFor='message' children="Message" />
                        <Textarea required id='message' placeholder='Your Message...' focusBorderColor='yellow.500' />
                    </Box> */}
                    <Button my={'4'} onClick={applyJob} colorScheme={'yellow'} type='submit'><a href={`mailto:${jobs.email}`}>Apply Now</a></Button>
                </form>
            </VStack>
        </div>
       </section>
  )
}

export default JobPage
