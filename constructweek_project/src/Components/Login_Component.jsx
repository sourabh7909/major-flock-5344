import React, { useState } from 'react'
import {Box,Center,Input,Text,Flex, Checkbox, Button} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./Login.css"

const Login_Component = () => {
  const [Email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [data,setdata]=useState("")
 let userDetails={
  Email,
  password
 }
   console.log(data)
const handleSignin=()=>{
axios.get("http://localhost:8080/Registration")
.then((res)=>setdata(res.data.userDetails))

if(Email==="patidarsourabh574@gmail.com"){
  alert("Login Succesfull")
  window.location.assign("/")
}else{
  alert("This Email is Not Register")
}
}


  return (
    <Box mb={250}>
       <Text mt={20} mb={30} ml={280} fontSize={22} fontWeight={700} color={'#444444'}>Hi, welcome back!</Text>
       <Flex justifyContent={'space-between'} w={'62%'} m={'auto'}>
        <Box>
           <Input onChange={(e)=>setEmail(e.target.value)} id="login_input" boxShadow={' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'} border={'none'} pl={10} h={55} w={455}fontSize={15} outline={'none'}   placeholder='Email'></Input>
           <br></br>
           <span id="login_span">Required field</span>
           <br></br>
           <Checkbox border={"3px solid gray"} borderRadius={4} w={20} h={20} bg={'#00a9e0'} color={'white'} mr={10}/><label style={{color:"#444"}}>Keep me signed in</label>
        </Box>
        <Box>
           <Input onChange={(e)=>setPassword(e.target.value)} id="login_input" boxShadow={'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'} border={'none'} pl={10} type="password" h={55} w={455} fontSize={15} outline={'none'} placeholder='Password'></Input>
           <br></br>
           <span id="login_span">Required field</span><span id="forget_span">Forgot password?</span>
        </Box>
       </Flex>
      <Center><Button onClick={handleSignin} w={300} h={40} bg={'#00a8e2'} borderColor={'#00a8e2'}border={'none'} borderRadius={3} color={'white'} fontSize={16} fontWeight={700}>Sign In</Button></Center> 
      <Center>
        <Text mt={40} fontStyle={'italic'}>New to our site or enrolled in My Rewarding Moments™ in store?</Text>
      </Center>
    <Center><Button  cursor={'pointer'} mt={20} w={300} h={38} border={'1px solid #444'} bg={'white'} borderRadius={3} color={'#444'} fontSize={16} ><Link style={{textDecoration:"none",color:"#444"}}  to="/signup">Create Account</Link></Button></Center>
    </Box>
  )
}

export default Login_Component ;
