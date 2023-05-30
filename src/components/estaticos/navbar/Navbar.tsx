import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { Grid } from '@mui/material';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    function logout() {
      dispatch(addToken(""));
      toast.info("Usuário deslogado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      dispatch(addToken(''))
      navigate('/login');
    }
  
    let navbarComponent;
  
    if(token !== '') {
      navbarComponent = (
  <AppBar position="static" className="navbar">
          <Toolbar variant="dense">
            <Grid container justifyContent={'space-between'} className='fonte'>
              <Box style={{ cursor: 'pointer' }}>
                <Typography variant="h5" color="inherit" className='fonte'>
                  BlogPessoal
                </Typography>
              </Box>
  
              <Box display="flex" justifyContent="start">
                <Link to="/home">
                  <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit">
                      home
                    </Typography>
                  </Box>
                </Link>
                <Link to="/postagens">
                  <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit">
                      postagens
                    </Typography>
                  </Box>
                </Link>
                <Link to="/temas">
                  <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit">
                      temas
                    </Typography>
                  </Box>
                </Link>
                <Link to="/formularioTema">
                  <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit">
                      cadastrar tema
                    </Typography>
                  </Box>
                </Link>
                <Link to="/perfil">
                  <Box mx={1} style={{ cursor: 'pointer' }}>
                    <Typography variant="h6" color="inherit">
                      perfil
                    </Typography>
                  </Box>
                </Link>
                <Box mx={1} style={{ cursor: 'pointer' }} onClick={logout}>
                  <Typography variant="h6" color="inherit">
                    logout
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      )
    }
  
    return (
      <>
        {navbarComponent}
      </>
    );
  }
  
  export default Navbar;