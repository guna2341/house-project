import { Avatar, Box, InputAdornment, Stack, Typography } from "@mui/material";
import React from "react";
import logo from '../assets/logo.png';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import { KeyboardArrowDown, NotificationAddOutlined,Search } from "@mui/icons-material";

const SearchBar = styled(TextField)({
    marginTop:'11px',
    marginRight:'50px',
    width: '350px',    
    height: '32px',    
    '& .MuiOutlinedInput-root': {
      height: '32px',  
      backgroundColor:'#5D5D5D',
      color:'white'
    },
    '& .MuiInputBase-input': {
    
      height: '24px',      
      fontSize:'12px',
      color:'#CED3DD',
      fontSize:'12px',
    },
  });
function Navbar(){

    return (
        <>
        <Box id="Box" sx={{    width: '100%',
    height: '54px',
    backgroundColor: '#1C1C1C'}}>
        <Stack direction='row' gap='117px'>
 
                  <Stack direction='row' gap='10px' >
            <Box sx={{width:'116px',height:'22px',textAlign:'center',paddingTop:'16px',paddingLeft:'24px'}}>
                <img src={logo} style={{height:'22px'}}></img>
            </Box>
            <Box sx={{width:'0px',height:'17px',border:'1px solid #98A0AC',marginTop:'18.5px'}}></Box>
            <Box>
            <Typography sx={{fontSize:'10px',letterSpacing:0,fontFamily:'nunito sans',color:'#ffffff',marginTop:'19.5px'}}>PROPERTY MANAGEMENT SOLUTION</Typography>
            </Box>
            </Stack>
            <Box sx={{height:'50px'}}>
          
            <SearchBar
      variant="outlined"
      
      placeholder="Search"
      InputProps={{
        startAdornment: (
            <InputAdornment position="start">
              <Search sx={{color:'#CED3DD',height:'16px',width:'16px',marginRight:0}} />
            </InputAdornment>
          ),
        'aria-label': 'search',
      }}
    />
    </Box>
    <Stack direction='row' gap='10px'>
    <NotificationAddOutlined sx={{color:'white',width:'16px',height:'16px',marginTop:'18px',marginRight:'10.5px'}}/>
    <Box sx={{width:'0px',height:'26px',border:'1px solid #E4E8EE',marginTop:'14.5px'}}></Box>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{bgcolor:'red',width:'32px',height:'32px',marginTop:'11px'}} />
    <Box sx={{marginTop:'10px'}}>
        <Stack>
            <Typography sx={{color:'white',fontSize:'12px',fontWeight:'bold',letterSpacing:'0px'}}>Bala Ganesh</Typography>
            <Typography sx={{color:'#98A0AC',fontSize:'10px',letterSpacing:'0.01px'}}>Super Admin</Typography>
        </Stack>
    </Box>
    <KeyboardArrowDown sx={{color:'white',marginTop:'13.5px',marginRight:'16.5px'}} />
    </Stack>
    </Stack>
        </Box>
      
        
        </>
    )
}

export default Navbar;