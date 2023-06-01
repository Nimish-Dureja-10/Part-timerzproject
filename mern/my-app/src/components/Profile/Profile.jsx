import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileUploadCss } from '../Auth/Register'
import vg from "../../assets/images/profile1.jpg"


const Profile = ({user}) => {

    const removeFromPlaylistHandler = (id) => {
        alert(`Course Deleted with Id ${id}`)
    }

    const changeImageSubmitHandler = (e,image) => {
        e.preventDefault()
        console.log(image)
    }

    const {isOpen,onClose,onOpen} = useDisclosure()

  return (
    <Container minH={'95vh'} maxW='container.lg' py={'8'} >
        <Heading children='profile' m='8' textTransform={'uppercase'} />
        <Stack justifyContent={'flex-start'} direction={['column','row']} alignItems='center' spacing={['8','16']} padding='8' > 
            <VStack>
                <Avatar src={vg} boxSize={'48'} />
                <Button onClick={onOpen} variant={'ghost'} colorScheme='yellow' >Change Photo</Button> 
            </VStack>
            <VStack spacing={'4'} alignItems={['center','flex-start']}>
                <HStack>
                    <Text children="Name" fontWeight={'bold'} />
                    <Text children={user.name} />
                </HStack>
                <HStack>
                    <Text children="Email" fontWeight={'bold'} />
                    <Text children={user.email} />
                </HStack>
                <HStack>
                    <Text children="Created At" fontWeight={'bold'} />
                    <Text children={user.createdAt.split('T')[0]} />
                </HStack>
                {/* {user !== 'admin' && (<HStack>
                    <Text fontWeight={'bold'} children='Subscription' />
                    {user.subscription && user.subscription.status === "active" ? (<Button color={'yellow.500'} variant='unstyled' >Cancel Subscription</Button>) : (<Link to='/subscribe'><Button colorScheme={'yellow'} >Subscribe</Button></Link>) }
                </HStack>) } */}
                <Stack direction={['column','row']} alignItems='center' >
                    <Link to='/updateProfile'>
                        <Button>
                            Update Profile
                        </Button>
                    </Link>
                    <Link to='/changepassword'>
                        <Button>
                            Change Password
                        </Button>
                    </Link>
                </Stack>
            </VStack>
        </Stack>
        <Heading children='Joblist' size={'md'} my='8' /> 
        {
            user.playlist.length > 0 && (<Stack direction={['column','row']} alignItems='center' flexWrap={'wrap'} p='4'>
                {
                    user.playlist.map((element)=>(
                        <VStack w={'48'} m='2' key={element.course} >
                            <Image boxSize={'full'} objectFit='contain' src={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221222184908/web-development1.png"} />
                            <HStack>
                                <Link to={`/getjobs/6447da4e36e98ada527665b2`}>
                                    <Button variant={'ghost'} colorScheme='yellow' >See Details</Button>
                                </Link>
                                <Button onClick={()=>removeFromPlaylistHandler(element.course)}> <RiDeleteBin7Fill /> </Button>
                            </HStack>
                        </VStack>
                    ))
                }
            </Stack>)
        }
        <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}  />
    </Container>
  )
}

export default Profile

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){
    const [image,setImage]= useState("")
    const [imagePrev,setImagePrev] = useState("")
    const changeImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const closeHandler = () => {
        onClose()
        setImagePrev('')
        setImage('')
    }

    return (
        <Modal isOpen={isOpen} onClose={closeHandler} >
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
            <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton  />
                <ModalBody>
                    <Container>
                        <form onSubmit={(e)=>changeImageSubmitHandler(e,image)} >
                            <VStack spacing={'8'} >
                                {
                                    imagePrev && <Avatar src={imagePrev} boxSize={'48'} />
                                }
                                <Input onChange={changeImage} type={'file'} css={{'&::file-selector-button':fileUploadCss}}  />
                                <Button w='full' colorScheme={'yellow'} type='submit' >Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'3'} onClick={closeHandler} >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}