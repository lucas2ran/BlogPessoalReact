import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';


function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

    let footerComponent;
  
    if(token !== '') {
      footerComponent = (
  
      <footer className='footer'>
        <Grid container py={4} alignItems={'center'}>
          <Grid item xs={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant='h6' align='center'>Blog da turma 63 - Feito por: Thiago Faccipieri - 2023</Typography>
            <Box display={'flex'}>
              <Typography>Feito com:</Typography>
              <KeyboardArrowLeftIcon />
              <Typography color={'lightgrey'} >React / MUI</Typography>
              <KeyboardArrowRightIcon />
            </Box>
          </Grid>
          <Grid item xs={4} display={'flex'} justifyContent={'center'}>
            {/* controlando o que aparece em tela ou não, de acordo com o token da pessoa, com um if ternário */}
            {token !== '' ? <Box display={'flex'} gap={2} alignItems={'center'} className='iconesFooter'>
            <GitHubIcon fontSize='inherit' className='iconeInd' />
              <GitHubIcon fontSize='inherit' className='iconeInd' />
              <LinkedInIcon fontSize='inherit' className='iconeInd' />
            </Box> : <>você não está logado ainda</>}
          </Grid>
          <Grid item xs={4} display={'flex'} justifyContent={'center'}>
            <Typography variant='h5'>Em parceria com: Generation Brasil</Typography>
          </Grid>
        </Grid>
      </footer>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  );
}
  
  export default Footer