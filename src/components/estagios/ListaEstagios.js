import React from 'react';
import ContentSection from '../../layout/ContentSection';
import { Card, CardContent, Typography, Container, Grid, Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    },
  }));

export default function ListaEstagios(props) {

    const classes = useStyles();

    const handleContinuar = () => {
        props.session.avancarPeriodo();
        props.session.zerarEstagio();
        props.session.cumprirObrigacoes();
        props.atualizar();
    }

    const handleAderir = (estagio) => {
        props.session.matricularEstagio(estagio);
        props.session.avancarPeriodo();
        props.session.cumprirObrigacoes();
        props.atualizar();
    }

    return <ContentSection>
        <Container maxWidth={'lg'}>
            <Typography variant={'h4'} className={classes.titulo} >
                Oportunidades de Estágio
            </Typography>
            <Grid container spacing={6} >
                {props.session.estagios.filter((estagio) => (
                    estagio.semestre <= props.session.aluno.semestre
                )).map((item) => (
                <Grid key={item.empresa} item xs={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant={'h6'} paragraph>
                                {item.empresa}
                            </Typography>
                            <Typography paragraph className={classes.detalhes}>
                                Carga Horária: {item.horas}
                            </Typography>
                            <Typography className={classes.detalhes} >
                                Remuneração: {item.remuneracao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => {handleAderir(item)}} size={'small'} color={'primary'} variant={'contained'}>Aderir</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
                <Grid item xs={12}>
                    <hr/>
                </Grid>
                <Grid item xs={10}>
                </Grid>
                <Grid item xs={2}>
                    <Button variant={'contained'} size={'large'} onClick={handleContinuar} >Não Estagiar</Button>
                </Grid>
            </Grid>
        </Container>
    </ContentSection>;
}
