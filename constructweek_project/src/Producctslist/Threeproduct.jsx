import React, { useEffect,useState } from 'react'
import {Box,Grid,GridItem,Image} from "@chakra-ui/react"
import axios from 'axios';


const Threeproduct = () => {
const [data,setdata]=useState([])
const getdata=()=>{
   axios.get("http://localhost:8080/threeproduct")
    .then((res)=>setdata(res.data))
}
useEffect(()=>{
    getdata()
},[])

  return (
   <Box>
    <Grid templateColumns="repeat(3,1fr)" templateRows="auto" gap={18} padding={10}>
      {data.map((el)=>
      <GridItem key={el.title}>
        <Image style={{position:'relative'}}  src={el.image} width="100%"></Image>,
        <Image style={{position:"absolute",marginTop:"-150px",marginLeft:"90px"}}  src={el.image_sec} width="20%"></Image>
        <p style={{width:"67%",alignItems:"stretch",textAlign:"center",marginTop:"-90px",color:"white",position:"relative",marginLeft:"90px",fontSize:"14px"}}>{el.text}</p>
       </GridItem>
      )}
     </Grid>
   </Box>
  )
}

export default Threeproduct