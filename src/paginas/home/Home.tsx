import * as React from 'react';
import { Button, Box, Grid, Paper, Typography } from '@mui/material'
import './Home.css'

function Home() {
    return (
        <Grid container gap={4} alignItems={'center'} justifyContent={'center'} style={{ backgroundColor: '#3e5997' }}>
            <Grid item xs={4}>
                <Box p={8} color={'white'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2}>
                    <Typography align='center' fontWeight={900} variant='h3'>Sejam todos muito bem vindos!</Typography>
                    <Typography align='center' variant='body1'>Expresse suas idéias e se conecte com os demais...</Typography>
                    <Button variant='outlined' className='outlinedButton'>Ver Postagens</Button>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <img src="https://cinepop.com.br/wp-content/uploads/2020/09/super-choque-2.jpg" alt="" width={'100%'} />
            </Grid>
        </Grid>
    );
}
export default Home;