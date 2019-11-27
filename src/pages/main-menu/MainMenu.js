import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Home from '../../layout/Home';
import { Link } from "react-router-dom";
export default function MainMenu(props){


    return(
        <Home>
            <Button component={Link} to="/jogo" variant={'contained'} size={"large"} color={'secondary'}>
                <Typography variant={'h2'}>
                    Novo Jogo
                </Typography>
            </Button>
        </Home>
    )
}