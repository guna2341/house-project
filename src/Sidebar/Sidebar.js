import { ChevronLeft, ChevronRight, Difference } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";
import box from '../assets/box.png';
import leads from '../assets/Leads.svg';
import icon from '../assets/Icon.svg';
import build from '../assets/Leads (1).svg';
import tag from '../assets/Request Ticket.svg';
import settings from '../assets/Path 93425.svg';
import cloud from '../assets/Group 8128.svg';
import file from '../assets/Group 8128 (1).svg';
import docs from '../assets/Group 8128 (2).svg';
import chat from '../assets/Group 8128 (3).svg';
import Appbar from '../Appbar/Appbar';

export default function Sidebar(){

  return <>
  <Box sx={{width:'50px',backgroundColor:'#333333',height:'640px',paddingLeft:'23px',paddingTop:'16.5px'}}>
     <Stack gap='20px'>
      <Box sx={{width:'26px',height:'26px',borderRadius:'50%',backgroundColor:' #5078E1',textAlign:'center',paddingTop:'1px',paddingLeft:"1px"}}>
        <ChevronRight sx={{color:'#FFFFFF'}}/>
      </Box>
      <Box sx={{height:'0px',width:'25px',border:'1px solid #98A0AC'}}></Box>
      <Box sx={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'#333333'}}>
        <img src={box} style={{marginBottom:'10px'}}></img>
        <img src={leads} style={{marginBottom:'10px'}}></img>
        <img src={icon} style={{marginLeft:'1px',marginBottom:'15px'}}></img>
        <img src={build} style={{marginBottom:'15px'}}></img>
        <img src={tag} style={{marginBottom:'17px'}}></img>
        <img src={settings} style={{marginLeft:'4px',marginBottom:'17px'}}></img>
        <img src={cloud} style={{marginBottom:'17px'}}></img>
        <Difference style={{color:'#f2f4f7',marginBottom:'17px' ,width:'15px',height:'15px',marginLeft:'4px'}}/>
        <img src={docs} style={{marginBottom:'17px'}}></img>
        <img src={chat} style={{marginBottom:'17px'}}></img>
      </Box>
     </Stack>
    
  </Box>

  </>
}