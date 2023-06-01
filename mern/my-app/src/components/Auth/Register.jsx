// import { Avatar ,Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { register } from '../../redux/actions/user'

// export const fileUploadCss = {
//     cursor :"pointer",
//     marginLeft : "-5%",
//     width : "110%",
//     border : "none",
//     height : "100%",
//     color : "#ECC94B",
//     backgroundColor : "white"
// }

// const fileUploadStyle = {
//     "&::file-selector-button" : fileUploadCss
// }

// const Register = () => {

//     const [name,setName] = useState("")
//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState('')
//     // const [imagePrev,setImagePrev] = useState('')
//     // const [image,setImage] = useState('')

//     const dispatch = useDispatch();

//     // const changeImageHandler = (e) => {
//     //     const file = e.target.files[0]
//     //     const reader = new FileReader()

//     //     reader.readAsDataURL(file)
//     //     reader.onloadend = () => {
//     //         setImagePrev(reader.result)
//     //         setImage(file)
//     //     }
//     // }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const myForm = new FormData();
//         myForm.append("name",name);
//         myForm.append("email",email);
//         myForm.append("password",password);
//         // myForm.append("file",image);
//         dispatch(register(myForm));
//     }
 
//   return (
//     <Container h={'95vh'}>
//         <VStack h={'full'} justifyContent='center' spacing={'16'}>
//             <Heading textTransform={'uppercase'} children={'Register Yourself'}/>
//             <form onSubmit={submitHandler} style={{width :"100%"}}>
//                 {/* <Box display={"flex"} justifyContent='center'>
//                     <Avatar src={imagePrev} size={'2xl'} />
//                 </Box> */}
//                 <Box >
//                     <FormLabel htmlFor='name' children="Name" />
//                     <Input id='name' value={name} onChange={e=>setName(e.target.value)} placeholder='NimishDureja' type={'text'} focusBorderColor='yellow.500' />
//                 </Box>
//                 <Box my={'2'}>
//                     <FormLabel htmlFor='email' children="Email Address" />
//                     <Input id='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='abc123@gmail.com' type={'email'} focusBorderColor='yellow.500' />
//                 </Box>
//                 <Box>
//                     <FormLabel htmlFor='password' children="Password" />
//                     <Input id='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='2ed@2%^3' type={'password'} focusBorderColor='yellow.500' />
//                 </Box>
//                 {/* <Box my={'2'}>
//                     <FormLabel htmlFor='chooseAvtaar' children="Choose Avtaar" />
//                     <Input accept='image/*' id='chooseAvtaar' type={'file'} focusBorderColor='yellow.500' css={fileUploadStyle} onChange={changeImageHandler} />
//                 </Box> */}
//                 <Button my={'4'} colorScheme={'yellow'} type='submit'>Sign Up</Button>
//                 <Box >
//                     Already Registered? <Link to='/login'><Button colorScheme={'yellow'} variant='link' >Login</Button> here</Link>
//                 </Box>
//             </form>
//         </VStack>
//     </Container>
//   )
// }

// export default Register

import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const fileUploadCss = {
    cursor :"pointer",
    marginLeft : "-5%",
    width : "110%",
    border : "none",
    height : "100%",
    color : "#ECC94B",
    backgroundColor : "white"
}

const fileUploadStyle = {
    "&::file-selector-button" : fileUploadCss
}

const Register = () => {

    const [form,setForm] = useState({});
    const [image,setImage] = useState('');
    const [imagePrev,setImagePrev] = useState('');

    const handlerData = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        const response = await fetch("http://localhost:8080/register",{
            method : "POST",
            body : JSON.stringify(form),
            headers : {
                'Content-type' : 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }

    const changeImageHandler = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const registered = () => {
        alert('You have been Registered! Now you can login')
    }


  return (
    <Container h={'95vh'}>
        <VStack h={'full'} justifyContent='center' spacing={'16'}>
            <Heading textTransform={'uppercase'} children={'Register Yourself'}/>
            <form style={{width :"100%"}} onSubmit={handleSubmit}>
                <Box display={"flex"} justifyContent='center'>
                    <Avatar src={imagePrev} size={'2xl'} />
                </Box>
                <Box >
                    <FormLabel htmlFor='name' children="Name" />
                    <Input required id='name' name='name' onChange={handlerData} placeholder='NimishDureja' type={'text'} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'2'}>
                    <FormLabel htmlFor='email' children="Email Address" />
                    <Input required id='email' name='email' onChange={handlerData} placeholder='abc123@gmail.com' type={'email'} focusBorderColor='yellow.500' />
                </Box>
                <Box>
                    <FormLabel htmlFor='password' children="Password" />
                    <Input required id='password' name='password' type={'password'} onChange={handlerData} focusBorderColor='yellow.500' />
                </Box>
                <Box my={'2'}>
                    <FormLabel htmlFor='chooseAvtaar' children="Choose Avtaar" />
                    <Input accept='image/*' required id='chooseAvtaar' name='avatar' type={'file'} focusBorderColor='yellow.500' css={fileUploadStyle} onChange={changeImageHandler} />
                </Box>
                <Link to='/login'>
                    <Button onClick={registered} my={'4'} colorScheme={'yellow'} type='submit'>Sign Up</Button>
                </Link>
                <Box >
                    Already Registered? <Link to='/login'><Button colorScheme={'yellow'} variant='link' >Login</Button> here</Link>
                </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Register
