import { Box, Button, Grid, TextField, Typography } from '@mui/material';

function CadastroTema() {
  return (
    <>
      <Grid container justifyContent={'center'} my={2}>
        <Grid item xs={10} md={4}>
          <form>
            <Box display='flex' flexDirection={'column'} gap={2}>
              <Typography variant='h4' align='center'>Formulário de cadastro de tema</Typography>
              <TextField label='Descrição do tema' name='descricao'  />
              <Button variant='contained'>Cadastrar Tema</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  )
}

export default CadastroTema