
import { Grid, Button, Box, TextField, Typography } from '@material-ui/core';
import './CadastroUsuario.css';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { cadastroUsuario } from '../../services/Service';
import User from '../../models/User';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
            console.log(userResult)
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(usuario.senha === confirmarSenha && usuario.senha.length >= 8){
        cadastroUsuario('/usuarios/cadastrar', user, setUserResult)
        alert('Usuário cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro')
        }
    }
        return (
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box>
                        <form onSubmit={onSubmit}>
                            <Typography
                                variant="h3"
                                gutterBottom
                                color="textPrimary"
                                component="h3"
                                align="center"
                                className="textosL"
                            >
                                Cadastrar
                            </Typography>
                            <TextField
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                id="nome"
                                label="nome"
                                variant="outlined"
                                name="nome"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                            value={user.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                id="usuario"
                                label="usuario"
                                variant="outlined"
                                name="usuario"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                            value={user.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
                                id="senha"
                                label="senha"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                type='password'
                                fullWidth
                            />
                            <TextField
                            value={confirmarSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                                id="confirmarSenha"
                                label="Confirmar Senha"
                                variant="outlined"
                                name="confirmarSenha"
                                margin="normal"
                                type='password'
                                fullWidth
                            />
                            <Box marginTop={2} textAlign="center">
                                <Link to="/home" >
                                    <Button
                                        className="outlinedButtonL"
                                        variant="contained"
                                        color="secondary"
                                        style={{
                                            borderColor: "white",
                                            backgroundColor: "black",
                                            color: "white",
                                            marginRight: "20px"
                                        }}>
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button
                                    className="outlinedButtonL"
                                    variant="contained"
                                    color="primary"
                                    style={{
                                        borderColor: "white",
                                        backgroundColor: "black",
                                        color: "white",
                                    }}>
                                    Cadastar
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>

            </Grid>
        );
    }

    export default CadastroUsuario;
