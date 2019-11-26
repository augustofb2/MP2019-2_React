import React, {  useEffect, useState } from 'react';
import Jogo from '../../backend/jogo/jogo';
import jogo from '../../backend/objetos/jogo';
import ContentSection from '../../layout/ContentSection';
import { Card, CardContent, Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListaDisciplina from '../../components/lista-disciplinas/ListaDisciplinas';
import Dashboard from '../../components/dashboard/Dashboard';


const useStyles = makeStyles(theme =>( {
    card: {
      maxWidth: 275,
      backgroundColor: theme.palette.secondary[200],
      color: theme.palette.primary.main
    },
  }));

export default function Game(){

    const [gameSession, setGameSession] = useState(new Jogo(jogo));

    const [change, setChange] = useState(0);

    const classes = useStyles();

    const atualizar = () => {setChange(change => ++change)};

    useEffect(() => {
        gameSession.iniciarSemestre();
        atualizar();
    }, [gameSession]);

            if(gameSession.periodo === 0){
                return(
                    <ListaDisciplina session={gameSession} atualizar={atualizar} />
                )
            }
            if(gameSession.periodo === 1){
                return(
                    <Dashboard session={gameSession} atualizar={atualizar} />
                )
            }
            

    // return(
    //     <ContentSection>
    //         <div>
                
    //         </div>
    //     </ContentSection>
    // )
}

