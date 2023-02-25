import React from 'react'
import {Flex,Box,Input, Button,Image,Text} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import facebook from '../Images/facebook-f.svg'
import pinrest from '../Images/pinterest-p.svg'
import twiter from '../Images/twitter.svg'
import youtube from '../Images/youtube.svg'
import instagram from '../Images/instagram.svg'
import "../Producctslist/Footer.css"
const Footer = () => {
  return (
    <Box>
  <Flex mt={30} justifyContent={'space-between'}>
    <Box ml={18} fontFamily={'sans-serif'} lineHeight={1.9} fontSize={'15px'} color={"#444444"} >
        <p style={{fontWeight:"700"}}>SUPPORT</p>
        <p>Customer Service</p>
        <p>Accessibility Support</p>
        <p>Shipping</p>
        <p>Returns</p> 
        <p>Gift Cards</p>
        <p>Today's Deals</p>
        <p>Size Chart</p>
        <p>My Account</p>
        <p>Carter's® Credit Card</p>
        <p>My Rewarding Moments®</p>
        <p>Carter’s Mobile App</p>
        <p>Contact Us</p>
    </Box>
    <Box fontFamily={'sans-serif'} lineHeight={1.9} fontSize={'15px'} color={"#444444"} mr={310}>
        <p style={{fontWeight:"700"}}>ABOUT US</p>
        <p>Carter's Inc.</p>
        <p>Life With Kids</p>
        <p>Baby of the Month Contest</p>
        <p>All Store Locations</p>
        <p>Join Carter's Affliate Program</p>
        <p>Investor Relations</p>
        <p>Careers</p>
        <p>Raise the Future</p>
    </Box>
    <Box w={510}>
        <Input h={48} w={440} borderRadius={5} bg="#fff" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" pl={10} fontSize={17} mt={12} outline="none" borderBottomColor={'black'} borderTop={'silver'} borderLeft={'silver'} borderRight={'silver'} position={'relative'} placeholder="Savings delivered right to your inbox"></Input>
        <Button h={49} w={40} border={'none'} position={'relative'} > <FontAwesomeIcon icon={faChevronRight} borderRadiusTopRight={5}
        borderRadiusBottomRight={5}/></Button>
        <br></br>
        <Input h={48} w={440} borderRadius={5} bg="#fff" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" pl={10} fontSize={17} mt={30} border={'silver'} outline="none" placeholder="Enter zip code to find a store"></Input>
        <Button h={49} w={40} border={'none'} position={'relative'}> <FontAwesomeIcon icon={faMagnifyingGlass} borderRadiusTopRight={5}
        borderRadiusBottomRight={5}/></Button>

        <Flex w={'42%'} justifyContent={'space-between'}  mt={60} ml={270} >
         <Box id="fb" borderRadius={50} w={37} h={37}><Image src={facebook} width="40%" pl={12} pt={6}></Image></Box>

         <Box id="fb" borderRadius={50} w={37} h={37}><Image src={pinrest} width="40%" pl={12} pt={6}></Image></Box>  

         <Box id="fb" borderRadius={50} w={37} h={37}><Image src={twiter} width="60%" pl={9} pt={6}></Image></Box> 

         <Box id="fb" borderRadius={50} w={37} h={37}><Image src={youtube} width="60%" pl={8} pt={7}></Image></Box>  

         <Box id="fb" borderRadius={50} w={37} h={37}><Image src={instagram} width="50%" pl={9} pt={7}></Image></Box>  
        </Flex>

        <Text ml={280} fontSize={13} color={'#444'}>Ship To: <Image src="https://www.carters.com/etc.clientlibs/carters/clientlibs/clientlib-site/resources/icons/flags/us.svg" w="10%" mt={15}></Image> United States | Changes</Text>
    </Box>
  </Flex>
    <Box mt={150}>
      <Text color={'#444'} fontSize={13} textAlign={'end'} mr={15}>© 2023 Carter’s, Inc. All rights reserved.</Text>
     <Text textAlign={'end'} me={15}>
      <a id="anchor" href=''>Google Ad Price Policy</a>
      <a id="anchor" href=''>Terms and Conditions</a>
      <a id="anchor" href=''>Privacy Statements</a>
      <a id="anchor" href=''>Do Not Sell or Share My Personal Information</a>
      <a id="anchor" href=''>Accessibility</a>
      <a id="anchor" href=''>Coupon Policy</a>
      <a id="anchor" href=''>Product Recalls</a>
      <a id="anchor" href=''>UK Tax Strategy</a>
      <a id="anchor" href=''>International Sites</a>
      <a id="anchor" href=''>Site map</a>
     </Text> 
    </Box>
    <Box fontSize={12} pl={20} mt={30} color={'#444444'}boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
      <Text>*EXCLUSIONS AND DISCLAIMERS.</Text>
      <Text>UP TO 50% OFF: Savings based on MSRP. Excludes Select New Arrivals, LITTLE PLANET®, Sneak Peek, Treasure Box, Licensed Styles, SKIP HOP®, Doorbusters, and Clearance. Other exclusions may apply.</Text>
      <Text>UP TO 70% OFF CLEARANCE: Savings based on MSRP.</Text>
      <Text>*MSRP is our Manufacturer’s Suggested Retail Price at which we suggest our collections be initially offered. We list an MSRP on our products that we sell ourselves and that sell through our wholesale partners. Our wholesale partners are free to use our MSRP or set a different</Text>
      <Text>selling price. We generally introduce our new collections at MSRP on our website. Since MSRP is a suggested price, actual sales may or may not have been made at MSRP in any certain area or in all areas. Prices may vary by channel or location.</Text>
      <Text>Many of our collections have a DOB (Date of Birth) on the price tag or on their website product page. This is the date that this item or a similar item was originally offered for sale at the MSRP.</Text>
    </Box>
  </Box>  
  )
}

export default Footer