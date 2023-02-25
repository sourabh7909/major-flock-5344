import React from 'react'
import {Center,Text,Box,Image,Flex,Input,Button, Grid,GridItem} from "@chakra-ui/react"
import "./Home.css"
import img1 from "../Images/skiphope.jpg"
import logo from "../Images/newlogo.jpeg"
import profile from "../Images/user-regular.svg"
import heart from "../Images/heart-regular.svg"
import square from "../Images/cube-solid.svg"
import cart from "../Images/cart-shopping-solid.svg"
import Footer from '../Producctslist/Footer'
import { Link } from 'react-router-dom'
import Login_signup from "./Login_signup"


const Signin = () => {
  return (
  <div>
      <div id="frist">
            <p id="test_one">Carter's</p>
            <p id="test_two">OsHKoSH</p>
            <img id="img_one" src={img1} width="60" height="12"/>
            <p id="test_three">little planet</p>
           <p id="mid_text">Free Shipping on $35+ Orders</p>
           <Flex mr={15}  w={'17%'} justifyContent={'space-between'}>

             <Box  border={'1px solid black'} borderRadius={'100%'} w={25} h={25} mt={2}><Link to="/signin"><Image src={profile} w={'55%'} pl={5} pt={3}></Image></Link></Box><Link id="sign_in" to="/signin"><span id="span1">Sign in</span></Link>
             <Box  borderRadius={'100%'} w={25} h={25} mt={2}><Image src={heart} w={'70%'} pl={5} pt={3}></Image></Box><span id="span1">Hearts</span>
             <Box  borderRadius={'100%'} w={25} h={25} mt={2}><Image src={square} w={'70%'} pl={5} pt={3}></Image></Box><span id="span1">Orders</span>
             <Box  borderRadius={'100%'} w={25} h={25} mt={2}><Image src={cart} w={'70%'} pl={5} pt={3}></Image></Box>
           </Flex>
   
      </div>
      <Flex w="100%"  h={100} >
      <Box>
        <Image src={logo} w={200} pt={30} pl={20}></Image>
      </Box>
      <Box id="container">
        <Box mt={30}  >
          <Center><Text>Baby</Text> </Center>
          <Text id="botom_text">PREEMIE - 24M</Text>
        </Box>
        <Box mt={30}  >
          <Center><Text>Toddler</Text> </Center>
          <Text id="botom_text">2T - 5T</Text>
        </Box>
        <Box mt={30} >
          <Center><Text>Kid</Text> </Center>
          <Text id="botom_text">4 - 14</Text>
        </Box>
        <Box mt={30} >
          <Center><Text>New & Popular</Text> </Center>
        </Box>
        <Box mt={30} >
          <Center><Text>Hilary Duff x Carter's</Text> </Center>
        </Box>
        <Box mt={30} >
          <Center><Text>Sale</Text> </Center>
        </Box>
        </Box>
        <Input borderRadius={50} border="none" outline="0.5px solid silver" pl={15} mt={26} ml={130} h={35} w={300} placeholder="Find your product" fontSize={15.5}></Input>
      </Flex>
      <Box bg="#f2f2f2" h={35}><Center><Text pt={7} fontSize={13.8} fontWeight={700} color="#00a9e0">$6+ SPRING STYLES</Text></Center></Box>
      <hr color="#00a9e0"></hr>
      
      <Login_signup/>

      {/* <Box>
          <Footer/>
      </Box> */}
      </div> 
      
  )
 }

export default Signin;
