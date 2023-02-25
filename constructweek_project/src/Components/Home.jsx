import React from 'react'
import {Center,Text,Box,Image,Flex,Input,Button, Grid,GridItem} from "@chakra-ui/react"
import "./Home.css"
import img1 from "../Images/skiphope.jpg"
import logo from "../Images/newlogo.jpeg"
import pimage1 from "../Images/pimage1.png"
import pimage2 from "../Images/pimage2.png"
import pimage3 from "../Images/pimage3.png"
import pimage4 from "../Images/pimage4.png"
import pimage5 from "../Images/pimage5.png"
import pimage6 from "../Images/pimage6.png"
import p2image1 from "../Images/p2image1.jpg"
import p2image2 from "../Images/p2image2.jpg"
import p2image3 from "../Images/p2image3.jpg"
import profile from "../Images/user-regular.svg"
import heart from "../Images/heart-regular.svg"
import square from "../Images/cube-solid.svg"
import cart from "../Images/cart-shopping-solid.svg"
import Favproduct from '../Producctslist/Favproduct'
import Threeproduct from '../Producctslist/Threeproduct'
import Footer from '../Producctslist/Footer'
import Signin from './Signin.jsx'
import { Link } from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-solid-svg-icons'
import FourProduct from '../Producctslist/FourProduct'

const Home = () => {
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
      <Box h={55} bg="rgb(208 146 157)"><Center><Text fontSize={22} color="white" mt={9}>NEW! Spring Capsule Collection from Chief Mom Officer Hilary Duff</Text></Center></Box>


    {/* p2list */}
      <Box display="flex" pl={5} mt={10} textalign="center">
        <Box>
          <Image src={p2image1} width="98%"></Image>
        </Box>
        <Box>
          <Image src={p2image2} width="98%"></Image>
        </Box>
        <Box>
          <Image src={p2image3} width="98%"></Image>
        </Box>
      </Box>
       {/* p2 button list */}

      <Grid templateColumns='repeat(6, 1fr)' gap={6} w="75%" m="auto" mt={6} >
        <GridItem><Button borderRadius={5} border="1px solid gray" w={180} h={40} bg="none" color="#444" fontWeight={600}>BABY GIRL</Button></GridItem>
        <GridItem ><Button borderRadius={5} border="1px solid gray" w={180} h={40} bg="none" color="#444" fontWeight={600}>BABY BOY</Button></GridItem>
        <GridItem ><Button borderRadius={5} border="1px solid gray" w={180} h={40} bg="none" color="#444" fontWeight={600}>TODDLER GIRL</Button></GridItem>
        <GridItem ><Button borderRadius={5} border="1px solid gray" w={180} h={40} bg="none" color="#444" fontWeight={600}>TODDLER BOY</Button></GridItem>
        <GridItem ><Button borderRadius={5} border="1px solid gray" w={180} h={40} bg="none" color="#444" fontWeight={600}>GIRL</Button></GridItem>
        <GridItem ><Button borderRadius={5} border="1px solid gray" w={180} h={40} bg="none" color="#444" fontWeight={600}>BOY</Button></GridItem>
     </Grid>

  
     <Box display="flex" padding="20px 10px" textAlign={'center'} mt={45}>
        <Box>
          <Image src={pimage1} w="90%"></Image>
          <Text color="#003057" fontWeight={600}>BABY GIRL</Text>
        </Box>
        <Box>
          <Image src={pimage2} w="90%"></Image>
          <Text color="#003057" fontWeight={600}>BABY BOY</Text>
        </Box>
        <Box>
          <Image src={pimage3} w="90%"></Image>
          <Text color="#003057" fontWeight={600}>TODDLER GIRL</Text>
        </Box>
        <Box>
          <Image src={pimage4} w="90%"></Image>
          <Text color="#003057" fontWeight={600}>TODDLER BOY</Text>
        </Box>
        <Box>
          <Image src={pimage5} w="90%"></Image>
          <Text color="#003057" fontWeight={600}>KID GIRL</Text>
        </Box>
        <Box>
          <Image src={pimage6} w="90%"></Image>
          <Text color="#003057" fontWeight={600}>KID BOY</Text>
        </Box>
      </Box>
{/* frist Big Image */}
      <Box id="poster1" mt={10}>
        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.294/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot4.jpg?yocs=4G_" h="100%" w="100%"></Image>
        <Box id="poster1_text" color="#00A9E0">
          <h1 style={{ width:"55%",marginLeft:"20px",fontSize:"45px",fontWeight:"500",marginTop:"50px",textAlign:"center",lineHeight:"50px"}} >EASTER SHOP</h1>
          <p style={{paddingLeft:"30px",marginLeft:"45px",fontSize:"17px"}}>UP TO</p>
          <h1 style={{fontSize:"120px",lineHeight:"80px"}}>40 <span style={{ fontSize:"90px" ,marginLeft:"-30px"}} >%</span></h1>
          <p style={{fontSize:"35px",marginLeft:"140px", marginTop:"-12px",fontWeight:"700"}} id="simple">OFF</p>
          <a href="" style={{ marginLeft:"40px",color:"#707070",fontWeight:"600"}}>SHOP EASTER</a>
        </Box>
      </Box>
{/* second Big Image */}
      <Box mt={5}>
        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.293/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot2.png?yocs=4G_" h="100%" w="100%"></Image>
      </Box>
{/* third Big Image */}
      <Box id="poster2">
        <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.293/content/dam/ecomm/ec_creative_carters/2023/cadence/022123/022123/car_desktop_022123_slot5.jpg?yocs=4G_" h="100%" w="100%"></Image>
        <Box id="poster2_text">
            <h1 id="h1">SPRING BREAK CHECKLIST</h1>
            <p id="p">Hundreds of new styles just reduced!</p>
            <h2 id="h2">Starting from</h2>
            <span id="span" style={{}}>$</span> <h1 id="sech1">6</h1>
            <p id="secp">SHOP SPRING BREAK ESSENTIALS</p>
        </Box>
      </Box>
       
      <Box>
          <h1 style={{textAlign:"center",color:"#00A9E0",fontSize:"55px",marginBottom:"15px"}}>SHOP OUR FAVES</h1>
          <Box>
             <Favproduct/>
          </Box>
          <h1 style={{textAlign:"center",fontSize:"46px",fontFamily:"Poppins, Arial, Verdana, sans-serif",fontWeight:"600",marginTop:"10px"}}>Discover more from our most-loved brands</h1>
          <Threeproduct/>
          <FourProduct/>
          <Footer/>
      </Box>
      </div> 
      
  )
}

export default Home





// https://www.youtube.com/watch?v=ACJjpaiy7Fk