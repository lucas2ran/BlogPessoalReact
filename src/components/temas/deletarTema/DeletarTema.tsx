import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';


function DeletarTema() {
  const [token, setToken] = useLocalStorage('token');

  const navigate = useNavigate();

  const {id} = useParams<{id: string}>()

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  async function getById(id: string){
    try {
      await buscaId(`/temas/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error: any) {
      if(error.toString().contains('403')) {
        alert('Token expirado, logue novamente')
        setToken('')
        navigate('/login')
      } else {
        alert('O tema não existe')
      }
    }
  }

  useEffect(() => {
    if(id !== undefined){
      getById(id)
    }
  }, [id])

  useEffect(() => {
    if(token === ''){ 
      alert('Ta tirando né??? sem token não rola')
      navigate('/login')
    }
  }, [])

  function apagar() {
    deleteId(`/temas/${id}`, {
      headers: {
        Authorization: token
      }
    })
    alert('Tema apagado com sucesso')
    navigate('/temas')
  }

  function nao(){
    navigate('/temas')
  }

  return (
    <>
      <Grid container justifyContent={'center'}>
        <Grid item xs={4}>
          <Typography variant='h5'> Tem certeza dque deseja deletar o tema: {tema.descricao} </Typography>

          <Box display={'flex'} gap={4}>
            <Button variant='contained' color='primary' fullWidth onClick={nao}>Cancelar</Button>
            <Button variant='contained' color='secondary' fullWidth onClick={apagar}>Apagar</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default DeletarTema
function buscaId(arg0: string, setTema: React.Dispatch<React.SetStateAction<Tema>>, arg2: { headers: { Authorization: string; }; }) {
    throw new Error('Function not implemented.');
}

function deleteId(arg0: string, arg1: { headers: { Authorization: string; }; }) {
    throw new Error('Function not implemented.');
}

