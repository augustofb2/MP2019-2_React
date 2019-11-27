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

    const handleEstudar = (disciplina) => {
        props.session.estudar(horas, disciplina);
        props.atualizar();
    }

    const handleDormir = () => {
        props.session.dormir(horas);
        props.atualizar();
    }

    const handleDivertir = () => {
        props.session.divertir(horas);
        props.atualizar();
    }

    return (
        <Grid container spacing={6} >
                {props.session.aluno.disciplinas.map((item) => (
                <Grid key={item.nome} item xs={4}>
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
                            <Button onClick={() => {handleEstudar(item)}} size={'small'} color={'primary'} variant={'contained'}>Estudar</Button>
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
                            <Typography className={classes.detalhes}>
                                Cansaço: 
                            </Typography>
                            <LinearProgress color={'primary'} variant={'determinate'} value={props.session.aluno.cansaco} />
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
                            <Button onClick={() => {handleDormir()}} size={'small'} color={'primary'} variant={'contained'}>Dormir</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant={'h6'}>
                                Se divertir
                            </Typography>
                            <Typography className={classes.detalhes}>
                                Lazer: 
                            </Typography>
                            <LinearProgress color={'primary'} variant={'determinate'} value={props.session.aluno.lazer} />
                            <Typography className={classes.detalhes}>
                                Cansaço: 
                            </Typography>
                            <LinearProgress color={'primary'} variant={'determinate'} value={props.session.aluno.cansaco} />
                            <Typography className={classes.detalhes}>
                                Estresse: 
                            </Typography>
                            <LinearProgress color={'primary'} variant={'determinate'} value={props.session.aluno.estresse} />
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
                            <Button onClick={() => {handleDivertir()}} size={'small'} color={'primary'} variant={'contained'}>Lazer</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
    )
}