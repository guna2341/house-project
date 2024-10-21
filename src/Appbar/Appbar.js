import { Box, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Layout from '../Layout/Layout';

export default function Appbar(){
    const [cas,setcas]=useState('casagrand');
    useEffect(()=>{
         setcas('casagrand')
    })
    return <>
             <Navbar/>   
             <Box sx={{position:'absolute',left:'81px',width:'1074px',backgroundColor:'#FFFFFF',paddingLeft:'23.5px',paddingTop:'10px',paddingBottom:'7px',paddingRight:'24px',boxShadow:'0px 0px 0.5px #00000014'}}>
                <Stack direction='row' sx={{justifyContent:'space-between'}}>
                <Stack direction='row'>
                <Box sx={{width:'24px',height:'24px',borderRadius:'50%',backgroundColor:'#E4E8EE'}}>
                    <ArrowBackIos sx={{width:'18px',height:'18px',marginLeft:'5.7px',marginTop:'3px'}}/>
                </Box>
                <Typography sx={{color:'#071741',letterSpacing:'0px',fontSize:'16px',marginLeft:'8px'}}>Create Quotation To Existing Lead</Typography>
                </Stack>
                <FormControl sx={{width:'166px',borderRadius:'8px'}} type={cas}>
                    <Select sx={{height:'32px',background:'#F5F7FA',border: '1px solid #E4E8EE'}} type={cas} onChange={(e)=>setcas(e.target.value)}>
                        <MenuItem value="casa">Casagrand</MenuItem>
                    </Select>
                </FormControl>
                </Stack>
             </Box>
                   
             <Sidebar/>         
    </>
}