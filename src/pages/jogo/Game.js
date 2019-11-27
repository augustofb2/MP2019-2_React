import React, {  useEffect, useState } from 'react';
import Jogo from '../../backend/jogo/jogo';
import jogo from '../../backend/objetos/jogo';
import Seletor from '../../components/Seletor/Seletor';

export default function Game(){

    const [gameSession, setGameSession] = useState(new Jogo(jogo));

    const [change, setChange] = useState(0);


    const atualizar = () => {setChange(change => ++change)};

    useEffect(() => {
        gameSession.iniciarSemestre();
        atualizar();
    }, [gameSession]);

    return(
        <Seletor session={gameSession} atualizar={atualizar} />
    )
}

