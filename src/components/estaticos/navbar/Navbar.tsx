import React from 'react';
import { Box } from '@mui/material';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant='dense'>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant='h5' color='inherit'>
                            BeaTrindade
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant='h6' color='inherit'>
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant='h6' color='inherit'>
                                postagem
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant='h6' color='inherit'>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant='h6' color='inherit'>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant='h6' color='inherit'>
                                Sair
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;