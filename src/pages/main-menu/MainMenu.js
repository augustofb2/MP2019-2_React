import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    botao: {
        backgroundColor: theme.palette.primary.main
    }
}))

export default function MainMenu(props){

    const classes = useStyle();

    return(
        <div>
            <Button variant={'contained'} size={"large"} color={'secondary'}>
                <Typography variant={'h2'}>
                    Novo Jogo
                </Typography>
            </Button>
        </div>
    )
}