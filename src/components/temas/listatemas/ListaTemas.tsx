import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Tema from '../../../models/Tema'
import useLocalStorage from 'react-use-localstorage';
import { useEffect, useState } from 'react';
import { busca } from '../../../services/Service'

function ListaTemas() {
  const [Temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token === '') {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  async function getTema() {
    await busca("/tema", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [Temas.length])


  return (
    <>
      {
        Temas.map(tema =>
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5} >

                <Link to={'/formularioTema/${tema.id'} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
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

export default ListaTemas;
