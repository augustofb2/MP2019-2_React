import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper, Container } from '@material-ui/core';

const useStyles = makeStyles(theme =>( {
    container: {
      maxWidth: '100vw',
      paddingTop: '2rem'
    },
    rightGrid: {
        height: '90vh'
    },
    lefttGrid: {
        height: '45vh'
    }
  }));

export default function Dashboard() {

    const classes = useStyles();

    return(
        <Container className={classes.container}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} className={classes.lefttGrid} component={Paper} color={'primary'}>
                            <Typography>
                                Estatísticas
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.lefttGrid} component={Paper}>
                            <Typography>
                                Previsões
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} className={classes.rightGrid} component={Paper}>
                    <Typography>
                        Ações
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}