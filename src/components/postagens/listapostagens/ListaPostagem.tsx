import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useEffect, useState } from 'react';
import { busca } from '../../../services/Service'
import Postagem from '../../../models/Postagem';

function ListaPostagem() {
  const [Postagem, setPostagem] = useState<Postagem[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token === '') {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  async function getPostagem() {
    await busca("postagem", setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPostagem()
  }, [Postagem.length])


  return (
    <>
      {
        Postagem.map(postagem =>
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                {postagem.titulo}
              </Typography>
              <Typography variant="h5" component="h2">
                {postagem.texto}
              </Typography>
              <Typography variant="h5" component="h2">
                {postagem.tema?.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5} >

                <Link to={`/formularioTema/${postagem.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/formularioTema/${postagem.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        )
      }
    </>
  );
}

export default ListaPostagem;

