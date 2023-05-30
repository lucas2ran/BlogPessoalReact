import React, { ChangeEvent, useState, useEffect } from 'react';
import './login.css';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/tokens/Actions';
import { toast } from 'react-toastify';


function Login() {
  // cria a variavel para navegação interna pela rota
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // cria um estado para armazenamento no localStorage do navegador
  const [token, setToken] = useState('');

  // cria um estado de controle para o usuário preencher os dados de login
  const [userLogin, setUsuarioLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });
  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  // atualiza os dados do estado acima, e ajuda a formar o JSON para a requisição
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  // função que envia o formulário para o backend
  async function enviar(event: ChangeEvent<HTMLFormElement>) {
    // previne que o formulario atualize a pagina
    event.preventDefault();
    try {
      await login('/usuarios/logar', userLogin, setRespUserLogin);
      toast.success("Usuário logado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      alert('Usuário e/ou senha inválidos');
    }
  }

  // Efeito que fica de olho no token, e quando chega algo diferente de vazio, navega o usuario pra home
  useEffect(() => {
    if (token !== '') {
      // dispatch(addToken(token))
      // navigate('/home');
    }
  }, [token]);

  useEffect(() => {
    if(respUserLogin.token !== ''){
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      navigate('/home');
      console.log({respUserLogin});
    }
  }, [respUserLogin.token])

  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={6}>
          <Box display={'flex'} justifyContent={'center'}>
            <Grid item xs={6} gap={2} display={'flex'} flexDirection={'column'}>
              <form onSubmit={enviar}>
                <Box display={'flex'} flexDirection={'column'} gap={2}>
                  <Typography align="center" variant="h3">
                    Login
                  </Typography>

                  <TextField
                    name="usuario"
                    label="Nome de usuário"
                    value={userLogin.usuario}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                  />

                  <TextField
                    name="senha"
                    label="Senha"
                    type="password"
                    value={userLogin.senha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                  />
                  <Button fullWidth variant="contained" type="submit">
                    Logar
                  </Button>
                </Box>
              </form>
              <hr />
              <Typography variant="body1" align="center">
                Ainda não tem uma conta? <Link to="/cadastro" style={{textDecoration: 'underline'}}>Cadastre-se</Link>
              </Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} className="imagemLogin"></Grid>
      </Grid>
    </>
  );
}

export default Login;



