import { Delete, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Stack, Typography,Item } from "@mui/material";
import face from '../assets/Screenshot 2024-10-18 121911.png';
import Grid from '@mui/material/Grid2';
import house from '../assets/pexels-scottwebb-1029599.jpg';

 export default function Layout(){

    return <Box sx={{background:'#FFFFFF',borderRadius:'12px',width:'1076px',height:'564px',marginTop:'74px',marginLeft:'96px',boxShadow: '0px 0px 16px #00000014'}}>
           <Box sx={{height:'32px',borderBottom:'1px solid #F5F7FA ',borderTopLeftRadius:'12px',borderTopRightRadius:'12px',paddingTop:'15px',paddingLeft:'24px'}}>
            <Stack direction='row'>
            <Typography sx={{fontSize:'14px',color:'#5078E1',letterSpacing:'0px',fontWeight:500}}>Add Contact</Typography>
            <KeyboardArrowRight sx={{height:'20px',color:'#5078E1',marginTop:'0.16px'}}/>
            <Typography sx={{fontSize:'14px',color:'#5078E1',letterSpacing:'0px'}}>Lead Details</Typography>
            <KeyboardArrowRight sx={{height:'20px',color:'#5078E1',marginTop:'0.16px'}}/>
            <Typography sx={{fontSize:'14px',color:'#5078E1',letterSpacing:'0px'}}>Preview and Create Lead</Typography>
            <KeyboardArrowRight sx={{height:'20px',color:'#5078E1',marginTop:'0.16px'}}/>
            <Typography sx={{fontSize:'14px',color:'#5078E1',letterSpacing:'0px'}}>Quotation Details</Typography>
            <KeyboardArrowRight sx={{height:'20px',color:'#5078E1',marginTop:'0.16px'}}/>
            <Box sx={{width:'22px',height:'22px',border:'1px solid #CBD7F6',borderRadius:'50%',textAlign:'center'}}>
            <Box sx={{textAlign:'center',width:'17.5px',height:'17.5px',backgroundColor:'#5078E1',borderRadius:'50%',marginTop:'2.3px',marginLeft:'2.3px',color:'white',fontSize:'13px'}}><Box sx={{marginTop:'1px',position:'absolute',marginLeft:'5.2px'}}>4</Box></Box>
            </Box>   
            <Typography sx={{fontSize:'14px',color:'#5078E1',letterSpacing:'0px',marginLeft:'8px'}}>Preview and Create</Typography>
            </Stack>
           </Box>

           <Stack direction='row'>
            <Box flex={1} sx={{border:'1px solid black',height:'440px',paddingTop:'10px',paddingLeft:'24px',paddingRight:'10px'}}>
            <Typography sx={{fontSize:'14px',color:'#4E5A6B'}}>Lead Details</Typography>  
            <Box sx={{border:'1px solid #E4E8EE',marginTop:'16.5px',padding:'10px',paddingBottom:'8px',borderRadius:'4px'}}>
              
             <Stack direction='row'>
             <Box> <img src={face} style={{width:'40px',height:'40px',margin:0,borderRadius:'4px',boxShadow:'0px 3px 16px #0000001F'}}></img>
             </Box>
  
             <Box>
              <Stack direction='row' gap='8px'>
                <Typography sx={{fontSize:'14px',fontWeight:'bold',marginLeft:'12px'}}>Tom Cruise</Typography>

                <Box sx={{height:'19px',width:'52px',backgroundColor:'#5078E11E',marginTop:'2px',borderRadius:'4px'}}><Typography sx={{letterSpacing:'-0.08px',color:'#091B29',fontSize:'10px',marginLeft:'5.8px',marginTop:'1.7px'}}>Prospect</Typography></Box>
                </Stack>

                <Stack sx={{marginTop:'5px',marginLeft:'12px'}} direction='row' gap='8px'>
                  <Typography sx={{fontSize:'11.5px',letterSpacing:'0px',color:'#4E5A6B'}}>+91 9090808012</Typography>
                  <Box sx={{width:'6px',height:'6px',borderRadius:'50%',backgroundColor:'#CED3DD',marginTop:'5.1px'}}></Box>
                  <Typography sx={{fontSize:'11.5px',letterSpacing:'0px',color:'#4E5A6B'}}>Tomcruise2515@mail.com</Typography>
                </Stack>
                </Box>
                </Stack>
               </Box>  
               <Box sx={{width:'324px',height:'0px',border:'1px solid #E4E8EE',marginTop:'20px'}}></Box> 

               <Box sx={{width:'351px',height:'117px',marginTop:'16px'}}>
               <Typography sx={{fontSize:'14px',letterSpacing:'0px',color:'#4E5A6B'}}>Quotation Details</Typography>
                <Stack direction='row' gap='12px' sx={{marginTop:'12px'}}>
                  <Box sx={{width:'109px',height:'33px'}}>
                     <Typography sx={{fontSize:'8px',letterSpacing:'0px',color:'#98A0AC'}}>LEASE START DATE</Typography>
                     <Typography sx={{fontSize:'12px',letterSpacing:'0px',color:'#091B29',marginTop:'6px'}}>30 Jan 22</Typography>
                  </Box>
                  <Box sx={{width:'109px',height:'33px'}}>
                  <Typography sx={{fontSize:'8px',letterSpacing:'0px',color:'#98A0AC'}}>LEASE END DATE</Typography>
                  <Typography sx={{fontSize:'12px',letterSpacing:'0px',color:'#091B29',marginTop:'6px'}}>30 Jan 23</Typography>
                  </Box>
                  <Box sx={{width:'109px',height:'33px'}}>
                  <Typography sx={{fontSize:'8px',letterSpacing:'0px',color:'#98A0AC'}}>RENT START DATE</Typography>
                  <Typography sx={{fontSize:'12px',letterSpacing:'0px',color:'#091B29',marginTop:'6px'}}>30 Jan 23</Typography>
                  </Box>
                </Stack>
                <Box sx={{marginTop:'20px'}}>
                <Typography sx={{fontSize:'8px',letterSpacing:'0px',color:'#98A0AC'}}>GRACE PERIOD</Typography>
                <Stack direction='row'>
                <Typography sx={{fontSize:'12px',letterSpacing:'0px',color:'#091B29',marginTop:'6px'}}>90 Days</Typography>
                <Typography sx={{fontSize:'12px',letterSpacing:'0px',color:'#98A0AC',marginTop:'5.5px'}}>(Beginning)</Typography>
                </Stack>
                </Box>
               </Box>

            </Box>
           

            <Box flex={1.3} sx={{border:'1px solid black',backgroundColor:'#F5F7FA',paddingTop:'10px',paddingLeft:'12px',paddingRight:'12px',overflowY:'scroll',"&::-webkit-scrollbar": {display: "none"}}}>
              <Typography sx={{fontSize:'14px',color:'#4E5A6B',letterSpacing:'0px',marginBottom:'18px'}}>Unit Details</Typography>
              <Grid container spacing='16px'>
                  <Grid item xs={6}>
                    <Box sx={{height:'169.5px',border:'1px solid black',width:'155px',padding:'11px'}}>
                      <Box>
                      <Box sx={{width:'26px',height:'26px',borderRadius:'50%',position:'absolute',backgroundColor:'white',marginLeft:'120px',marginTop:'5px'}}>
                        <Delete sx={{width:'20px',height:'20px'}}/>
                      </Box>
                      <img src={house} style={{height:'80px',width:'155px',borderRadius:'4px'}}></img>
                      </Box>
            
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                  <Box sx={{height:'169.5px',border:'1px solid black',width:'155px',padding:'11px'}}></Box>
                  </Grid>
                  <Grid item xs={6}>
                  <Box sx={{height:'169px',border:'1px solid black',width:'155px',padding:'11px'}}></Box>

                  </Grid>
                  <Grid item xs={6}>
                  <Box sx={{height:'169px',border:'1px solid black',width:'155px',padding:'11px'}}></Box>
                  </Grid>
                </Grid>
              
          
            </Box>

            <Box flex={1} sx={{border:'1px solid black'}}></Box>
           </Stack>
           <Box ></Box>
    </Box>
  }