import React, {  useState } from 'react'
import { Box, Center, Input, Text, Flex, Button } from "@chakra-ui/react"
import "./Signup.css"
import axios from "axios"


const Signup_Component = () => {
  const [Email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [confriompassword, setconfriompassword] = useState("")
  const [confrimDetails, setconfirmDetails] = useState([])
  const [newEmail, setnewEmail] = useState("")
  const [newpassword, setnewpassword] = useState("")
  const [newconfriompaassword, setnewconfriompassword] = useState("")

  // console.log(Email)
  // console.log(password)
  // console.log(confriompassword)

  const usedetails = {
    Email,
    password,
    confriompassword
  }
 
  const handleNext = () => {
    

    // error display block 
    if (Email.length === 0) {
      let Email_error = document.getElementById("Email_error")
      Email_error.style.display = "block"
    }
    if (password.length === 0) {
      let password_error = document.getElementById("password_error")
      password_error.style.display = "block"
    }
    if (confriompassword.length === 0) {
      let confriompassword_error = document.getElementById("confriompassword_error")
      confriompassword_error.style.display = "block"
    }

    // get Request

    if (Email.length > 8 && password.length > 4 && confriompassword.length > 4 && password === confriompassword) {
      axios.get("http://localhost:8080/Registration")
       
      .then((res)=>{res.data.map((el)=>  setconfirmDetails(el.usedetails.Email))})
    }
      
 if(Email.length>2){
  alert ("Register Succesfull")
 }else if(Email.length>2){
  alert("This Email is Already Register")
 }
    
    // Post Request

    if (Email.length > 8 && password === confriompassword && Email !== newEmail && password !== newpassword && confriompassword !== newconfriompaassword) {
      axios({
        method: 'post',
        url: 'http://localhost:8080/Registration',
        data: { usedetails }
      })
        .then((res) => (res))
    }


    // {confrimDetails.map((el)=>(
    // setnewEmail(el.usedetails.Email),
    // setnewpassword(el.usedetails.password),
    // setnewconfriompassword(el.usedetails.confriompassword)
    // ))}


    // {confrimDetails.map((el)=>
    //   // console.log(el)
    //   )}




    // console.log(newEmail)
    // console.log( newpassword)
    // console.log( newconfriompaassword)

    // console.log( Email)
    // console.log( password)
    // console.log( confriompassword)

    // let flag=false
    // if(Email===newEmail){
    //   flag=true
    // }
    // if(flag){
    //   alert("this Email is Already Register")
    // }else{
    //   alert("Resgister succesfull")
    // }
   
  }
  
 
  


  return (

    <Box mb={50}>
      <Text mt={20} mb={20} ml={280} fontSize={22} fontWeight={700} color={'#444444'}>Create a new account.</Text>
      <Text ml={280} mb={30} color={'#444'}>Sign up today and enroll in My Rewarding Moments™ to start earning points!</Text>
      <Flex justifyContent={'space-between'} w={'63.5%'} m={'auto'}>
        <Box>
          <Input onChange={(e) => setEmail(e.target.value)} id="login_input" boxShadow={' rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'} border={'none'} pl={10} h={55} w={455} fontSize={15} outline={'none'} placeholder='Email'></Input>
          <br></br>
          <p id="Email_error" class="Emails_error">Oops! Please make sure you enter a valid email address</p>
          <p id="signup_span">If you enrolled in My Rewarding Moments™ in one of our stores, be sure to use the same email address.</p>
          <br></br>
          {/* <Checkbox border={"3px solid gray"} borderRadius={4} w={20} h={20} bg={'#00a9e0'} color={'white'} mr={10}/><label style={{color:"#444"}}>Keep me signed in</label> */}
        </Box>
        <Box>
          <Input onChange={(e) => setpassword(e.target.value)} type={'password'} id="login_input" boxShadow={'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'} border={'none'} pl={10} h={55} w={455} fontSize={15} outline={'none'} placeholder='Password'></Input>
          <br></br>
          <p id="password_error">Required field</p>
          <p id="password_requrement">
            8-20 characters long
            Includes one letter
            Includes one number</p>
        </Box>
      </Flex>

      <Box textAlign={"center"} ml={500} >
        <Input onChange={(e) => setconfriompassword(e.target.value)} type={'password'} id="confrim_password" boxShadow={'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'} border={'none'} pl={10} h={55} w={455} fontSize={15} outline={'none'} placeholder='Confrim Password'></Input>
        <p id="confriompassword_error">Required field</p>
        <p style={{ marginLeft: "280px", marginBottom: "30px", width: "25%" }} id="signup_span">Remember, your password is 8-20 characters, includes one letter and one number.address.</p>
      </Box>

      <Center><Button w={300} h={40} bg={'#00a8e2'} borderColor={'#00a8e2'} border={'none'} borderRadius={3} color={'white'} fontSize={16} fontWeight={700} mb={20} onClick={handleNext}>Next</Button></Center>
      <Center>
        <Text mb={5} mt={40} color={'#737373'} fontSize={12} fontWeight={600} >Already have an account?</Text>
      </Center>
      <Center><Button w={300} h={38} border={'1px solid #444'} bg={'white'} borderRadius={3} color={'#444'} fontSize={16} >Create Account</Button></Center>
    </Box>
  )
}

export default Signup_Component;