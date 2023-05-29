import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { busca } from '../../../services/Service'
import { addToken } from '../../../store/tokens/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { Tema } from '../../../models/Tema';

function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([])
  const navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch()
  
  async function getTemas() {
    // alterado a função pra dentro de um try catch, para poder verificar a validade do token do usuário
    try {
      // a parte do TRY, fica igual ao que ja tinha antes
      await busca('/temas', setTemas, {
        headers: {
          Authorization: token
        }
      })
    } catch (error: any) {
      // a parte do catch, vai receber qlquer mensagem de erro que chegue, e caso a mensagem tenha um 403 no seu texto
      // significa que o token já expirou. Iremos alertar o usuário sobre isso, apagar o token do navegador, e levá-lo para a tela de login
      if(error.toString().includes('403')) {
        console.log(error);
        alert('O seu token expirou, logue novamente')
        dispatch(addToken(''))
        navigate('/login')
      }
    }
  }
  
  useEffect(() => {
    getTemas()
  }, [])

  useEffect(() => {
    if(token === ''){ 
      alert('Ta tirando né??? sem token não rola')
      navigate('/login')
    }
  }, [])
  
  return (
    <>
    {/* criando um if ternário para exibir um loader de carregamento enquanto os temas não chegam do backend */}
    {/* na primeira linha, temos a condição do if */}
      {temas.length === 0 
      // com o sinal de interrogação, fazemos a saida padrão do if, para caso a condição seja verdadeira
        ? <div className="alinhamento"><span className="loader"></span></div> 
        // o dois pontos (:) representa o ELSE de um if padrão, e colocamos a saida para caso a condição seja falsa. Nesse caso, exibir nada
        : <></>}
      {temas.map((tema) => (
        <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema numero {tema.id}
            </Typography>
            <Typography variant="h5" component="h2">
              Descrição do tema: {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/apagarTema/${tema.id}`} className="text-decorator-none">
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
      ))}
    </>
  );
}

export default ListaTemas