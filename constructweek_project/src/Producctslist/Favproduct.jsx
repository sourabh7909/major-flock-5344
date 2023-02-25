import React, {useEffect,useState } from 'react'
import {Box,Grid,GridItem,Image} from "@chakra-ui/react"
import axios from 'axios';

const Favproduct = () => {
const [data,setdata]=useState([])
const getdata=()=>{
   axios.get("http://localhost:8080/fav_product")
    .then((res)=>setdata(res.data))
}
useEffect(()=>{
    getdata()
},[])

  return (
   <Box>
    <Grid templateColumns="repeat(6,1fr)" gap={18} padding={10}>
     {data.map((el)=>
   <GridItem key={el.title}><Image src={el.image} width="100%"></Image></GridItem>  
     )}
     </Grid>
   </Box>
  )
}

export default Favproduct