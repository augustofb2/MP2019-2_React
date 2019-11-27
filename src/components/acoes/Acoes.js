import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, LinearProgress, CardActions, Button, Slider } from '@material-ui/core';

const useStyles = makeStyles(theme =>( {
    card: {
      backgroundColor: theme.palette.secondary[300],
      color: theme.palette.primary.main,
      height: '100%'
    },
    titulo: {
        color: theme.palette.secondary[800],
        marginBottom: '3rem',
    },
    detalhes: {
        color: 'black'
    }
  }));

export default function Acoes(props){

    const [horas, setHoras] = useState(1);

    const classes = useStyles();

    const handleSliderChange = (event, newValue) => {
        setHoras(newValue);
      };

    return (
        <Grid container spacing={6} >
                {props.session.aluno.disciplinas.map((item) => (
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant={'h6'} paragraph>
                                {item.nome}
                            </Typography>
                            <Typography className={classes.detalhes}>
                                Créditos: {item.creditos}
                            </Typography>
                            <Typography className={classes.detalhes} >
                                Semestre: {item.semestre}
                            </Typography>
                            <Typography className={classes.detalhes}>
                                Desempenho: 
                            </Typography>
                            <LinearProgress color={'primary'} variant={'determinate'} value={item.desempenho} />
                        </CardContent>
                        <CardActions>
                            <Typography className={classes.detalhes}>
                                Horas:
                            </Typography>
                            <Slider
                                defaultValue={1}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={props.session.calcularTempoDisponivel()}
                                onChange={handleSliderChange}
                                value={horas}
                            />
                            <Button size={'small'} color={'primary'} variant={'contained'}>Estudar</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant={'h6'}>
                                Dormir
                            </Typography>
                            <Typography className={classes.detalhes}>
                                Sono: 
                            </Typography>
                            <LinearProgress color={'primary'} variant={'determinate'} value={props.session.aluno.sono} />
                        </CardContent>
                        <CardActions>
                            <Typography className={classes.detalhes}>
                                Horas:
                            </Typography>
                            <Slider
                                defaultValue={1}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                marks
                                min={1}
                                max={props.session.calcularTempoDisponivel()}
                                onChange={handleSliderChange}
                                value={horas}
                            />
                            <Button size={'small'} color={'primary'} variant={'contained'}>Dormir</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
    )
}