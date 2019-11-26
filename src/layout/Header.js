import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    head: {
        minHeight: '8vh',
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        color: 'lightGray'
    }
}))

export default function Header(props){

    const classes = useStyles();

    return(
    <Container maxWidth={false} className={classes.head}>
        <Typography variant={'h3'} className={classes.titulo}>
            Simulador de Carreira UnB
        </Typography>
    </Container>
    )
}