import React, { useEffect, useState, ChangeEvent } from 'react';
import './CadastroUsuario.css';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import  User  from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { useNavigate } from 'react-router-dom';

function CadastroUsuario() {
  // constante para efetuar a navegação do usuário por dentro da lógica
  const navigate = useNavigate();

  // state para controlar o formulário enquanto o usuário preenche o mesmo
  const [User, setUsuario] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
  });

  // state que vai receber a resposta do backend, para verificar se veio tudo ok
  const [UserResp, setUsuarioResp] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
  });

  // state para armazenar o campo de confirmação de senha, e fazer a checagem com a senha do usuário
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  // função para atualizar o estado do confirmar senha
  function confirmSenha(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  // função para atualizar o estado de controle do formulário de usuário, automatizada para todos os campos
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...User,
      [event.target.name]: event.target.value
    });
  }

  // função de disparo da requisição para o backend, é bom deixar ela como assincrona
  async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    // verificar se os campos de senha e confirmar senha são iguais, e com no minimo 8 caracteres
    if (User.senha === confirmarSenha && User.senha.length >= 8) {
      // caso passe pelo IF, vai executar a tentativa de cadastro, e dar o alerta de sucesso
      try {
        await cadastroUsuario('/usuarios/cadastrar', User, setUsuarioResp);
        alert('Usuário cadastrado com sucesso')
      } catch (error) {
        // se der erro no cadastro, por exemplo por e-mail repetido, vai cair nessa msg de erro
        alert('Falha ao cadastrar o usuário, verifique os campos');
      }
    } else {
      // aqui é a mensagem de erro para o caso dos campos de senha estarem diferentes, vai avisar, e apagar os dois campos
      alert('Os campos de Senha e Confirmar Senha estão diferentes');
      setUsuario({ ...User, senha: '' });
      setConfirmarSenha('')
    }
  }

  // controle de efeito, para levar a pessoa para a tela de login assim que o backend devolver o JSON de cadastro ok
  useEffect(() => {
    if (UserResp.id !== 0) {
      navigate('/login');
    }
  }, [UserResp]);

  // função de navegação para o botão de cancelar
  // (só fiz essa função pq se eu usasse o Link no botão, quebrava o meu layout, ela não é necessária, da pra fazer com Link mesmo)
  function voltar(){
    navigate('/login')
  }

  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={6} className="imagem2"></Grid>
        <Grid item xs={6}>
          <Box display={'flex'} justifyContent={'center'}>
            <Grid xs={8} gap={2} display={'flex'} flexDirection={'column'}>
              <form onSubmit={cadastrar}>
                <Box display={'flex'} flexDirection={'column'} gap={2}>
                  <Typography align="center" variant="h3">
                    Cadastrar
                  </Typography>
                  <TextField
                    name="nome"
                    label="Nome completo"
                    value={User.nome}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  />
                  <TextField
                    name="usuario"
                    label="Endereço de e-mail"
                    value={User.usuario}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  />
                  <TextField
                    name="foto"
                    label="URL da foto"
                    value={User.foto}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  />
                  <TextField
                    name="senha"
                    label="Senha"
                    type="password"
                    value={User.senha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  />
                  <TextField
                    name="confirmarSenha"
                    label="Confirmar senha"
                    type="password"
                    value={confirmarSenha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => confirmSenha(event)}
                  />

                  <Box display={'flex'} gap={5}>
                    <Button fullWidth variant="contained" color="error" onClick={voltar}>
                      Cancelar
                    </Button>
                    <Button fullWidth variant="contained" color="primary" type="submit">
                      Cadastrar
                    </Button>
                  </Box>
                </Box>
              </form>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default CadastroUsuario;