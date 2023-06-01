import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../assets/videos/intro.mp4"

const CoursePage = () => {
    window.addEventListener('contextmenu',e=>{
        e.preventDefault()
    })
    const [lectureNumber,setLectureNumber] = useState(0)
    const lectures = [{
        _id : "sdsdsudjd",
        title : "sample",
        desription : "dihdfohqbccschsskcbhsc",
        video : {
            url : "saddhd"
        }
    },{
        _id : "sdsdsudjd2",
        title : "sample2",
        desription : "dihdfohqbccschsskcbhsc2",
        video : {
            url : "saddhd"
        }
    },{
        _id : "sdsdsudjd3",
        title : "sample3",
        desription : "dihdfohqbccschsskcbhsc3",
        video : {
            url : "saddhd"
        }
    },
]
  return (
  <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']} >
    <Box>
        <video width={'100%'}
            autoPlay
            muted
            controls controlsList='nodownload noremoteplayback'
            disablePictureInPicture
            disableRemotePlayback
            src={introVideo}
            >
        </video>
        <Heading children={`#${lectureNumber+1} ${lectures[lectureNumber].title} `} m={'4'} />
        <Heading children="Description" m={'4'} />
        <Text m={'4'} children={`${lectures[lectureNumber].desription}`} />
    </Box>
    <VStack>
        {
            lectures.map((element,index)=>(
                <button onClick={()=>setLectureNumber(index)} key={element._id} style={{width:"100%",padding:"1rem",textAlign:"center",margin:"0",borderBottom:"1px solid rgba(0,0,0,0.2)"}}>
                    <Text noOfLines={'1'}>
                        #{index+1} {element.title}
                    </Text>
                </button>
            ))
        }
    </VStack>
  </Grid>
  )
}

export default CoursePage
