import React from 'react'
import {Box,Center,Input,Text,Flex} from "@chakra-ui/react"
import "./Login.css"

const Login_signup = () => {
  return (
    <Box>
       <Text mt={20} mb={30} ml={280} fontSize={22} fontWeight={700} color={'#444444'}>Hi, welcome back!</Text>
       <Flex justifyContent={'space-between'} w={'62%'} m={'auto'}>
           <Input boxShadow={' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'} border={'none'} pl={10} h={55} w={455}fontSize={15} outline={'none'}  placeholder='Email'></Input>
           <br></br>
           <span  >Required field</span>
           <Input boxShadow={'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'} border={'none'} pl={10} h={55} w={455} fontSize={15} outline={'none'} placeholder='Password'></Input>
           <br></br>
           <span>Required field</span>
       </Flex>
    </Box>
  )
}

export default Login_signup