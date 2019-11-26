import React from 'react';
import ContentSection from '../../layout/ContentSection';
import { Card, CardContent, Typography, Container, Grid, Button } from '@material-ui/core';
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
    }
  }));

export default function ListaDisciplina(props) {

    const classes = useStyles();

    return <ContentSection>
        <Container maxWidth={'lg'}>
            <Typography variant={'h4'} className={classes.titulo} >
                Disciplinas Matriculadas
            </Typography>
            <Grid container spacing={6} >
                {props.session.aluno.disciplinas.map((item) => (
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant={'h6'} paragraph>
                                {item.nome}
                            </Typography>
                            <Typography paragraph className={classes.detalhes}>
                                Créditos: {item.creditos}
                            </Typography>
                            <Typography className={classes.detalhes} >
                                Semestre: {item.semestre}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
                <Grid item xs={12}>
                    <hr/>
                </Grid>
                <Grid item xs={10}>
                </Grid>
                <Grid item xs={2}>
                    <Button color={'primary'} variant={'contained'} size={'large'} >Continuar</Button>
                </Grid>
            </Grid>
        </Container>
    </ContentSection>;
}
