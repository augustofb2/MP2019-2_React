import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Container } from '@material-ui/core';
import Estatisticas from '../estatisticas/Estatisticas';
import Acoes from '../acoes/Acoes';
import Previsoes from '../previsoes/Previsoes';

const useStyles = makeStyles(theme =>( {
    container: {
      maxWidth: '100vw',
      paddingTop: '2rem'
    },
    rightGrid: {
        height: '89vh',
        backgroundColor: '#cacaca',
    },
    lefttGrid: {
        height: '44vh',
        backgroundColor: '#cacaca',
        marginRight: '0.5rem',
        marginBottom: '0.5rem'
    }
  }));

export default function Dashboard(props) {

    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} className={classes.lefttGrid} component={Paper}>
                            <Typography variant={'h5'} paragraph>
                                Estatísticas
                            </Typography>
                            <Estatisticas session={props.session} />
                        </Grid>
                        <Grid item xs={12} className={classes.lefttGrid} component={Paper}>
                            <Typography variant={'h5'} paragraph>
                                Previsões
                            </Typography>
                            <Previsoes session={props.session} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.rightGrid} component={Paper}>
                    <Typography variant={'h5'} paragraph>
                        Ações
                    </Typography>
                    <Acoes session={props.session} atualizar={props.atualizar} />
                </Grid>
            </Grid>
        </Container>
    )
}