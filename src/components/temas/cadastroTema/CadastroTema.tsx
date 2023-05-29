import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { buscaId, put, post } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { Tema } from '../../../models/Tema';


function CadastrarTema() {
  // pegar o token armazenado
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  // iniciando a variavel para armazenar o tema digitado
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  async function getById(id: string) {
    try {
      await buscaId(`/temas/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      alert('O tema não existe');
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      getById(id);
    }
  }, [id]);

  useEffect(() => {
    if (token === '') {
      alert('Ta tirando né??? sem token não rola')
      navigate('/login')
    }
  }, [])

  // função que pega a alteração do input e armazena os dados
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await put('/temas', tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        alert('Atualizooooou');
        back();
      } catch (error) {
        alert('Num foi.. =/');
      }
    } else {
      try {
        await post('/temas', tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        alert('Fooooooi');
        back();
      } catch (error) {
        alert('Num foi.. =/');
      }
    }
  }

  function back() {
    navigate('/temas');
  }

  return (
    <>
      <Grid container justifyContent={'center'} my={2}>
        <Grid item xs={10} md={4}>
          <form onSubmit={onSubmit}>
            <Box display="flex" flexDirection={'column'} gap={2}>
              <Typography variant="h4" align="center">
                Formulário de
                {id !== undefined ? ' atualização ' : ' cadastro '}
                de tema
              </Typography>
              <TextField
                label="Descrição do tema"
                name="descricao"
                value={tema.descricao}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <Button
                type="submit"
                variant="contained"
                disabled={tema.descricao.length < 4}
              >
                {id !== undefined ? 'Atualizar tema' : 'Cadastrar Tema'}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default CadastrarTema;