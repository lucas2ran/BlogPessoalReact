
import './Home.css'
import { Grid, Typography, Button, Box } from "@mui/material";
import TabPostagens from "../../components/tabpostagem/TabPostagem";
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  return (
    <>
      <Grid container gap={4} alignItems={'center'} justifyContent={'center'} style={{ backgroundColor: '#385cb1' }}>
        <Grid item xs={4}>
          <Box p={8} color={'white'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2}>
            <Typography align='center' fontWeight={900} variant='h3'>Bem vindo ao blog pessoal</Typography>
            <Typography align='center' variant='body1'>Digita uns textos dahora pra nóis ai...</Typography>
            
            <Box display={'flex'} justifyContent={'center'} gap={4}>
              <ModalPostagem />
              
              <Link to="/postagem">
                <Button variant='outlined' className='outlinedButton'>Ver Postagens</Button>
              </Link>
            </Box>
          </Box>

        </Grid>

        <Grid item xs={4}>
          <img src="https://kanto.legiaodosherois.com.br/w728-h381-gnw-cfill-gcc-f:fbcover/wp-content/uploads/2022/04/legiao_OZTlaWFfI0Km.jpg.webp" alt="f" width={'100%'} />
          <TabPostagens/>
        </Grid>
      </Grid>



    </>
  );
}

export default Home;