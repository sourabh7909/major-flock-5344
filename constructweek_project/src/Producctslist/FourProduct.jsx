import React, { useEffect, useState } from 'react'
import {Box,GridItem,Image,Grid} from "@chakra-ui/react"
import axios from 'axios'

const FourProduct = () => {
const [data,setdata]=useState([])

const getdata=()=>{
    axios.get("http://localhost:8080/fourproducts")
    .then((res)=>setdata(res.data))
}
console.log(data)
useEffect(()=>{
    getdata()
},[])
  return (
   <Box style={{marginTop:"30px"}} boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}>
    <Grid templateColumns="repeat(4,1fr)" >
      {data.map((el)=>
      <GridItem key={el.title}><Image src={el.image} width="100%"></Image></GridItem>
     )}
    </Grid>
   </Box>
  )
}

export default FourProduct