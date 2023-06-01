import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Job = () => {

    const [form,setForm] = useState({}); 

    const handleData = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/postjob",{
            method : "POST",
            body : JSON.stringify(form),
            headers : {
                'Content-type' : 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }

    const jobAdded = () => {
        alert("YOUR JOB HAS BEEN POSTED, CAN CHECK ON BROWSE ALL JOBS")
    }

  return (
    <Container minHeight={"95vh"} maxWidth="container.lg" paddingY={"8"}>
        <VStack paddingY={'16'} h="full" justifyContent={'center'}>
            <Heading children='Post New Job' />
            <form onSubmit={handleSubmit} style={{width :"100%"}}>
                <Box my={'4'}>
                    <FormLabel htmlFor='name' children="Name" />
                    <Input required id='name' name='name' onChange={handleData} placeholder='John Wick' type={'text'} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='email' children="Email Address" />
                    <Input required id='email' name='email' onChange={handleData} placeholder='abc123@gmail.com' type={'email'} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='contact' children="Contact Number" />
                    <Input required id='contact' name='contact' onChange={handleData} placeholder='+91-xx' type={'number'} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='address' children="Work Address" />
                    <Input required id='address' name='address' onChange={handleData} placeholder='Address of workplace' type={'text'} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='postion' children="Position in company/organisation" />
                    <Input required id='position' name='position' onChange={handleData} placeholder='Position in Work' type={'text'} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='time' children="Starting Time" />
                    <Input required id='time' name='starttime' onChange={handleData} placeholder='Starting Time of Work (EX: 15:30 PM) ' type={"text"} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='workhour' children="Working-Time" />
                    <Input required id='workhour' name='workhour' onChange={handleData} placeholder='Working Hours' type={"number"} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='date' children="Date" />
                    <Input required id='date' name='date' onChange={handleData} placeholder='Date Of Work' type={"date"} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='description' children="Job Description" />
                    <Textarea required id='description' name='description' onChange={handleData} placeholder='Job Description' focusBorderColor='yellow.500' />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor='salary' children="Salary Amount" />
                    <Input required id='salary' name='salary' onChange={handleData} placeholder='Salary Amount' focusBorderColor='yellow.500' />
                </Box>
                <Input my={'4'} colorScheme={'yellow'} type='submit' placeholder='Post Job' onClick={jobAdded} />
                <Box my={'4'}>
                    See Available Jobs! <Link to='/getjobs'><Button colorScheme={'yellow'} variant='link' >Click</Button> here</Link>
                </Box>
            </form>
        </VStack>  
    </Container>
  )
}

export default Job
