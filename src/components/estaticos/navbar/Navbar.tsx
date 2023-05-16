import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'

function Navbar() {
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
                        <MenuIcon />
                    </IconButton>
                    <Box style={{cursor: "pointer"}}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        BlogPessoalShock
                    </Typography>
                    </Box> 

                    <Box className='navigation' display="flex" justifyContent="start">
                        <Box mx={2} style={{ cursor: "pointer"}}>
                            <Typography variant="h6" color="inherit">
                                Início
                            </Typography>
                        </Box>
                    </Box>  
                    <Box className='navigation' mx={2} style={{ cursor: "pointer"}}>
                        <Box>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Box>  
                    <Box className='navigation' mx={2} style={{ cursor: "pointer"}}>
                        <Box>
                            <Typography variant="h6" color="inherit">
                                Tema
                            </Typography>
                        </Box>
                    </Box>  
                    <Box className='navigation' mx={2} style={{ cursor: "pointer"}}>
                        <Box>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Box>  
                    <Box className='navigation' mx={28} style={{ cursor: "pointer"}}>
                        <Box>
                            <Typography variant="h6" color="inherit">
                                
                            </Typography>
                        </Box>
                    </Box>                      
                    
                    <Button color="inherit">Entrar/Sair</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Navbar;