import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(theme =>( {
    card: {
      backgroundColor: theme.palette.secondary[200],
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

export default function Estatisticas(props){

    const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

    const classes = useStyles();

    return(
        <Grid container spacing={4}>
            <Grid item xs={7}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant={'h6'}>
                            Aluno
                        </Typography>
                        <Typography className={classes.detalhes}>
                            Nome: {props.session.aluno.nome}
                        </Typography>
                        <Typography className={classes.detalhes}>
                            Dinheiro: {props.session.aluno.dinheiro}
                        </Typography>
                        <Typography className={classes.detalhes}>
                            Creditos obtidos: {props.session.aluno.creditos}
                        </Typography>
                        <Typography className={classes.detalhes}>
                            Sono: 
                        </Typography>
                        <LinearProgress color={'primary'} variant={'determinate'} value={props.session.aluno.sono} />
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
                </Card>
            </Grid>
            <Grid item xs={5}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant={'h6'}>
                            Tempo
                        </Typography>
                        <Typography className={classes.detalhes}>
                            Semestre: {props.session.aluno.semestre}
                        </Typography>
                        <Typography className={classes.detalhes}>
                            Semana: {props.session.semana + 1}
                        </Typography>
                        <Typography className={classes.detalhes}>
                            Dia da semana: {dias[props.session.diaSemana]}
                        </Typography>
                        <Typography className={classes.detalhes}>
                            Hora: {props.session.hora}h00
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}