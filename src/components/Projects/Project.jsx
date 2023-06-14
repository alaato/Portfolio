import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, Text, Image, Heading, SimpleGrid} from '@chakra-ui/react'
import { motion } from "framer-motion"

const Project = ({title, image, text, tech, live, github}) => {
  return (
    <motion.div whileHover={{transform:'translateY(-20px)', zIndex:2, gap:20}}>
        <SimpleGrid minChildWidth height='700px' >
        <Card justify='center'  border='1px' borderColor='gray.200' boxShadow='md' rounded='md' mt='5' maxW='md' minH='md' maxH='xl'>
                <CardHeader>
                    <h2>{title}</h2>
                    
                </CardHeader>
                <CardBody>
                <Image
                    objectFit='cover'
                    src={image}
                    alt='Not available'
                    />
                    <h3>Technologies used : <span>{tech}</span></h3>
                    <Text py='2'>
                        {text}
                    </Text>
                    </CardBody>
                    <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{'& > button': {minW: '136px',},}}>
                        <Button   flex='1' variant='ghost' >
                            <a target='_blank' href={live}> Live</a>
                        </Button>
                        <Button  flex='1' variant='ghost' >
                            <a target='_blank' href={github}>Repo</a>
                        </Button>
                    </CardFooter>
                </Card>
        </SimpleGrid>
       
    </motion.div>
    
  )
}

export default Project