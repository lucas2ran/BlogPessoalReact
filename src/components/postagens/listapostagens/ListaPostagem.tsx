import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {Button} from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';


function ListaPostagens() {

  const [postagens, setPostagens] = useState<Postagem[]>([])
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens 
  );
  
  function getPostagens() {
    busca('/postagens', setPostagens, {
      headers: {
        Authorization: token
      }
    })
  }
  
  useEffect(() => {
    getPostagens()
  }, [])

  useEffect(() => {
    if(token === ''){ 
      alert('Ta tirando né??? sem token não rola')
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Grid container my={2} px={4}>
        <Box display='flex' flexWrap={'wrap'} width={'100%'}>
          {postagens.map((post) => (
            <Grid item xs={3} border={1} borderRadius={2} borderColor={'lightgray'} p={2}>
            <Typography>Postagem:</Typography>
            <Typography>{post.titulo}</Typography>
            <Typography>{post.texto}</Typography>
            <Typography>{new Intl.DateTimeFormat('pt-br', {
              dateStyle: 'full'
            }).format(new Date(post.data))}</Typography>
            <Typography>Tema: {post.tema?.descricao}</Typography>
            <Box display={'flex'} gap={4}>
              <Link to={`/formularioPostagem/${post.id}`}>
                <Button fullWidth variant='contained' color='primary'>editar</Button>
              </Link>
              <Link to={`/apagarPostagem/${post.id}`}>
                <Button fullWidth variant='contained' color='secondary'>apagar</Button>
              </Link>
            </Box>
          </Grid>
          ))}
        </Box>
      </Grid>
    </>
  )
}

export default ListaPostagens