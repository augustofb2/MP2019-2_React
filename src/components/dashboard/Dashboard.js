import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>( {
    container: {
      width: '100vw',
    },
  }));

export default function Dashboard() {

    const classes = useStyles();

    return(
            <Grid container className={classes.container}>
                <Grid item xs={6}>
                    <Grid container>
                    <Grid item xs={12}>
                        <Typography>
                            Estatísticas
                        </Typography>
                    </Grid>
                    <Grid item xs={12}></Grid>
                        <Typography>
                            Previsões
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography>
                        Ações
                    </Typography>
                </Grid>
            </Grid>
    )
}