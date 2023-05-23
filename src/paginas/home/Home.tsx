import './Home.css'
import { Grid, Box, Typography, Button } from "@mui/material";
import TabPostagens from "../../components/tabpostagem/TabPostagem";

function Home() {
  return (
    <>
      <Grid container gap={4} alignItems={'center'} justifyContent={'center'} style={{backgroundColor: '#385cb1'}}>
      <Grid item xs={4}>
        <Box p={8} color={'white'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2}>
          <Typography align='center' fontWeight={900} variant='h3'>Bem vindo ao blog pessoal</Typography>
          <Typography align='center' variant='body1'>Digita uns textos dahora pra nóis ai...</Typography>
          <Button variant='outlined' className='outlinedButton'>Ver Postagens</Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <img src="https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2022/04/legiao_OZTlaWFfI0Km.jpg.webp" alt="" width={'100%'} />
      </Grid>
    </Grid>
    <TabPostagens />
    </>
  );
}

export default Home;