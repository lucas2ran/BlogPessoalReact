import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
      const dispatch = useDispatch()
      const navigate = useNavigate();

    function goLogout(){
        alert("Usuário deslogado")
        dispatch(addToken(''))
        navigate('/login')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='NavBar' position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                
                    </IconButton>
                    <Box className='textdecorater'>
                    <Link to="/home" className='textdecorater'>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            BlogPessoalShock
                        </Typography>
                    </Link>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" style={{textDecoration: "none"}}>
                            <Box className='navigation' mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Início
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    <Link to="/postagem" className='textdecorater'>
                    <Box className='navigation' mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        
                    </Box>
                    </Link>
                    <Link to="/temas" className='textdecorater'>
                    <Box className='navigation' mx={1} style={{ cursor: "pointer" }}>
                        <Box>
                            <Typography variant="h6" color="inherit">
                                Tema
                            </Typography>
                        </Box>
                    </Box>
                    </Link>
                    <Link to="/formularioTema" className='textdecorater'>
                    <Box className='navigation' mx={1} style={{ cursor: "pointer" }}>
                        
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        
                    </Box>
                    </Link>
                    <Box className='navigation' mx={1} style={{ cursor: "pointer" }} onClick={goLogout} >
                    <Typography variant="h6" color="inherit">
                          Logout
                    </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;